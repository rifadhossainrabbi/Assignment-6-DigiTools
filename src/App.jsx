import './App.css'
import NavBar from '../Components/NavBar' 
import HeroSection from '../Components/HeroSection'
import RatingSection from '../Components/RatingSection'
import StartedSection from '../Components/StartedSection'
import TransparentPricing from '../Components/TransparentPricing'
import Footer from '../Components/Footer'
import MainSection from '../Components/MainSection'
import { Suspense, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import TransformWorkflow from '../Components/TransformWorkflow'



const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

// data er loadData() function ta App function er moddhe rakhle ami jokhon buy now te click kori tokhon page scroll up or down hoy tai eita App() er baire rakha hoise
const data = loadData();

function App() {
  console.log(data);
  const [selectedProducts, setSelectedProducts] = useState([]);


  return (
    <>
      <NavBar cart={selectedProducts.length} />
      <HeroSection />
      <RatingSection />
      <Suspense
        fallback={
          <div className="flex justify-center my-8">
            <span className="text-center loading loading-spinner loading-xl"></span>
          </div>
        }>
        <MainSection
          data={data}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </Suspense>
      <StartedSection />
      <TransparentPricing />
      <TransformWorkflow/>
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App
