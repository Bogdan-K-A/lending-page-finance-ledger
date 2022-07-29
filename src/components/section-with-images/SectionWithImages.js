import React from 'react'
import { Cases } from '../cases/Cases'
import { Team } from '../team/Team'

export const SectionWithImages = ({ imgesUrl, id, teamImgesSrc }) => {
  if (id === 'cases') {
    return <Cases items={imgesUrl} />
  } else if (id === 'team') {
    return <Team items={teamImgesSrc} />
  }
}
