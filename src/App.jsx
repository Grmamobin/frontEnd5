import './App.css'
import Footer from './components/footerSection'
import HomeSection from './components/homeSection'
import Purchase from './components/purchaseSection'

function App() {

  return (
    <>
    <section className='px-[25px] lg:px-[110px]'><HomeSection/></section>
    <section className='px-[25px] lg:px-[110px]'><Purchase/></section> 
    <Footer/>
    </>
  )
}

export default App
