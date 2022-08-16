import { Button, IconButton, InputBase} from '@mui/material'
import React,{Component, useContext, useState} from 'react'
import styles from "../../styles/InputContent.module.css"

export default function InputContent({setOpen}) {

const [cardTitle,setCardTitle]=useState();

  const handleOnChange=(e)=>{
    setCardTitle(e.target.value);
}
  const handleBtnConfirm=()=>{
    
    setOpen(false)
}

  return (
    <div >
        <div className={styles.container}>
            <InputBase onChange={handleOnChange} value={cardTitle} multiline fullWidth placeholder='Enter a title of this card...'/>
        </div>
        <div className={styles.btn}>
            <Button className={styles.add} onClick={handleBtnConfirm}  >add Card</Button>
            <Button className={styles.close} onClick={()=>setOpen(false)}>x</Button>
        </div>
        
    </div>
  )
}
