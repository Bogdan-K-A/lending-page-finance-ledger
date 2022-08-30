import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { Main } from './main/Main'

const navbarLinks = [
  { url: 'home', title: 'Home' },
  { url: 'about', title: 'About' },
  { url: 'cases', title: 'Cases' },
  { url: 'blog', title: 'Blog' },
  { url: 'contact', title: 'Contact' },
]

function App() {
  return (
    <>
      <Header navbarLinks={navbarLinks} />
      <Main />

      <Footer />
    </>
  )
}

export default App
