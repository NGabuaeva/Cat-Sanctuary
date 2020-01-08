const router = require('express').Router()

//reroute all requests with '/cats' to the correct router file
router.use("/cats", require("./routers/cats"))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
router.use((req, res, err) => {
  res.send(err)
})
module.exports = router
