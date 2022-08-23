import React from 'react'
import styles from "../../styles/TrelloCard.module.css"
import TrelloContent from './TrelloContent'
import Link from 'next/link';
import Input from '../Input/Input';
import Title from './Title';


export default function TrelloCard({veri}) {
  return (
    <>
     <div className={styles.container}>
       <Title key={veri.id} veri={veri}/>

       {veri.data.map((veri,index) => {
                            return (
                              <TrelloContent key={veri.id} veri={veri} index={index}/>
                            )
          })}
        
        <Input type="card"/>            
    </div>
    </>
   
  )
}

