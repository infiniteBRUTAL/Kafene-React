import React from 'react'
import classes from './SignUpForm.module.css'
import ButtonGenerator from "../Button Generator/ButtonGenerator";


const SignUpForm = (props) => {

    let username = ''
    let password = ''
    let confirmPassword = ''

    const handleInput = (input) => {
        switch(input.target.name) {
            case 'Username': {
                username = input.target.val()
                return;
            }
            case 'Password': {
                password = input.target.val()
                return;
            }
            case 'Confirm-Password': {
                confirmPassword = input.target.val()
            }
            default: {
                return
            }
        }
    }

    return(
        <div className={classes.MainContainer}>
            <form className={classes.LoginForm}>
                <input onChange={(e) => {
                    handleInput(e)
                }} className={classes.FormInputFields} type={'text'} placeholder={'Please Enter Your Username'} name={'Username'}/>
                <input onChange={(e) => {
                    handleInput(e)
                }} className={classes.FormInputFields} type={'password'} placeholder={'Please Enter Your Password'} name={'Password'}/>
                <input onChange={(e) => {
                    handleInput(e)
                }} className={classes.FormInputFields} type={'password'} placeholder={'Please Re-enter Your Password'} name={'Confirm-Password'}/>
                <ButtonGenerator BtnType={'SIGNUP'} BtnTitle={'SIGNUP'} />
            </form>
        </div>
    )
}

export default SignUpForm