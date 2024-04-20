import React, {useState} from 'react';
import './Settings.css';
import Header from '../components/dashHeader'
import Sidebar from '../components/Sidebar';
import {auth} from "../firebase/firebase-config";
import { updateEmail, updatePassword, deleteUser, sendEmailVerification} from 'firebase/auth';

const Settings = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const user = auth.currentUser;

    const handleChangeSettings = async (e) => {
        e.preventDefault();
        if (newEmail !== user.email) {
            try {
              await sendEmailVerification(user);
              setError('Please verify the new email address. Check your inbox for a verification email.');
            } catch (error) {
              setError(error.message);
              return;
            }
          }
      
          // Proceed with updating email if verification is successful
          try {
            await updateEmail(user, newEmail);
            setNewEmail('');
            setSaveSuccess(true);
          } catch (error) {
            setError(error.message);
          }
      
          if (newPassword && newPassword === confirmPassword) {
            try {
              await updatePassword(user, newPassword);
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

    const handleDeleteAccount = async () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
          try {
            await deleteUser(auth.currentUser);
            console.log('Account deleted successfully.');
          } catch (error) {
            setError(error.message);
          }
        }
      };

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

                <button type='button' onClick={handleDeleteAccount} className='delete-button'>Delete Account</button>

            </form>
        </div >
    );
};

export default Settings;