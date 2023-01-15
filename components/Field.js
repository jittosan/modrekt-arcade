import React, { useEffect, useState } from 'react'
import styles from './Field.module.scss'

const Field = (props) => {
    return (
        <div className={styles.track}>
            <div className={styles.trackContainer}>
                <Track />
                <Track />
                <Track />
                <Track />
            </div>
            <Player playerPosition={props.playerPosition} />
            <EdibleField />
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

const Player = ({ playerPosition }) => {
    // trigger animation
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        setTimeout(() => setTimeout(()=>setFlag(!flag), 100), 10)
    }, [flag])
    
    const leftOffset = {0: '8px', 1: 'calc(25% + 8px)', 2: 'calc(50% + 9px)', 3: 'calc(75% + 9px)'}
    return(
        <div className={styles.playerZone}>
            {/* <p>{playerPosition}</p> */}
            <div className={`${flag ? styles.playerUp : styles.playerDown}`} style={{left: leftOffset[playerPosition]}}>
                <div className={styles.head} />



            </div>
        </div>
    )
}

// Edibles
const EdibleField = () => {
    return(
        <div className={styles.ediblesContainer}>
            <Edible lane={1} onEnd={() => {}} src={'/icons/gym.svg'} />
        </div>
    )
}

const Edible = (props) => {
    // offset
    const lane = props.lane
    const leftOffset = {0: '8px', 1: 'calc(25% + 8px)', 2: 'calc(50% + 9px)', 3: 'calc(75% + 9px)'}
    // field length
    const fieldHeight = 350
    // flag to use to rerender for animation
    const [height, setHeight] = useState(0)
    useEffect(() => {
        // edible has reached the end of the field
        if (height >= fieldHeight) {
            props.onEnd()                                                                                                                                    
        } else {
            setTimeout(() => {setHeight(height+10)}, 200)
        }
    }, [height])
    return(
        <div className={styles.edible} style={{left: leftOffset[lane], top: `${height}px`}}>
            <img src={props.src} />
        </div>
    )
}