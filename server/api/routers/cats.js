const router = require('express').Router()
const Cat = require("../../db/models/cats")

// get all cats from the database
router.get("/", async (req, res, next) => {
  try {
    console.log('got to the server')
    const allCats = await Cat.findAll({
    })
    res.json(allCats)
  } catch (err) {
    next(err)
  }
})

//r get one cat from the database based on the id
router.get("/:id", async (req, res, next) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    res.json(cat)
  } catch (err) {
    next(err)
  }
})

//add a new cat to the database
router.post('/', async (req, res, next) => {
  try {
    const cat = await Cat.create(
      req.body
    )
    res.send(cat)
  } catch (err) {
    next(err)
  }
})

//update selected cat in the database based on the id
router.put('/:id', async (req, res, next) => {
  try {
    const cat = await Cat.findById(req.params.id)
    res.send(await cat.update(req.body))
  } catch (err) { next(err) }
})

//error handler
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})
router.use((req, res, err) => {
  res.send(err)
})

module.exports = router
