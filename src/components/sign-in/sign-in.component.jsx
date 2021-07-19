import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInGoogle} from '../../firebase/firebase.utils'
import './sign-component.scss'

class SignIn extends React.Component {
 constructor(props){
  super(props);
  this.state={
   email:'',
   password:''
  }
 }
handleSubmit=event=>{
event.preventDefault();
this.state({email:'',password:''})
}
handleChange=event=>{
 const {value,name}=event.target;
 this.state({[name]:value});

}
 render(){
  return (
   <div className="sign-in">
    <h2>I already have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={this.handleSubmit}>
     <FormInput type="email" name="email" handleChange={this.handleChange} value={this.state.email}  label="email" required/>
      
     <FormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password}  label="password"  required />
    <div className="buttons">
    <CustomButton type="submit">Sign In</CustomButton>
     <CustomButton onClick={signInGoogle} isGoogleSign>{' '} Sign In With Google {' '}</CustomButton>
    </div>
     
    </form>
   </div>
  )
 }
}
export default SignIn;