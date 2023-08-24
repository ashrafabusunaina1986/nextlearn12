'use client'

import React, { useState } from 'react'
import styles from './invest.module.css'
import Header from './components/header/Header'
import Form from './components/form/Form'
import Result from './components/result/View'

function Investt() {
  const [userInput, setUserInput] = useState(null)
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>

      <Header />
      <Form onCalculate={calculateHandler} />
      {!userInput &&
        <p className={styles.p}>
          No investment calculate yet.
        </p>
      }
      {
        userInput &&
        <Result yearlyData={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      }

    </div>
  )
}

export default Investt