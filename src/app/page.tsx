import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const shapes=[
  {
    id:1,
    title:"Menu",
    url:"/menu"
  },
  {
    id:2,
    title:"Data entry",
    url:"/data_entry"
  },
  {
    id:3,
    title:"Data entry 2",
    url:"/data_entry2"
  },
  {
    id:4,
    title:"Style components",
    url:"/Buttons"
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        shapes.map(shape=>{
          return <Link  className={styles.link} key={shape.id} href={shape.url}>{shape.title}</Link> 
        })
      }
      
    </main>
  )
}
