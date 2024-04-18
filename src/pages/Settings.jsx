import React, {useState} from 'react';
import './Settings.css';
import Header from '../components/dashHeader'
import Sidebar from '../components/Sidebar';
import { db } from '../firebase/firebase-config';

const Settings = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    //Handle save function
    const handleSaveSettings = (e) => {
        e.preventDefault();

        db.collection('users').doc('user_id_here').update({
            username: username,
            email: email
        }).then(() => {
            console.log('Settings saved successfully!');
        }).catch((error) => {
            console.error('Error saving settings:', error);
        });        
    };

    /* 
    const deleteAccount = () => {
        Need to implement firebase auth to delete account
            const user = firebase.auth().currentUser; // Get the current user
            if (user) {
                user.delete().then(() => {
                // Account deleted successfully
                console.log('Account deleted!');
            }).catch((error) => {
                // An error occurred while deleting the account
                console.error('Error deleting account:', error);
            });
        */

        /* 
            need to make this function a component ( then call it back into this same spot)
            you will also need to make a route to settings that authenticates the users state
            research how to terminate via firebase console 
            check out the routes for reference on app.jsx
        
         
        console.log("Account deleted.");
    };
    */

    return (
        <div className='settings-container'>
            <Header />
            <Sidebar />
            <h1>User Settings</h1>
            <p>Customize your experience by adjusting the settings below. <br />
                <i>Change your username, update your email, choose a theme, and delete your account.</i></p>
            <form onSubmit={handleSaveSettings}>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />


                {/* 
                 <label htmlFor='theme'>Theme:</label>
                 <select id='theme' name='theme'>
                    <option value='light'>Light</option>
                    <option value='dark'>Dark</option>
                 </select>
                */}

                <button type='submit'>Save Settings</button>
                 {/*
                <button type='button' onClick={deleteAccount} className='delete-button'>Delete Account</button>
                */}
            </form>
        </div >
    );
};

export default Settings;