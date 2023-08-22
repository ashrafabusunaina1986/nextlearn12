import React from 'react'
import styles from './result.module.css'

function Result(props) {
  const data = props.data
  console.log(data)
  return (
    <div
      className={
        data.length>0 ?
          styles.container :
          styles.notDisplay
      }>
      {
        data.reverse().map((out) => {
          return <div key={out.id} className={styles.card}>
            <div className={styles.date}>
              <h2>{out.input.date.slice(8,10)}</h2>
              <h3>{out.input.date.slice(5,7)}</h3>
              <h4>{out.input.date.slice(0,4)}</h4>
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>
                {out.input.name}
              </h1>
              <p className={styles.desc}>
                {out.input.message}
              </p>
            </div>
          </div>
        })


      }

    </div>
  )
}

export default Result