import { ToastProvider } from "./components/ToastContext"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"


const App = () => {
  return (
    <ToastProvider>
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main> 
    </ToastProvider>
  )
}

export default App