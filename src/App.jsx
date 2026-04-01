import './App.css'
import NavBar from '../Components/NavBar' 
import HeroSection from '../Components/HeroSection'
import RatingSection from '../Components/RatingSection'
import StartedSection from '../Components/StartedSection'
import TransparentPricing from '../Components/TransparentPricing'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'
import { Suspense, useState } from 'react'
import { DiVim } from 'react-icons/di'
import { ToastContainer } from 'react-toastify'




function App() {
  const loadData = async () => {
    const res = await fetch("/public/data.json");
    return res.json();
  }
  const data = loadData();
  const [cart, setCart] = useState(0);

  return (
    <>
      <NavBar cart={cart} setCart={setCart} />
      <HeroSection />
      <RatingSection />
      <Suspense
        fallback={
          <div className='flex justify-center my-8'>
            <span className="text-center loading loading-spinner loading-xl"></span>
          </div>
        }>
        <MainSection data={data} setCart={setCart} />
      </Suspense>
      <StartedSection />
      <TransparentPricing />
      <Footer />

      <ToastContainer/>
    </>
  );
}

export default App
