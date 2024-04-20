import React, {useState} from 'react';
import './Settings.css';
import Header from '../components/dashHeader'
import Sidebar from '../components/Sidebar';
import { db, auth} from "../firebase/firebase-config";
import { updateEmail, updatePassword ,sendEmailVerification } from 'firebase/auth';

const Settings = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const handleChangeSettings = async (e) => {
        e.preventDefault();

        if (newEmail !== auth.currentUser.email) {
            try {
                await updateEmail(auth.currentUser, newEmail);
                await db.collection('users').doc(auth.currentUser.email).update({ email: newEmail });
                setSaveSuccess(true);
            } catch (error) {
                setError(error.message);
            }
        }

        if (newPassword && newPassword === confirmPassword) {
            try {
                await updatePassword(auth.currentUser, newPassword);
                setSaveSuccess(true);
            } catch (error) {
                setError(error.message);
            }
        } else if (newPassword && newPassword !== confirmPassword) {
            setError("Passwords don't match.");
        }
        
    };

    if (saveSuccess) {
        return <div>Settings saved successfully!</div>;
    }

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
                <i>Change your password, update your email, and delete your account.</i></p>
            <form onSubmit={handleChangeSettings}>
                <label htmlFor='email'>New Email:</label>
                <input type='email' id='email' name='email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        
                <label htmlFor='newPassword'>New Password:</label>
                <input type='password' id='newPassword' name='newPassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input type='password' id='confirmPassword' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />


                {/* 
                 <label htmlFor='theme'>Theme:</label>
                 <select id='theme' name='theme'>
                    <option value='light'>Light</option>
                    <option value='dark'>Dark</option>
                 </select>
                */}

                {error && <div className='error'>{error}</div>}
                <button type='submit'>Save Settings</button>
                 {/*
                <button type='button' onClick={deleteAccount} className='delete-button'>Delete Account</button>
                */}
            </form>
        </div >
    );
};

export default Settings;