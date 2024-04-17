import React from 'react';
import './Settings.css';

const Settings = () => {

    const deleteAccount = () => {
        /* Need to implement firebase auth to delete account
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
       console.log("Account deleted.");
    };

    return(
        <div className='settings-container'>
            <h1>User Settings</h1>
            <p>Customize your experience by adjusting the settings below. <br />
            <i>Change your username, update your email, choose a theme, and delete your account.</i></p>
            <form>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username'/>

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' />

                <label htmlFor='theme'>Theme:</label>
                <select id='theme' name='theme'>
                    <option value='light'>Light</option>
                    <option value='dark'>Dark</option>
                </select>

                {/* Filler code for settings if we do notifications
                <label htmlFor='notifications'>Notifications:</label>
                <input type='checkbox' id='notifications' name='notifications' />
                */}

                <button type='submit'>Save Settings</button>
                <button type='button' onClick={deleteAccount} className='delete-button'>Delete Account</button>

            </form>
        </div>
    );
};

export default Settings;