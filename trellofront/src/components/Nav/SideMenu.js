import {Button, Drawer } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import styles from "../../styles/SideMenu.module.css"


export default function SideMenu({setOpenSideMenu,openSideMenu}) {
  return (
    <div>
        <Drawer open={openSideMenu} anchor="right" onClose={()=>setOpenSideMenu(false)}>
                <div className={styles.drawer}>
                    <div className={styles.menu}>
                        <Button className={styles.box1}></Button>
                        <div className={styles.box2}></div>
                    </div>
                 
                </div>
        </Drawer>
    </div>
  )
}
