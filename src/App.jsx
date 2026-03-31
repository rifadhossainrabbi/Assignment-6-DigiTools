import './App.css'
import NavBar from '../Components/NavBar' 
import HeroSection from '../Components/HeroSection'
import RatingSection from '../Components/RatingSection'
import StartedSection from '../Components/StartedSection'
import TransparentPricing from '../Components/TransparentPricing'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'


const loadData = async () => {
  const res = await fetch("/public/data.json");
  return res.json();
}

const data = loadData();


function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <RatingSection />
      <MainSection data={data} />
      <StartedSection />
      <TransparentPricing />
      <Footer/>
    </>
  )
}

export default App
