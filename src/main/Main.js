import React from 'react'
import { Hearo } from '../components/hearo/Hearo'
import { Section } from './section/Section'
import { SectionWithImages } from './section-with-images/SectionWithImages'

import homeImagesArr from '../assets/images/home/homeImagesArr'
import casesImagesArr from '../assets/images/cases/casesImagesArr'
import teamImagesArr from '../assets/images/team/teamImagesArr'

export const Main = () => {
  return (
    <main>
      <Hearo />

      <Section imgesUrl={homeImagesArr} id={'people'} type={'green'} />
      <SectionWithImages imgesUrl={casesImagesArr} id={'cases'} />
      <Section imgesUrl={homeImagesArr} id={'blog'} type={'blue'} />
      <SectionWithImages teamImgesSrc={teamImagesArr} id={'team'} />
      <Section imgesUrl={homeImagesArr} id={'contact'} type={'contact'} />
    </main>
  )
}
