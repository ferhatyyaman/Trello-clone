import React from 'react'
import styles from "../../styles/TrelloCard.module.css"
import TrelloContent from './TrelloContent'
import Link from 'next/link';
import Input from '../Input/Input';
import Title from './Title';
import { Paper } from '@mui/material';


export default function TrelloCard({veri,veriTitle}) {
  return (
    <>
     <Paper className={styles.container}>
    
     <Title veriTitle={veriTitle} titleId={veriTitle.id}/>

       {veri.data.map((veri,index) => {
                            return (
                              <TrelloContent key={veri.id} veri={veri} index={index}/>
                            )
          })}
        
        <Input type="card" titleId={veriTitle.id}/>            
    </Paper>
    </>
   
  )
}

