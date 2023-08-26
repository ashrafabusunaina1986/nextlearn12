import React from 'react'
import styles from './addresses.module.css'

import Link from 'next/link'

const shapes = [
    {
      id: 1,
      title: "Menu",
      url: "/menu",
    },
    {
      id: 2,
      title: "Data entry",
      url: "/data_entry",
    },
    {
      id: 3,
      title: "Data entry 2",
      url: "/data_entry2",
    },
    {
      id: 4,
      title: "Style components",
      url: "/Buttons",
    },
    {
      id: 5,
      title: "Invest",
      url: "/invest",
    },
    {
      id: 6,
      title: "Add Users",
      url: "/addUsers",
    },
    {
      id: 7,
      title: "Use hooks",
      url: "/hooks",
    }
  ]
function Addresses() {
  return (
    <div className={styles.links}>
        {
          shapes.map(shape => {
            return <Link className={styles.div}
              key={shape.id}
              id={`#${shape.id}`}
              href={shape.url}
              >
              {shape.title}
            </Link>
          })
        }
    </div>
  )
}

export default Addresses