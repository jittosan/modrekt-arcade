import React from 'react'
import styles from './MainMenu.module.scss'

const MainMenu = (props) => {
    return (
        <div className={styles.container}>
            <p>Can you even graduate?</p>
            <br />
            <br />
            <br />
            <div className={styles.button} onClick={() => props.play()}>PLAY</div>
            <br />
            <br />
            <span>Developed by Team UNI-verse.</span>
            <span>Hack n Roll 2023</span>
        </div>
    )
}

export default MainMenu