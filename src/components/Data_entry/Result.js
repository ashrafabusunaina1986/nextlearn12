'use client'
import React, { useState } from 'react'
import styles from './result.module.css'

function Result(props) {
  const [year, setYear] = useState('')
  const data = props.data
  console.log(data)
  return (
    <div

      className={
        data.length > 0 ?
          styles.container :
          styles.notDisplay
      }>
      <div className={styles.filter}>
        <h1>Filter of year</h1>
        <select onChange={e=>setYear(e.target.value)} name="fyear" id="fyear" >
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      {
        data.reverse().map((out) => {
          if (year === '') {
            return <div key={out.id} className={styles.card}>
              <div className={styles.date}>
                <h2>{out.input.date.slice(8, 10)}</h2>
                <h3>{out.input.date.slice(5, 7)}</h3>
                <h4>{out.input.date.slice(0, 4)}</h4>
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
          } else if (year === out.input.date.slice(0, 4)) {
            return <div key={out.id} className={styles.card}>
              <div className={styles.date}>
                <h2>{out.input.date.slice(8, 10)}</h2>
                <h3>{out.input.date.slice(5, 7)}</h3>
                <h4>{year}</h4>
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
          }
        })
      }

    </div>
  )
}

export default Result