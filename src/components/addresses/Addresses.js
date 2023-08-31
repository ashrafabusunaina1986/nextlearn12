'use client'
import React, { useState } from 'react'
import styles from './addresses.module.css'
import shapes from './data.json'
import Link from 'next/link'


function Addresses(props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.links}>
      {
        shapes.map(shape => {
          if (shape.hook) {
            return <div  key={shape.id}>
              <Link
                onClick={() => {
                  setIsActive(prev => !isActive)
                }}
                className={styles.div}
                key={shape.id}
                href='#'
              >

                {isActive ? '- ' + shape.title : '+ ' + shape.title}

              </Link>
              {isActive && <div className={isActive ? styles.subTitle : styles.d}>
                {
                  shape.hook.map(sh => {
                    return <Link key={sh.id} href={sh.url}>
                      {'- ' + sh.title}
                    </Link>
                  })
                }
              </div>
              }
            </div>

          } else {
            return <Link className={styles.div}
              key={shape.id}
              id={`#${shape.id}`}
              href={shape.url}
            >

              {'- ' + shape.title}
            </Link>
          }
        })
      }
    </div>
  )
}

export default Addresses