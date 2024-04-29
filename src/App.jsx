import { Navbar, Hero, Companies, Courses, Achievement, Catergories, Feedback, CTA, Footer } from "./components"
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Catergories />
      <Feedback />
      <CTA />
      <Footer />
    </div>
  )
}

export default App