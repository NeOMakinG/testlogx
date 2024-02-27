import Image from 'next/image'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Login } from '@/components/Login'

export default function Home() {

  return (
    <main className={styles.main}>
      <Login />
      <Link href="/anotherpage">Page</Link>
    </main>
  )
}
