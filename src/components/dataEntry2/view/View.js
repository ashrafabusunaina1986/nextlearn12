import React from 'react'
import styles from './view.module.css'

function View(props) {
  return (
    <div className={styles.container}>
      {
        props.data.map(item => {
          if (item.goal.trim().length > 0) {
            return <div key={item.id} className={styles.goal}>
              <h4 className={styles.title}>
                {item.goal}
              </h4>
            </div>
          }
        })
      }
    </div>
  )
}

export default View