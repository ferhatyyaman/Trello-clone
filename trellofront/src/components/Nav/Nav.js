import React from 'react'
import Link from "next/link"
import styles from "../../styles/Nav.module.css"
import { Button } from '@mui/material'

export default function Nav({setOpenSideMenu}) {
  return (
    <nav className={styles.nav}>
        <Link href="/">
            <a>Trello Clone</a>
        </Link>
        <Button onClick={()=>setOpenSideMenu(true)}>Change Background</Button>
    </nav>
  )
}
