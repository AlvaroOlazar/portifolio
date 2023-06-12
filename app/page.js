import { Nav } from '../component/nav'
import { Esp } from '../component/espe'
import { Footer } from '../component/footer'
import '../fontawesome/css/all.min.css'

export default function Home() {
  return(
    <>
    <header>  
      <Nav></Nav>
      <Esp></Esp>
    </header>
      <Footer></Footer>
  </>
  )
}
