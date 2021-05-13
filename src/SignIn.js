import React, { useState } from 'react';
//Here I'm Importing Required CSS Files
import './SignIn.css';

// Here I'm Importing the Material UI Icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

function SignIn() {
    const [changeEyeIcon, setEyeIcon] = useState(false)
    const [passwordType, setPasswordType] = useState(true)

    const changeTypeAndButton = () => {
        if (changeEyeIcon) {
            setEyeIcon(false)
        }
        else {
            setEyeIcon(true)
        }

        if (passwordType) {
            setPasswordType(false)
        }
        else {
            setPasswordType(true)
        }
    }
    return (
        <div className="SignIn">
            <div className="SignIn_header">
                <a href="/">
                    <img src="https://goglobiliti.com/assets/landing-page/main/globiliti-logo2x-p-500.png" className="logo" alt="logo" />
                </a>
                <p>Create school account</p>
            </div>
            <div className="SignIn_body">
                <div className='SignIn_body_Left'>
                    <h1>Welcome to Globiliti!</h1>
                    <p>Create your school account</p>
                    <div className="SignIn_body_left_form">
                        <form action='/'>
                            <div className="nameField">
                                <label>
                                    What's your full name?
                              </label>
                                <br />

                                <input type='text' placeholder='Full Name' className='nameInput' required />
                            </div>

                            <div className="emailField">
                                <label>
                                    Email
                              </label>
                                <br />
                                <input type='email' placeholder='Email' className='emailInput' required />
                            </div>
                            <div className="passwordField">
                                <label>
                                    Password
                              </label>
                                <div className='mainpasswordfield'>
                                    <input type={passwordType ? 'password' : 'text'} placeholder='Password' className='passwordInput' required />
                                    {changeEyeIcon ? <VisibilityIcon className='eyelogo' onClick={changeTypeAndButton} />
                                        : <VisibilityOffIcon className='eyelogo' onClick={changeTypeAndButton} />}
                                </div>
                                <p className='pwdDescription'>Password must be 8 characters or longer</p>
                            </div>

                            <button className="CreateBtn" type='submit'>
                                Create Account
                          </button>
                        </form>
                    </div>
                </div>
                <div className='SignIn_body_Right'>
                    <img src="https://goglobiliti.com/assets/images/onboarding-1.png" alt='main Image' />
                </div>
            </div>
        </div>
    )
}

export default SignIn
