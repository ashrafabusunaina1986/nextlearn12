
import React from 'react'
import styles from './page.module.css'
import Use_Effect from '@/components/hooks/use_effect/Use_effect'

function UseEffect(props) {
  
  return (
    <div className={styles.container} >
      <Use_Effect setIsActive={props.setIsActive} isActive={props.isActive} />
    </div>
  )
}

export default UseEffect