import { Hearo } from './components/hearo/Hearo'
import { Section } from './components/section/Section'
import homeImagesArr from './assets/images/home/homeImagesArr'
import casesImagesArr from './assets/images/cases/casesImagesArr'
import teamImagesArr from './assets/images/team/teamImagesArr'
import { Header } from './components/header/Header'
import { SectionWithImages } from './components/section-with-images/SectionWithImages'
import { Footer } from './components/footer/Footer'
const navbarLinks = [
  { url: '#home', title: 'Home' },
  { url: '#about', title: 'About' },
  { url: '#cases', title: 'Cases' },
  { url: '#blog', title: 'Blog' },
  { url: '#contact', title: 'Contact' },
]

function App() {
  return (
    <>
      <Header navbarLinks={navbarLinks} />
      <main>
        <Hearo />
        <div className="container">
          <Section imgesUrl={homeImagesArr} id={'people'} type={'green'} />
          <SectionWithImages imgesUrl={casesImagesArr} id={'cases'} />
          <Section imgesUrl={homeImagesArr} id={'blog'} type={'blue'} />
          <SectionWithImages teamImgesSrc={teamImagesArr} id={'team'} />
          <Section imgesUrl={homeImagesArr} id={'contact'} type={'contact'} />
        </div>
      </main>
      <div className="container">
        <Footer />
      </div>
    </>
  )
}

export default App
