// Packages
import React, {useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from '../styles/Trello.module.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Button } from '@mui/material';


import Card from './Card';
import Navbar from './Navbar';

export default function Trello({dataCards,dataTasks}) {
  const [cards, setCards] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/cards')
    .then(res => res.json())
    .then(data => {
      setCards([...cards,data]);
    })
    }, 
  []);
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/tasks')
    .then(res => res.json())
    .then(data => {
      setTasks([...tasks,data]);
      })
    }, 
  []);

  
    // ------ CARD ------
  const updateCardTitle = (cardId, newName) => {
    let edit = cards.slice();
    edit.forEach(currCard => {
      if (currCard.cardId === cardId){
        console.log(currCard.cardTitle)
        currCard.cardTitle = newName;
      }
    })
    setCards(edit);

    fetch(`http://127.0.0.1:5000/api/cards/${cardId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardTitle: newName
      })
    });
  }

  const addCard = () => {
    let nextCard = {
      cardTitle : `New Card (Update)`,
      cardId : uuidv4(),
    };

    setCards([...cards, nextCard]);

    fetch(`http://127.0.0.1:5000/api/cards/addCards`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardId: nextCard.cardId,
        cardTitle: nextCard.cardTitle

      })
    });
  }

  const deleteCard = (cardId) => {
    setTasks(tasks.filter(currTask => currTask.parentId !== cardId));
    setCards(cards.filter(currCard => currCard.cardId !== cardId));

    fetch(`http://127.0.0.1:5000/api/cards/${cardId}`, {
      method: 'DELETE'
      });
  }
  
  // ------ TASK ------
  const updateTaskTitle = (taskId, newName) => {
    let edit = tasks.slice();
    edit.forEach(currTask => {
      if (currTask.taskId === taskId){
        currTask.taskTitle = newName
      }
    })
    setTasks(edit);

    fetch(`http://127.0.0.1:5000/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tasktitle: newName
      })
    });
  }

  // Add Task to Card & Update State
  const addTask = (parentCardId, addedTitle) => {
    const newTask = {
        taskId : uuidv4(),
        taskTitle : addedTitle,
        completed: false,
        parentId : parentCardId,
      };

      setTasks([...tasks, newTask]);

      fetch(`http://127.0.0.1:5000/api/tasks/addTasks`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask)
      });
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(currTask => currTask.taskid !== taskId));

    fetch(`http://127.0.0.1:5000/api/tasks/${taskId}`, {
      method: 'DELETE'
      });
  }

  const strikeTask = (taskId) => {
    let edit = tasks.slice();
    edit.forEach(currTask => {
      if (currTask.taskid === taskId){
        let isStruck = currTask.completed;
        currTask.completed = !isStruck;

        fetch(`/tasks/completed/${taskId}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
      }
    })
    setTasks(edit);

  }
  return (
    <>
    <Navbar /> 
    <div className={styles.contain}>
      {/* CARDS */}
      {dataCards.data.map(currCard => {
        return(
        <Card
          key={currCard.cardId}

          cardTitle={currCard.cardTitle}
          taskList={dataTasks.data.filter(curr => curr.parentId === currCard.cardId)}
          cardId={currCard.cardId}

          // Card 
          updateCardTitle={updateCardTitle}
          deleteCard={deleteCard}

          // Task 
          updateTaskTitle={updateTaskTitle}
          addTask={addTask}
          deleteTask={deleteTask}
          strikeTask={strikeTask}

          dataCards={dataCards}
          

        />
        )
    })}

      {/* NEW CARD */}
      <Button className={styles.newList} onClick={() => addCard()}><AddBoxIcon fontSize="small"/> add card</Button>
      <div className={styles.paddingDiv}></div>
      {/* TEMP - DELETE */}
      {/* <button onClick={() => {
        console.table(cards)
        }}>See Cards</button>
      <button onClick={() => {
        console.table(tasks)
        }}>See Tasks</button> */}
    </div>
    </>
  );
}


