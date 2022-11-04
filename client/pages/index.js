import styles from '../styles/Home.module.css'
import Trello from '../Components/Trello'


export default function Home({dataCards,dataTasks}) {
  console.log(dataCards,dataTasks)
  return (
    <div className={styles.container}>
        <Trello dataCards={dataCards} dataTasks={dataTasks}/>
      
    </div>
  )
}

export async function getServerSideProps(){
  const [dataCardsRes,dataTasksRes] = await Promise.all([
    fetch(`http://127.0.0.1:5000/api/cards`),
    fetch(`http://127.0.0.1:5000/api/tasks`)
  ]) ;

  const [dataCards, dataTasks] = await Promise.all([
    dataCardsRes.json(), 
    dataTasksRes.json()
  ]);
  return{
      props: {
          dataCards,
          dataTasks
      }

  }
}