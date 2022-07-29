import blog_jpg_1x from './blog.jpg'
import blog_webp_1x from './blog.webp'
import blog_jpg_2x from './blog@2x.jpg'
import blog_webp_2x from './blog@2x.webp'

import contact_jpg_1x from './contact.jpg'
import contact_webp_1x from './contact.webp'
import contact_jpg_2x from './contact@2x.jpg'
import contact_webp_2x from './contact@2x.webp'

import people_jpg_1x from './people.jpg'
import people_webp_1x from './people.webp'
import people_jpg_2x from './people@2x.jpg'
import people_webp_2x from './people@2x.webp'

import showcase_jpg_1x from './showcase.jpg'
import showcase_webp_1x from './showcase.webp'
import showcase_jpg_2x from './showcase@2x.jpg'
import showcase_webp_2x from './showcase@2x.webp'

const homeImagesArr = [
  {
    jpg_1x: blog_jpg_1x,
    webp_1x: blog_webp_1x,
    jpg_2x: blog_jpg_2x,
    webp_2x: blog_webp_2x,
    alt: 'Notepad and cup of tea',
    id: 'blog',
  },
  {
    jpg_1x: contact_jpg_1x,
    webp_1x: contact_webp_1x,
    jpg_2x: contact_jpg_2x,
    webp_2x: contact_webp_2x,
    alt: 'Man holding smartphone and looking at laptop',
    id: 'contact',
  },
  {
    jpg_1x: people_jpg_1x,
    webp_1x: people_webp_1x,
    jpg_2x: people_jpg_2x,
    webp_2x: people_webp_2x,
    alt: 'Group photo of six people',
    id: 'people',
  },
  {
    jpg_1x: showcase_jpg_1x,
    webp_1x: showcase_webp_1x,
    jpg_2x: showcase_jpg_2x,
    webp_2x: showcase_webp_2x,
    alt: 'Photo of the evening city from a birds eye view',
    id: 'showcase',
  },
]

export default homeImagesArr
