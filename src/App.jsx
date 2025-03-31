import "./app.scss"
import Contact from "./components/contact/Contact"
import Cursor from "./components/Cursor/Cursor"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Parallax from "./components/parallax/Parallax"
import Portfolio from "./components/Portfolio/Portfolio"
import Services from "./components/Services/Services"

function App() {
  return (
   <div>
    <Cursor/>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contect"><Contact/></section>
   </div>
  )
}

export default App
