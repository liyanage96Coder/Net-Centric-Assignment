import React, { useState } from 'react'
import '../assets/css/component.css'

const popUp = ({ onFormSubmit }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(email, password);
    }
    return (
        <div className='popup-container-main'>
            <form onSubmit={handleSubmit}>
                <div className='popup-content'>
                    <h2>Admin Login</h2>
                    <div>
                        <div>
                            <label htmlFor='email'>Email</label>
                        </div>
                        <input type='email' id='email' name='email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <div>
                            <label htmlFor='password'>Password</label>
                        </div>
                        <input type='password' id='password' name='password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className='popup-content-btn'>
                        <button>LogIn</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default popUp
