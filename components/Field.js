import React from 'react'
import styles from './Field.module.scss'

const Field = () => {
    return (
        <div className={styles.track}>
            <Track />
            <Track />
            <Track />
            <Track />
            <Player />
        </div>
    )
}

export default Field

const Track = () => {
    return(
        <div className={styles.track}>

        </div>
    )
}

const Player = () => {
    return(
        <div className={styles.player}>
            <p>Pls</p>
        </div>
    )
}