import React from 'react'
import SignUp from '../../Components/sign-up/sign-up.component';
import SignIn from '../../Components/signin/signin.component'
import './sign-in-sign-up.styles.scss';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
    <SignIn />
    <SignUp />
    </div>

);

export default SignInSignUp;