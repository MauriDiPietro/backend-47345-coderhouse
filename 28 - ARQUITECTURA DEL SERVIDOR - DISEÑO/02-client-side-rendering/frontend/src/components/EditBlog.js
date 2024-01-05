import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const URI = 'http://localhost:8080/tasks/'


const CompEditBlog = () => {
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const refreshToken = async () => {
        try {
            const res = await axios.get('http://localhost:8080/users/token')
            setToken(res.data.accessToken)
            const decoded = jwt_decode(res.data.accessToken)
            console.log(decoded)
            setUser(decoded)
        } catch (error) {
            alert(error.message)
            navigate(`/home/${user.id}`)
        }
    }

    const update = async (e) =>{
        e.preventDefault();
        await axios
                    .put(URI + id, {
                        title, content, date
                    });
        navigate(`/home/${user.id}`);
    }

    useEffect(()=>{
        getBlogById()
    }, []);

    const getBlogById = async () => {
        refreshToken()
        const res = await axios
                                .get(URI + id)
        setTitle(res.data.title)
        setContent(res.data.content)
        setDate(res.data.date)
    }

    return (

        <div>

            <h3>Edit TASK</h3>
                <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input 
                            value={title}
                            onChange={(e)=>setTitle(e.target.value)}
                            type= 'text'
                            className='form-control'
                        />
                         <label className='form-label'>Content</label>
                        <input 
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                            type= 'textarea'
                            className='form-control'
                        />
                          <br></br>
                        <input 
                            value={date}
                            type='date'
                            onChange={e=>setDate(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Modify</button>
                </form>

        </div>

    )

}

export default CompEditBlog;