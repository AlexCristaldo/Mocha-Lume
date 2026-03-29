import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Diferenciais from "../components/Diferenciais"
import Sobre from "../components/Sobre"
import Cardapio from "../components/Cardapio"
import Depoimentos from "../components/Depoimentos"
import Footer from "../components/Footer"
import "../App.css"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Diferenciais />
      <Sobre />
      <Cardapio />
      <Depoimentos />
      <Footer />
    </>
  )
}

export default Home