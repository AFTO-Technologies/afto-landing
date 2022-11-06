import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/header/Header'
import { ProductStatement } from '../components/product-statement/ProductStatement'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <ProductStatement />
      </div>
    </>
  )
}
