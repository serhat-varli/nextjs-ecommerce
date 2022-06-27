import Head from 'next/head'
import Image from 'next/image'
import HeaderDefault from '../component/header/headerDefault/headerDefault'
import styles from '../styles/Home.module.css'
import Homes from './home'
export default function Home() {
  return (
    <div className=''>
      <HeaderDefault />
      <Homes/>
    </div>
  )
}
