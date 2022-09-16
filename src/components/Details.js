import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Details_error from './Details_error';
import Sdata from './Sdata'
import Card from './Card';
import { Button } from 'react-bootstrap';
import './css/Details.css'

const Details = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const [logindata,setLogindata] = useState([])
    const todayDate = new Date().toISOString().slice(0,10);

    const birthDay = ()=>{
        const getUser = localStorage.getItem('user_login');

        if(getUser && getUser.length){
            const user = JSON.parse(getUser);
            setLogindata(user);

            const userbirth = logindata.map((el,ind)=>{
                return el.date === todayDate
            })

            if(userbirth){
                setTimeout(()=>{
                    console.log('ok')
                },3000)
            }
        }
    }

const userLogOut = ()=>{
    localStorage.removeItem('user_login')
    navigate('/');
}

    useEffect(()=>{
        birthDay()
        handleShow()
    },[])
console.log(logindata)
  return (
    <>
    {
        logindata.length === 0 ? <Details_error />: 
        <>
        <div className='d-flex justify-content-between'>
            <p>WELCOME 😄  {logindata[0].name}</p>
            <Button  onClick={userLogOut}>Log Out</Button>
        </div>
            {/* // Second condition apply */}
            {
                <>
                <h1 className='heading'>List of Top 10 Netflix Series in 2022</h1>

                {Sdata.map((currE)=>{
                return(
                    <Card 
                    key={currE.id}
                    imgSrc={currE.imagescr} 
                    title={currE.title}  
                    sname={currE.sname} 
                    link={currE.links}/>
                    );
                })}
                </>
            }
            
        </>
    }</>
  )
}

export default Details