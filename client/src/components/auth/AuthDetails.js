import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'

function AuthDetails(props) {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then (() => {
            navigate('/Home')
            console.log('Signed out successfully');
        }).catch (err => console.log(err));
    }
    const navigate = useNavigate();
    return (
        <div>
        {authUser ? 
            <Button 
                onClick={() => userSignOut()}
                variant="dark"
                style={{border: 'none', outline: 'none', cursor: 'pointer', marginLeft: '20px'}}
                >
                    Sign out
            </Button>
            :
            <>
            <Button
                onClick={() => navigate('/Login')}
                variant="dark"
                style={{border: 'none', outline: 'none', cursor: 'pointer', marginLeft: '20px'}}
                >
                    Sign in
            </Button>
            <Button
                onClick={() => navigate('/Register')}
                variant="dark"
                style={{border: 'none', outline: 'none', cursor: 'pointer', marginLeft: '20px'}}
                >
                    Sign up
            </Button>
            </>
        }
        </div>
    );
}

export default AuthDetails;