import React ,{useState} from 'react'
import './Auth.css'
const Auth = () => {
    const [isSignup, setisSignup] = useState(true)
    const handleswitch =()=>{
        setisSignup(!isSignup)
    }
  return (
    <div className='auth-page'>
        <div className='auth-container-1'>
            <div className='auth-container-2'>
                <form>
                    {
                        isSignup && 
                        <>
                    <label htmlFor='name'>
                <h4>Name:</h4>
                <input type='text' id='name' placeholder="Name"/>
                </label><br/>
                 </>}
             <label htmlFor='email'>
                <h4>Email:</h4>
             <input type='email' id='email' placeholder="Email"/>
             </label><br/>
             <label htmlFor='password'>
             <div style={{display:"flex" ,justifyContent:'space-between' , alignItems:'center'}}>
                <h4>Password:</h4>
             {!isSignup && <p style={{fontSize:"13px"}}>Forgot Password?</p>}
             </div>
             <input type='password' id='password'placeholder="Password" />
             </label><br/>
             <button className='login-btn'> { !isSignup ? 'Log In':'SignUp'}</button><br/>
             {
            isSignup && 
            <p style={{color:"#666767", fontSize:"13px"}}>By clicking "Signup", you agree to our 
              <span style={{color:"#007ac6"}}> terms of and condition </span>,
              <span style={{color:"#007ac6"}}>privacy policy</span>, 
              <span style={{color:"#007ac6"}}> cookie policy</span></p>
          }
             </form></div>
             <div style={{color:'white'}}>
             {isSignup ? 'Already have an account?' : "Don't have an account?"}
             <button className='handle-switch' onClick={handleswitch}>{isSignup ? 'Log In' :'Sign Up'}</button>
            </div>
        </div>
    </div>
  )
}

export default Auth
