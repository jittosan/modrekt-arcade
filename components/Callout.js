import React from 'react'
import styles from './Callout.module.scss'

const text = "time to s/u"

const Callout = () => {
  return (
    <div className={styles.callout}>
        <p>{text}</p>
    </div>
  )
}

export default Callout