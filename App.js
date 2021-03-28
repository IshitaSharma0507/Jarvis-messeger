import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from'./components/LoginForm';
import './App.css';

const App = () => {         //creating functional component
    if(!localStorage.getItem('username'))
    return <LoginForm />;


    return (
        <ChatEngine  
            height="100vh" //full screen of chat engine
            projectID= "ef021b53-c94d-413f-9aa9-a07d21e91e81"   //string we get once we create our app
            userName= {localStorage.getItem('username')}  //username of logged in user
            userSecret={localStorage.getItem('password')}  //password
            renderChatFeed={ (chatAppProps)=> <ChatFeed {... chatAppProps}/> }
                                                         //spread all the props  coming from chat engine
        />
    );
};

export default App; 