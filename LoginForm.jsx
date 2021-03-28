import {useState} from 'react';
import axios from 'axios';

const LoginForm = ()=>{
    const[username,setUsername] =useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    
    const handleSubmit = async(e) =>{
        e.preventDefault();

        const authObject={ 'Project-ID': "ef021b53-c94d-413f-9aa9-a07d21e91e81" ,'User-Name':username,'User-Secret':password};

        try{
            await axios.get('https://api.chatengine.io/chats',{ headers:authObject });

          localStorage.setItem('username',username);
          localStorage.setItem('password',password);
            window.location.reload();
        }catch(err){
            setError('Wrong username/password');
        }

        };

    return (

        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Jarvis  </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} 
                             className="input" placeholder="Username" required/>
                        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} 
                             className="input" placeholder="Password" required />
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Login</span>
                            </button>
                        </div>
                       
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}
export default LoginForm;