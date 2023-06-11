import React, { useState ,useRef} from 'react'
import { Button } from 'primereact/button';
import '../App.css'
import { InputText } from 'primereact/inputtext';
import axios from 'axios'
import { SIGNUP_URL } from '../constants/const';
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { Password } from 'primereact/password';


function Signup() {

    const toast = useRef(null);

    const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'User Registered Successfully !!', life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'All fields are required ', life: 3000});
  }


    const redir=()=>{
        navigate('/login')
      }
    
    const navigate = useNavigate();
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
        tc:true
    })

    const handleSubmit =async()=>{
        console.log("hi",userData)
        try {
            if(userData.email && userData.name && userData.password && userData.password_confirmation !=="" && userData.password === userData.password_confirmation){
                let signupData= await axios.post(SIGNUP_URL,userData)
                console.log()
                if(signupData.data.status!=='failed'){
                    showSuccess()
                    setTimeout(() => {
                      navigate('/login')
                    }, 3000);
                        }
    
            }else{
                showError()
            }

        } catch (error) {
            console.log('errr',error)
            showError()

        }
    }
  return (
    <div className='signup'>
        <Toast ref={toast} />

        <p style={{color:'white', fontWeight:700, marginTop:'30px'}}>SIGN UP HERE</p>
        <div className='formit'>
            <div className='my-2'> FULL NAME </div>
            <div><InputText  value={userData.name} onChange={(e)=>setUserData({...userData, name:e.target.value})} /></div>
            <div className='my-2'>Email </div>
            <div> <InputText value={userData.email} onChange={(e)=>setUserData({...userData, email:e.target.value})} /></div>
            <div className='my-2'>Password </div>
            <div><Password  value={userData.password} onChange={(e)=>setUserData({...userData, password:e.target.value})}feedback={false} /></div>
            <div className='my-2'>Confirm Password </div>
            <div><Password  value={userData.password_confirmation} onChange={(e)=>setUserData({...userData, password_confirmation:e.target.value})} feedback={false}/></div>
            <div className='submit'><Button  onClick={handleSubmit} label="Register" /></div>
             <p className='cursor' onClick={redir}>Already have an account? Sign in</p>
        </div>

    </div>
  )
}

export default Signup