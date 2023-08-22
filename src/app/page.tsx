import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link  className={styles.link} href={'/menu'}>Menu</Link>
    </main>
  )
}
