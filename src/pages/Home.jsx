import React from 'react'
import Product from '../component/Product'
import Download from '../component/Download'
import Header from '../component/Header'

export default function Home() {
  return (
    <div>
      <Product />
      <Download />
      <Header/>
    </div>
  )
}
