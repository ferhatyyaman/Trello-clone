import React, { useState } from 'react'
import Nav from './Nav';
import SideMenu from './SideMenu';

export default function Navigation() {

    const[openSideMenu,setOpenSideMenu]=useState(false);

  return (
    <div>
            <Nav setOpenSideMenu={setOpenSideMenu}/>
            <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu}/>
    </div>
  )
}
