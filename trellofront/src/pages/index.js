import { useState } from 'react'
import Input from '../components/Input/Input'
import TrelloCard from '../components/List/TrelloCard'
import Navigation from '../components/Nav/Navigation'
import styles from '../styles/Home.module.css'

export default function Home({veri,veriTitle}) {
  console.log(veri,veriTitle)
 
  return (
    
    <>
    <Navigation/>
    <div className={styles.container}>
      <TrelloCard veri={veri} veriTitle={veriTitle}/>

      <div className={styles.newlist}>
      <Input key={veri.id} veri={veri} veriTitle={veriTitle}/>
      </div>
    </div>

    {/* {veri.data.map((veri)=>{
      return(
        <div key={veri.id}>
          
        </div>
      )
    })} */}
    
    </>
   
  )
}

      export async function getServerSideProps(){
        const [veriRes,veriTitleRes] = await Promise.all([
          fetch(`http://127.0.0.1:5000/api/contents`),
          fetch(`http://127.0.0.1:5000/api/title`)
        ]) ;

        const [veri, veriTitle] = await Promise.all([
          veriRes.json(), 
          veriTitleRes.json()
        ]);
        return{
            props: {
                veri,
                veriTitle
            }

        }
      }





  
