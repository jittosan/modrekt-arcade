import Head from 'next/head'
import React from 'react'
import styles from '../styles/game.module.scss'

const Game = () => {
    return (
        <> 
        <Head>
            <title>ModRekt</title>
        </Head>
        
        <div className={styles.content}>
            <h1>ModRekt</h1>
        </div>
        </>
    )
}

export default Game
