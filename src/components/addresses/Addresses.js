'use client'
import React, { useState } from 'react'
import styles from './addresses.module.css'

import Link from 'next/link'

const shapes = [
  {
    id: 1,
    title: "Menu",
    url: "/menu",
    hook: null,
    code: 'https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/menu'
  },
  {
    id: 2,
    title: "Data entry",
    url: "/data_entry",
    hook: null,
    code: 'https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/data_entry'
  },
  {
    id: 3,
    title: "Data entry 2",
    url: "/data_entry2",
    hook: null,
    code: "https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/data_entry2"
  },
  {
    id: 4,
    title: "Style components",
    url: "/Buttons",
    hook: null,
    code: "https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/Buttons"
  },
  {
    id: 5,
    title: "Invest",
    url: "/invest",
    hook: null,
    code: "https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/invest"
  },
  {
    id: 6,
    title: "Add Users",
    url: "/addUsers",
    hook: null,
    code: "https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/addUsers"
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
        code: "https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/hooks/useEffect"
      },
      {
        id: 2,
        title: "useReducer",
        url: "/hooks/useReducer",
        code: "https://github.com/ashrafabusunaina1986/nextlearn12/tree/gh-pages/src/app/hooks/useReducer"
      }
    ]
  }
]
function Addresses(props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.links}>
      {
        shapes.map(shape => {
          if (shape.hook) {
            return <div key={shape.id}>
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