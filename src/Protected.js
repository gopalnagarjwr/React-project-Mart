import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
     let Cmp=props.Cmp;
     const navigate=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("User-info")){
            navigate('/Login');
        }
    },[])

  return (
    <>
      <Cmp />
    </>
  )
}

export default Protected;