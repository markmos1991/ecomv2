import Image from 'next/image'
import Hero from '../components/hero'
import Services from '../components/services'
import Brands from '../components/brands'
import Review from '../components/review'
import Keywin from '../components/keywin'

export default function Home() {
  return (
    <>
    <Hero />
    <Brands />
  <Services />
  <Keywin />
  <Review />

    </>
  )
}
