const db = require('./server/db/db')
const Cat = require('./server/db/models/cats')

//dummy data with my cats >^_^<
const cats = [{
  name: 'Pepper',
  age: 1,
  breed: 'tabby',
  favoriteSnack: 'chicken',
  color: 'tuxedo',
  imageUrl: '/Pepper_files/65484711_342054940053253_3436018288716960712_n.jpg',
  hobby: 'stealing papertowels'
},
{
  name: 'Gingerface',
  age: 1,
  breed: 'tabby',
  imageUrl: '/Gingerface_files/66616515_2048533155252518_9035402003363389255_n.jpg',
  favoriteSnack: 'chicken',
  color: 'tuxedo',
  hobby: 'digging'
},
{
  name: 'Oshi',
  age: 1,
  breed: 'tabby',
  favoriteSnack: 'ham',
  color: 'tuxedo',
  imageUrl: '/Osh_files/IMG_6743.jpg',
  hobby: 'cuddling'
},
{
  name: 'Irene',
  age: 9,
  breed: 'korat',
  favoriteSnack: 'tuna',
  imageUrl: '/Roon_files/50174048_2287158451606839_4761074576624341_n.jpg',
  color: 'grey',
  hobby: 'kneading'
},
]


//seed database

const seed = async () => {
  await db.sync({ force: true })
  await Promise.all(cats.map(cat => {
    return Cat.create(cat)
  }))


  console.log('Seeding success!')
  db.close()
}

seed()
  .catch(err => {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
    db.close()
  })
