import React, { useState, useContext} from 'react';
import styles from '../styles/Navbar.module.css'



export default function Navbar() {

    return (
        <div className={styles.bar}>
            <h1>Trello-Clone</h1>
        </div>
    )
}