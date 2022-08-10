const express = require('express')
const router = express.Router()
var model = require('./class-model')


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log(`${req.method} - ${req.baseUrl}`)
  next()
})

router.get('/', async (req, res) => {
  try {
    const result = await model.getAll()
    res.json(result)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await model.getById(req.params.id)
    res.json(result)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await model.create(req.body.name)
    res.json(result)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.put('/', async (req, res) => {
  try {
    const result = await model.update(req.body.id, req.body.name)
    res.json(result)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.delete('/', async (req, res) => {
  try {
    const result = await model.delete(req.body.id)
    res.json(result)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router
