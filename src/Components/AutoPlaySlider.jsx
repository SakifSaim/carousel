import { useEffect, useState, useRef } from 'react'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai'

let count = 0
let slideInterval
function AutoPlaySlider() {
  const slides = [
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    { url: 'image4.jpg' },
    { url: 'image5.jpg' },
  ]

  //   for adding animation
  const slideRef = useRef()
  //   For Autoplay implimentation

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)
    startSlider()
    return () => {
      pauseSlider()
    }
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNext()
    }, 3000)
  }
  // for stoping auto play on click
  const pauseSlider = () => {
    clearInterval(slideInterval)
  }

  const [currentIndex, setCurrentIndex] = useState(1)
  const handleNext = () => {
    count = (count + 1) % slides.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }
  const handlePrev = () => {
    const productLength = slides.length
    count = (currentIndex + productLength - 1) % productLength
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  return (
    <div ref={slideRef} className=" w-full select-none relative ">
      <div className="aspect-video">
        <img src={`../src/images/${slides[currentIndex].url}`} />
      </div>
      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between  items-center ">
        <button
          onClick={handlePrev}
          className="text-white bg-black bg-opacity-30 hover:bg-opacity-100 p-3 rounded-2xl transition"
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          onClick={handleNext}
          className="text-white bg-black bg-opacity-30 hover:bg-opacity-100 p-3 rounded-2xl transition"
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  )
}

export default AutoPlaySlider
