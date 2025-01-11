import React from 'react'
import styles from './photo.module.css'


const Photo = (props) => {
  return (
    <div className= {styles.Container}>
      <img src= {props.Image} alt="Image" />
      <h3>{props.Name}</h3>
    </div>
  )
}

export default Photo
