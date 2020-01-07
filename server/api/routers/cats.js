const router = require('express').Router()
const Cat = require("../../db/models/cats")

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

router.get("/:id", async (req, res, next) => {
  try {
    const cat = await Cat.findByPk(req.params.id)
    res.json(cat)
  } catch (err) {
    next(err)
  }
})

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

router.put('/:catId', async (req, res, next) => {
  try {
    const cat = await Cat.findById(req.params.studentId)
    res.send(await cat.update(req.body))
  } catch (err) { next(err) }
})

router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})
router.use((req, res, err) => {
  res.send(err)
})

module.exports = router
