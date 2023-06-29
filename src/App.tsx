//import  styled  from "styled-components"
import { Header, Hero, Company, Possibilities, Future, Beyond, CTA, Blog, Footer } from "./components/export"
import { Fonts } from "./defaultStyle"

function App() {
  
  return (
    <>
      <Header/>
      <main>
          <Hero/>
          <Company/>
          <Possibilities/>
          <Future/>
          <Beyond/>
          <CTA/>
          <Blog/>
      </main>
      <Footer/>
      <Fonts/>
    </>
  )
}

export default App
