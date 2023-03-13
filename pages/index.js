import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/Component/navbar'
import Footer from '@/Component/Footer'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          <h1 className={styles.title}>folly</h1>
          <p className={styles.tex}>lorem ipsum dolor sit</p>
          <p className={styles.text}>lorem ipsum dolor sit</p>
          <p className={styles.text}>lorem ipsum dolor sit</p>
        <Link href="/about" className={styles.btn}>back to home</Link>
  
    </>
  )
}
