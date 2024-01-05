import axios from 'axios';
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import Navbar1 from './NavBar.js'
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

const URI = 'http://localhost:8080/users/token'

const CompHome = () => {
    const {id} = useParams()
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    const refreshToken = async () => {
        try {
            const res = await axios.get(URI)
            setToken(res.data.accessToken)
            const decoded = jwt_decode(res.data.accessToken)
            console.log(decoded)
            setUser(decoded)
        } catch (error) {
            alert(error.message)
            Navigate('/')
        }
    }

    const deleteTask = async (idTask)=>{
        alert('are you sure you want to delete?')
        await axios
                    .delete(`http://localhost:8080/tasks/${idTask}`)
        getUser()
    }

    useEffect(()=>{
        // refreshToken()
        getUser()
    }, []);

    const getUser = async ()=>{
        refreshToken()
        const res = await axios.get(`http://localhost:8080/tasks/user/${id}`)
                                // console.log(res)
        // setUser(res.data)
    }

    return (
        <div>
            <Navbar1 user={user}/>
<br></br>
<br></br>
<br></br>
               {
                   user ? <h3>Bienvenido {user.username}!</h3> : null
               } 
               {
                   user.postsUser ? <h2>Lista de tareas</h2> : <h2>Comenzá a guardar tus tareas</h2>
               }
               {/* { 
                   res.data.map((p)=>
                   <>
                                            <ul>
                                            <li key={p.id}>{p.title}</li>
                                            <li>{p.content}</li>
                                            <li>{p.id}</li>
                                            </ul>
                    </>
                   ) 
               }  */}
               
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Date YYYY-MM-DD</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            user.postsUser ? user.postsUser.map((p)=>(
                                   <tr key={p.id}>
                                   <td>{p.title}</td>
                                   <td>{p.content}</td>
                                   <td>{p.date}</td>
                                   <td>
                                       <Link to={`/edit/${p.id}`} className='btn btn-info'><AiFillEdit /></Link>
                                       <button onClick={()=>deleteTask(p.id)} className='btn btn-danger' ><AiFillDelete /></button>
                                   </td>
                               </tr>
                           )) : null
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <Link to={`/create/${id}`}> 
                <button className="btn btn-primary"> Create task </button> 
        </Link>
                
        </div>

    )

}

export default CompHome;