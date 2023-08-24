import React from 'react'
import styles from './view.module.css'

function View(props) {
  const yearlyData = props.yearlyData
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          yearlyData.map(yd => {
            return <tr>
              <td>{yd.year}</td>
              <td>{yd.savingsEndOfYear}</td>
              <td>{yd.yearlyInterest}</td>
              <td>{yd.savingsEndOfYear -
                props.initialInvestment -
                yd.yearlyContribution * yd.year}</td>
              <td>{props.initialInvestment +
                yd.yearlyContribution * yd.year}</td>
            </tr>
          })
        }

      </tbody>
    </table>
  )
}

export default View