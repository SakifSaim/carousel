import Navbar from '../Components/Nav/Navbar'
import Footer from '../Components/Footer'
import Routers from '../router/Routers'
import AutoPlaySlider from '../Components/AutoPlaySlider'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Routers />
        <AutoPlaySlider />
      </main>
      <Footer />
    </>
  )
}

export default Layout
