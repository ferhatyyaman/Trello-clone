import { Button, IconButton, InputBase, List} from '@mui/material'
import React,{Component, useContext, useState} from 'react'
import styles from "../../styles/InputContent.module.css"
import {v4 as uuid} from "uuid"

export default function InputContent({setOpen,type,veri,veriTitle,titleId}) {

const [data ,setData]=useState("");
const [title ,setTitle]=useState("");

const addMoreCard=(title,titleId)=>{
  const newCardId=uuid()
  const newCard={
    id:newCardId,
    title
  }
}

  const handleOnChange=(e)=>{
    setData(e.target.value);  
    setTitle(e.target.value); 
  }
    
  const submitHandler=()=>{
    addMoreCard(title,titleId)

    if(type==='card'){
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({name:data})
      };
      fetch(`http://127.0.0.1:5000/api/contents/addContent`, requestOptions)
          .then(response => response.json())
          .then(data => setData(data));
          console.log(data)
          
        setOpen(false)}
    else{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title:title})
    };
    fetch(`http://127.0.0.1:5000/api/title/addTitle`, requestOptions)
        .then(response => response.json())
        .then( title => setTitle(title));
        console.log(title)

    }
};
  return (
    <div >
        <div className={styles.container}>
            <InputBase onChange={(e)=> handleOnChange(e)} value={title} multiline fullWidth placeholder={type ==='card'?'Enter a title of this card...':"Enter list title"}/>
        </div>
        <div className={styles.btn}>
            <Button className={styles.add} onClick={(e)=>submitHandler(e)}>{type === "card" ?"add Card":"add list"}</Button>
            <Button className={styles.close} onClick={()=>setOpen(false)}>x</Button>
        </div>
        
    </div>
  )
}
