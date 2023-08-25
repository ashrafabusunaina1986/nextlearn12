'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Menu from '@/app/menu/page'
import DataEntery from '@/app/data_entry/page'
import DataEntery2 from '@/app/data_entry2/page'
import Buttons from '@/app/Buttons/page'
import Invest from '@/app/invest/page'
import AddUsers from './addUsers/page'
import Hooks from './hooks/page'

import { useState } from 'react'
import Link from 'next/link'

const shapes = [
  {
    id: 1,
    title: "Menu",
    url: "/menu",
    show: <Menu />,
    path: "menu"
  },
  {
    id: 2,
    title: "Data entry",
    url: "/data_entry",
    show: <DataEntery />,
    path: "data_entry"
  },
  {
    id: 3,
    title: "Data entry 2",
    url: "/data_entry2",
    show: <DataEntery2 />,
    path: "data_entry2"
  },
  {
    id: 4,
    title: "Style components",
    url: "/Buttons",
    show: <Buttons />,
    path: "Buttons"
  },
  {
    id: 5,
    title: "Invest",
    url: "/invest",
    show: <Invest />,
    path: "invest"
  },
  {
    id: 6,
    title: "Add Users",
    url: "/addUsers",
    show: <AddUsers />,
    path: "addUsers"
  },
  {
    id: 7,
    title: "Use hooks",
    url: "/hooks",
    show: <Hooks />,
    path: "hooks"
  }
]

export default function Home() {
  const [show, setShow] = useState(0)
  const selectItem = e => {
    setShow(e.target.id.slice(1, 2))
  }
  console.log(show)
  return (
    <main className={styles.container}>

      <div className={styles.links}>
        {
          shapes.map(shape => {
            return <div className={styles.div}
              key={shape.id}
              id={`#${shape.id}`}
              onClick={selectItem}>
              {shape.title}
            </div>
          })
        }
      </div>
      <div className={styles.show}>
        {
          show > 0 && shapes[show - 1].show
        }
        {
          show < 1 && <p>not found</p>
        }
      </div>


    </main>
  )
}
