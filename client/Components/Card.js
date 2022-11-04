import React, {useState} from 'react';
import styles from '../styles/Card.module.css'
import Task from './Task';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

export default function Card({cardTitle,taskList,cardId,updateCardTitle,deleteCard,updateTaskTitle,addTask,deleteTask,strikeTask,dataCards}) 
{
    const [newCardTitle, setNewCardTitle] = useState('');
    const [cardTitleChangeBool, setCardTitleChangeBool] = useState(false);
    const [addTaskTitle, setAddTaskTitle] = useState('')

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (newCardTitle === ''){
            return;
        }
        else{
           updateCardTitle(cardId, newCardTitle)
           setCardTitleChangeBool(!cardTitleChangeBool)
           setNewCardTitle('')
        }
    }

    const handleAddSubmit = (e) => {
        e.preventDefault();
        if (addTaskTitle === ''){
            return;
        }
        else{
           addTask(cardId, addTaskTitle);
           setAddTaskTitle('');
        }
    }
    
    // onSubmit={event => handleUpdateSubmit(event)} -> form onSubmit
   
    return (
        <div className={styles.card}>
            <div className={styles.titleDiv}>
                {cardTitleChangeBool
                    ?
                        <form action="" onSubmit={event => handleUpdateSubmit(event)}>
                            <input 
                                onChange={event => setNewCardTitle(event.target.value)}
                                className={styles.updateTitle} 
                                type="text"
                                placeholder={cardTitle}
                            />
                        </form>
                    :
                        <h3 onClick={() => setCardTitleChangeBool(!cardTitleChangeBool)}>
                            {cardTitle}
                        </h3>
                }

            </div>

            {taskList.map(curr => (
                <Task 
                    key={curr.taskId}

                    taskTitle={curr.taskTitle}
                    taskId={curr.taskId}
                    taskCompleted={curr.completed}
                    parentId={cardId}
                    
                    updateTaskTitle={updateTaskTitle}
                    deleteTask={deleteTask}
                    strikeTask={strikeTask}
                />
            ))}

            <form className={styles.addTask} action="input" onSubmit={event => handleAddSubmit(event)}>
                
                <input type="text" placeholder="New Title" value={addTaskTitle} onChange={event => setAddTaskTitle(event.target.value)}/> 
                <button className={styles.addbtn} ><AddBoxIcon /></button>  
            </form>
            
            <Button className={styles.deleteCard} onClick={() => deleteCard(cardId)}> <DeleteIcon fontSize="small"/> Delete</Button>
        </div>
    )
}
