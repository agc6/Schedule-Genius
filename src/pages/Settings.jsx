import React from 'react';
import './Settings.css';

const Settings = () => {
    return(
        <div className='settings-container'>
            <h1>User Settings</h1>
            <p>Customize your experience by adjusting the settings below. <br />
            Change your username, update your email, and choose a theme </p>
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

            </form>
        </div>
    );
};

export default Settings;