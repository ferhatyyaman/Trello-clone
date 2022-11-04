import React, {useState} from 'react'
import styles from '../styles/Task.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

export default function Task({taskTitle,taskId,taskCompleted,parentId,updateTaskTitle,deleteTask,strikeTask}) 
{
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [taskTitleChangeBool, setTaskTitleChangeBool] = useState(false);
    const [isCompleted, setIsCompleted] = useState(taskCompleted);

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        if (newTaskTitle === ''){
            return;
        }
        else{
           updateTaskTitle(taskId, newTaskTitle);
           setNewTaskTitle('');
           setTaskTitleChangeBool(!taskTitleChangeBool);
        }
    }

    const handleStrike = () => {
        strikeTask(taskId);
        setIsCompleted(!isCompleted);
    }

    
    return (
        <>
        <div className={styles.task}>
            {taskTitleChangeBool
                ?
                    <form className="update-form" onSubmit={event => handleUpdateSubmit(event)}>
                        <input 
                            className={styles.updateTask}
                            type="text" 
                            placeholder={taskTitle}
                            onChange={event => setNewTaskTitle(event.target.value)}
                        />
                    </form>
                :
                    <>
                    <p 
                        onClick={() => handleStrike(taskId)}
                        className={styles.title}
                        //style={isCompleted ? {textDecoration: 'line-through', textDecorationWidth: '100px', textDecorationThickness: '100px', fontStyle: 'italic'} : {textDecoration: 'none',}} 
                        >{taskTitle}
                    </p>

                    </>
            }
            <div className={styles.buttons}>
                <button 
                    className={styles.editTask}
                    onClick={() => setTaskTitleChangeBool(!taskTitleChangeBool)}><UpdateIcon/>
                </button>

                <button
                    className={styles.delete}
                    onClick={() => deleteTask(taskId)}
                > <DeleteIcon/>
                </button>
            </div>
        </div>
        </>

    )
}
