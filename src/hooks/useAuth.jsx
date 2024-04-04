import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            if (user) {
                console.log('User is signed in');
                console.log('User:', user);
            } else {
                console.log('User is signed out');
            }
        });

        return () => unsubscribe();
    }, []);

    return { user };
};

export default useAuth;
