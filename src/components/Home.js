import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './css/Home.css'

const Home = () => {
  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    name:'',
    email:'',
    date:'',
    password:''
  })
  const [data,setData] = useState([])

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
   
  const {name,email,date,password} = inpval;
  if(name ===''){
    alert('Name field is required')
  }else if(email===''){
  alert('Please Enter Valid Email')
 }else if(!(email.includes("@"))){
   alert('Please Enter Valid Email')
 }else if(date===''){
  alert('Date is a invalid ')
 }else if(date<('2004-09-01')){ 
  alert("Sorry you are Not Eligible")
 }
 else if(password===''){
  alert('password field is required')
 }else if(password.length < 5){
  alert('password length greater than 5')
 }else{
  console.log('data add success')

  localStorage.setItem('useryt',JSON.stringify([...data,inpval]));
   navigate('/login')

 }
}

  return (
    <>
        <div className='container mt-3 pt-3'>
            <section className='d-flex justify-content-between' >
                <div className='left_data mt-5 p-3' style={{width: '100%'}}>
                <h3 className='text-center col-lg-8 mt-3'>Sign Up</h3>
                <Form className='mt-3'>
                <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
        <Form.Control type="text" name='name' onChange={getData} placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-8" controlId="formBasicDate">
        <Form.Control type="date" name='date' onChange={getData}/>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" className='col-lg-8' onClick={addData} style={{backgroundColor:'rgb(67,185,127'}} type="submit">
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already Have an Account <span><NavLink to='/login'>SignIn</NavLink></span></p>
                </div>
               <Sign_img />
            </section>
        </div>
    </>
  )
}

export default Home