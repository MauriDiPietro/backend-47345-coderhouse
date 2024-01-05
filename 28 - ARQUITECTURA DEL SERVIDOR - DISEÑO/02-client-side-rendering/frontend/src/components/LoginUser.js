import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const URI = 'http://localhost:8080/users/login'

const CompLoginUser = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

        const login = async (e) => {
            try {
                e.preventDefault();
                const data = await axios
                                        .post(URI, {username, password});
                console.log(data)
                if(data.data.accessToken){
                    localStorage.setItem('token', data.data.accessToken)
                    // alert('Login OK!')
                    navigate(`/home/${data.data.userId}`);
                } else {
                    alert('Please check your username and password')
                }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
        }

    return (

        <div>
                <h3>Login APP-TASKS</h3>
                <form onSubmit={login}>
                     <p>{msg}</p>
                    <div className='mb-3'>
                        <label className='form-label'>Username</label>
                        <input 
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            type= 'text'
                            className='form-control'
                        />
                         <label className='form-label'>Password</label>
                        <input 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type= 'password'
                            className='form-control'
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Login!</button>
                    <h3>Is not registered?</h3>
                    <Link to='/signup'>  
                        <button className='btn btn-primary'>Register</button> 
                    </Link>
                </form>
        </div>

    )
}

export default CompLoginUser;