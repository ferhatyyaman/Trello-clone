import React from 'react'
import Link from "next/link"
import styles from "../styles/Nav.module.css"

export default function Nav() {
  return (
    <nav className={styles.nav}>
        <Link href="/">
            <a>home</a>
        </Link>
    </nav>
  )
}
