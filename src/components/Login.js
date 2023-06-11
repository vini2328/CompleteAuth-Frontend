import React, { useState,useRef } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { LOGIN_URL } from '../constants/const';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';




function Login() {

    const toast = useRef(null);

    const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'Loggedin Successfully !!', life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'All fields are required', life: 3000});
  }

  const showErrr = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'you are not registered User', life: 3000});
  }



    const redir=()=>{
        navigate('/sendresetlink')
      }

      const redir1=()=>{
        navigate('/signup')
      }


    const navigate = useNavigate();

    const [loginData,setLoginData]=useState({
        email:'',
        password:''
    })

    const handleSubmit =async()=>{
        console.log("hi",loginData)
        try {
            if(loginData.email && loginData.password !== ""){
                let signupData= await axios.post(LOGIN_URL,loginData)
                console.log(signupData)
                if(signupData.data.status!=='failed'){
                    showSuccess()
                    setTimeout(() => {
                      navigate('/Dashboard')
                    }, 3000);
                }else{
                    showErrr()
  
                }
    

            }else{
                showError()


            }
        } catch (error) {
            console.log('errr',error)

        }
    }
  return (
    <div className='signup'>
        <Toast ref={toast} />

    <p style={{color:'white', fontWeight:"700", marginTop:'30px'}}>Login in</p>

        <div className='formit'>
       <div className='my-2'>Email </div>
            <div> <InputText value={loginData.email} onChange={(e)=>setLoginData({...loginData, email:e.target.value})} /></div>
            <div className='my-2'>Password </div>
            <div><Password value={loginData.password} onChange={(e)=>setLoginData({...loginData, password:e.target.value})} feedback={false}/></div>
            <div className='submit'><Button  onClick={handleSubmit} label="Login" /></div>
            <p className='cursor' onClick={redir}>Forgot your Password?</p>
            <p className='cursor' onClick={redir1}>Click here to signup</p>

        </div>

    </div>
  )
}

export default Login