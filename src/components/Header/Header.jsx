import React from 'react'
import styles from './Header.module.css'
import icon from '../../assets/header_icon.png'

export default function Header() {
  return (

    <div  className={styles.header}>
      <img src={icon} alt="Logo" className={styles.icon} />
      Kent's To Do List
    </div>
  )
}
