import "./index.css"

import Nav from "./components/nav"
import Hero from "./Sections/Hero"
import PopularProducts from "./Sections/PopularProducts"
import SuperQuality from "./Sections/SuperQuality"
import Services from "./Sections/Services"
import SpecialOffer from "./Sections/SpecialOffer"


function App() {

  return (
    <main className="relative">
     <Nav/>
    <section>
      <Hero/>
    </section>
     
    <section>
      <PopularProducts/>
    </section>
    
    <section>
      <SuperQuality/>
    </section>
    <section>
      <Services/>   
    </section>
    <section>
      <SpecialOffer/>   
    </section>

    </main>
  )
}

export default App
