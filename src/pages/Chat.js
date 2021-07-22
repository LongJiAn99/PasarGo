import React, { useRef, useState, useEffect } from 'react'
import "firebase/firestore";
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../config/firebase';
import axios from 'axios';

import { useAuth } from '../contexts/AuthContext';

const Chat = () => {
    const history = useHistory();
    const { currentUser } = useAuth();
    const [ loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "currentUserPhoto.jpeg", { type: 'image/jpeg' })
    }

    useEffect(() => {
        if(!currentUser || currentUser === null) {
            history.push('./');
            return;
        }
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": '8b55380d-b9a2-43b0-a134-7aef71aeb8d8',
                "user-name": currentUser.email,
                "user-secret": currentUser.uid,
            }}
        )
        .then(() => {
            setLoading(false);
        })
        .catch(e => {
            let formData = new FormData();
            formData.append('email', currentUser.email);
            formData.append('username', currentUser.email);
            formData.append('secret', currentUser.uid);

            getFile(currentUser.photoURL)
                .then(avatar => {
                    formData.append('avatar', avatar, avatar.name)

                    axios.post('https://api.chatengine.io/users/', 
                        formData,
                        {headers: {"PRIVATE-KEY": '8af2d6d3-9767-4fcd-93ec-373821ad1bcf' }}
                    )
                    .then(() => setLoading(false))
                    .catch(e => console.log('e', e.response))
                })
        })
    
    }, [currentUser, history]);

    if (!currentUser || loading) return <div/>
  
    return (
        <div className="chat2-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    PasarGo chat!
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine 
                height="calc(100vh - 66px)"
                projectID= "8b55380d-b9a2-43b0-a134-7aef71aeb8d8"
                userName= {currentUser.email}
                userSecret= {currentUser.uid}
            />

        </div>

    )
}


export default Chat;