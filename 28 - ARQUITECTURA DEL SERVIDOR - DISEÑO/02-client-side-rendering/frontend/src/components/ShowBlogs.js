import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { BsPlusCircle } from "react-icons/bs";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
//import dotenv from 'dotenv';
//dotenv.config();

//const URI = process.env.URI
const URI = 'http://localhost:8080/blogs/'

const CompShowBlogs = () =>{
    
    const [blogs, setBlog] = useState([]);

    useEffect(()=>{
        getBlogs()
    }, []);

    const getBlogs = async ()=>{
        const res = await axios
                                .get(URI)
        setBlog(res.data)
    }

    const deleteBlog = async (id)=>{
        await axios
                    .delete(`${URI}${id}`)
        getBlogs()
    }

    return (

        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to='/create' className='btn btn-outline-success' ><BsPlusCircle /></Link>
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                            
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                            blogs.map((blog)=>(
                                   <tr key={blog.id}>
                                   <td>{blog.title}</td>
                                   <td>{blog.content}</td>
                                   <td>
                                       <Link to={`/edit/${blog.id}`} className='btn btn-info'><AiFillEdit /></Link>
                                       <button onClick={()=>deleteBlog(blog.id)} className='btn btn-danger' ><AiFillDelete /></button>
                                   </td>
                               </tr>
                           )) 
                           }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default CompShowBlogs;
