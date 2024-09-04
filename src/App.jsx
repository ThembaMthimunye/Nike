import "./index.css"

import Nav from "./components/nav"
import Hero from "./Sections/Hero"
import PopularProducts from "./Sections/PopularProducts"


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
    {/* 
    <section>
      SuperQuality
    </section>
    <section>
      popularproduct
    </section>
    <section>
      Services
    </section>
    <section>
      special offer
    </section> */}


    </main>
  )
}

export default App
