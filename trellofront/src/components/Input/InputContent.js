import { Button, IconButton, InputBase} from '@mui/material'
import React,{Component, useContext, useState} from 'react'
import styles from "../../styles/InputContent.module.css"

export default function InputContent({setOpen,type}) {

const [cardTitle,setCardTitle]=useState('');


  const handleOnChange=(e)=>{
    setCardTitle(e.target.value);
    
}
  const handleBtnConfirm=(e)=>{
    e.preventDefault();
    console.log(cardTitle)
    if(type==="card"){

    
    fetch('http://localhost:5000/api/data/addData', {
        Method: 'POST',
        Headers: {
          Accept: 'application.json',
          'Content-Type': 'application/json'
        },
        Cache: 'default'
      })
        .then(json => alert(JSON.stringify(json)))

    setOpen(false)
    }
  };
     
  


  return (
    <div >
        <div className={styles.container}>
            <InputBase onChange={handleOnChange} value={cardTitle} multiline fullWidth placeholder={type ==='card'?'Enter a title of this card...':"Enter list title"}/>
        </div>
        <div className={styles.btn}>
            <Button className={styles.add} onClick={handleBtnConfirm}>{type === "card" ?"add Card":"add list"}</Button>
            <Button className={styles.close} onClick={()=>setOpen(false)}>x</Button>
        </div>
        
    </div>
  )
}
