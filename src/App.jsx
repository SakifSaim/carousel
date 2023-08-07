import './App.css'
// import ImageImport from './Components/ImageImport'
import Slider from './Components/Slider'
import AutoPlaySlider from './Components/AutoPlaySlider'

// import Image1 from '../src/images/image1.jpg'

function App() {
  return (
    <>
      <h1 className="leading-[50px] font-bold text-2xl pb-5">
        How to show Images from Data / Jeson File in React{' '}
      </h1>
      {/* <ImageImport /> */}
      <Slider />
      <AutoPlaySlider />
    </>
  )
}

export default App
