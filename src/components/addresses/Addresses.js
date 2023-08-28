'use client'
import React, { useState } from 'react'
import styles from './addresses.module.css'

import Link from 'next/link'

const shapes = [
  {
    id: 1,
    title: "Menu",
    url: "/menu",
    hook: null
  },
  {
    id: 2,
    title: "Data entry",
    url: "/data_entry",
    hook: null
  },
  {
    id: 3,
    title: "Data entry 2",
    url: "/data_entry2",
    hook: null
  },
  {
    id: 4,
    title: "Style components",
    url: "/Buttons",
    hook: null
  },
  {
    id: 5,
    title: "Invest",
    url: "/invest",
    hook: null
  },
  {
    id: 6,
    title: "Add Users",
    url: "/addUsers",
    hook: null
  },
  {
    id: 7,
    title: "Use hooks",
    url: "/hooks",
    hook: [
      {
        id: 1,
        title: "useEffect",
        url: "/hooks/useEffect",
      },
      {
        id: 2,
        title: "useReducer",
        url: "/hooks/useReducer",
      }
    ]
  }
]
function Addresses() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.links}>
      {
        shapes.map(shape => {
          if (shape.hook) {
            return <Link
              onClick={() => {
                setIsActive(true)
              }}
              onMouseLeave={()=>{
                setIsActive(false)
              }}
              className={styles.div}
              key={shape.id}
              href='#'
            >

              {isActive ? '- ' + shape.title : '+ ' + shape.title}
              {isActive && <div className={isActive ? styles.subTitle : styles.d}>
                  {
                    shape.hook.map(sh => {
                      return <Link key={sh.id} href={sh.url}>
                        {'- '+sh.title}
                      </Link>
                    })
                  }
                </div>
              }
            </Link>
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