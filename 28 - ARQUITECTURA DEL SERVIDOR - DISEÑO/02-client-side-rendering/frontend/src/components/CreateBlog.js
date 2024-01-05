import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar1 from './NavBar';


const URI = 'http://localhost:8080/tasks'

const CompCreateBlog = () => {
    const {id} = useParams()

    const fechaCompleta = new Date()
    const month = fechaCompleta.getMonth()+1
    const year = fechaCompleta.getFullYear()
    const day = fechaCompleta.getDate()
    const fechaActual = (`${year}-${month}-${day}`)

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(fechaActual);
    const [userId] = useState(id)
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(URI, {title, content, date, userId});
                    console.log(title, content, date, userId)
        navigate(`/home/${id}`);
    }

    // const updateDate = (date) =>{
    //     setDate({date: date})
    // }

    return (

        <div>
            {/* <Navbar1 /> */}
                <h3>Create TASK</h3>
                <form onSubmit={store}>
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
                            type='date'
                            value={date}
                            // data-date-format="YYYY-MM-DD"
                            // dateformat="YYYY-MM-DD"
                            placeholder={date}
                            onChange={e=>setDate(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </form>
        </div>

    )
}

export default CompCreateBlog;