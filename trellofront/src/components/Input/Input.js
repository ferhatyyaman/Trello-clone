import { Collapse,Typography } from '@mui/material'
import React,{useState} from 'react'
import styles from "../../styles/Input.module.css"
import InputContent from './InputContent'

export default function Input() {

  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Collapse in={open}>
        <InputContent setOpen={setOpen}/> 
      </Collapse>

      <Collapse in={!open}>
        <div className={styles.card}  onClick={()=>setOpen(!open)} >
            <Typography>+ Add a Card</Typography>
        </div>
      </Collapse>

     
     
        
    </div>
  )
}
