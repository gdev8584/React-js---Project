import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import {NavLink,useNavigate} from 'react-router-dom'

const Login = () => {
    const [inpval, setInpval] = useState({
        email:'',
        password:''
      })
    
      const navigate = useNavigate();

    const getData = (e)=>{
        const {value,name} = e.target
        setInpval(()=>{
          return{
          ...inpval,
          [name]:value
          }
        })
      }
      const addData = (e)=>{
        e.preventDefault();
        const getUserArr = localStorage.getItem('useryt');

        const {email,password} = inpval;
        if(email===''){
            alert('Please Enter Valid Email')
       }else if(!(email.includes("@"))){
            alert('Please Enter Valid Email')
       }else if(password===''){
        alert('password field is required')
       }else if(password.length < 5){
        alert('password length greater than 5')
       }else{
        console.log('data add success')
      
        if(getUserArr && getUserArr.length){
            const userdata = JSON.parse(getUserArr);
            const userlogin = userdata.filter((el,ind)=>{
                return el.email===email && el.password === password
            })
            if(userlogin.length===0){
                alert('invalid details')
            }else{
                console.log('user login successfully')

                localStorage.setItem('user_login',JSON.stringify(userlogin))

                navigate('/details')
            }
        }
        // localStorage.setItem('useryt',JSON.stringify([...data,inpval]));
       }
      }

  return (
   <><div className='container mt-5 pt-3'>
   <section className='d-flex justify-content-between'>
       <div className='left_data mt-5  p-3' style={{width: '100%'}}>
       <h3 className='text-center col-lg-8 mt-3'>Sign In</h3>
       <Form className='mt-3'>
       
<Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
<Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
</Form.Group>

<Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
<Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
</Form.Group>

<Button variant="primary" className='col-lg-8' onClick={addData} style={{backgroundColor:'rgb(67,185,127'}} type="submit">
Submit
</Button>
</Form>
<p className='mt-3'>Create an Account <span><NavLink to='/'>SignUp</NavLink></span></p>
       </div>
      <Sign_img />
   </section>
</div></>
  )
}

export default Login