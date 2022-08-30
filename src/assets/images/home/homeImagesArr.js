import desctop_blog from './desctop/desctop_blog.jpg'
import blog_mobail from './mobail/blog_mobail@2x.jpg'
import blog_tablet from './tablet/blog_tablet@2x.jpg'

import desctop_contact from './desctop/desctop_contact.jpg'
import contact_mobail from './mobail/contact_mobail@2x.jpg'
import contact_tablet from './tablet/contact_tablet@2x.jpg'

import desctop_people from './desctop/desctop_people.jpg'
import people_mobail from './mobail/people_mobail@2x.jpg'
import people_tablet from './tablet/people_tablet@2x.jpg'

const homeImagesArr = [
  {
    desctop: desctop_blog,
    mobail: blog_mobail,
    tablet: blog_tablet,

    alt: 'Notepad and cup of tea',
    id: 'blog',
  },
  {
    desctop: desctop_contact,
    mobail: contact_mobail,
    tablet: contact_tablet,
    alt: 'Man holding smartphone and looking at laptop',
    id: 'contact',
  },
  {
    desctop: desctop_people,
    mobail: people_mobail,
    tablet: people_tablet,
    alt: 'Group photo of six people',
    id: 'people',
  },
]

export default homeImagesArr
