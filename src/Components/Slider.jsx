import { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

function Slider() {
  const slides = [
    { url: 'image1.jpg' },
    { url: 'image2.jpg' },
    { url: 'image3.jpg' },
    { url: 'image4.jpg' },
    { url: 'image5.jpg' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative  group">
      <div
        style={{
          backgroundImage: `url(../src/images/${slides[currentIndex].url})`,
        }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 "
      ></div>
      {/* Left Arrow */}
      <div>
        <BsChevronCompactLeft
          className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-3xl rounded-full p-2 bg-black/50  text-white cursor-pointer "
          onClick={prevSlide}
          size={30}
        />
      </div>
      {/* Right Arrow */}
      <div>
        <BsChevronCompactRight
          className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-3xl rounded-full p-2 bg-black/50 text-white cursor-pointer "
          onClick={nextSlide}
          size={30}
        />
      </div>
      <div className="  flex top-4 justify-center py-2 ">
        {slides.map((slide, slideIndex) => (
          <div
            className="text-xl cursor-pointer"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
