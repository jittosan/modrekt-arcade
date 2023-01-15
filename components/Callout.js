import React from 'react'
import styles from './Callout.module.scss'
import calloutsData from '../public/data/callouts.json'


const Callout = () => {
  // randomise text string
  const text = calloutsData[Math.round(Math.random() * calloutsData.length)]
  // randomise position
  const topHeight = Math.round(Math.random() * 30) + 20
  const isLeft = Math.random() >= 0.5
  console.log(topHeight, isLeft)
  return (
    <div className={`${styles.callout} ${isLeft ? styles.left : styles.right}`} style={{top:`${topHeight}%`}}>
        <p>{text}</p>
    </div>
  )
}

export default Callout