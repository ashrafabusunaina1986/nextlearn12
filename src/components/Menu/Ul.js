import React from 'react'
import styles from './menu.module.css'


function Ul(props) {
    const content = props.content
    const index = props.index
    return (
        <div className={styles.content} >
            <ul className={styles.ul}>
                {
                    content[index - 1].map((li, ind) => {
                        return <li className={styles.li} key={ind}>
                            {li}
                        </li>
                    })
                }
            </ul>

        </div>

    )
}

export default Ul