import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.title}>
      <h1>Hello Next Blog</h1>
      <p className={styles.text}>Hello World</p>
    </div>
  )
}
