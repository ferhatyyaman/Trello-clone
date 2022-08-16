import Input from '../components/Input/Input'
import TrelloCard from '../components/List/TrelloCard'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home({veri}) {
  console.log(veri)
  return (
    <>
    <Nav/>
    <div className={styles.container}>
      <TrelloCard veri={veri} />
      <div className={styles.newlist}>
      <Input/>
      </div>
    </div>

    {veri.data.map((veri)=>{
      return(
        <div key={veri.id}>
          <h1>{veri.title}</h1>
        </div>
      )
    })}
    
    </>
  )
}

export async function getServerSideProps(){
  const veri = await fetch(`http://127.0.0.1:5000/api/data`)
  .then(res=>res.json());
  return{
      props: {
          veri
      }
  }
}


  
