import React from 'react'
import styles from './sidebar.module.css'


const sidebarTemplate = (props) => {
  return (
    <div className= {styles.Container}>
      <img src= {props.Image} alt="SideBar Img" className= {styles.Img}/>
      <h3>{props.Name}</h3>
    </div>
  )
}

export default sidebarTemplate
