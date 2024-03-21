const router = require('express').Router();
const shoeManager = require('../managers/shoeManager.js')


router.get('/', async (req, res) => {
    const shoes = await shoeManager.getAllForPagination(req.query)
    // const shoes = await shoeManager.getAll(req.query)

    res.json(shoes)

})

router.post('/create', async (req, res) => {
           console.log({...req.body},req.user._id);
    try {

        await shoeManager.create({
            ...req.body,
            ownerId: req.user._id
        });
        res.status(201).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }



})
router.get('/:shoeId', async (req, res) => {
    let shoeId = req.params.shoeId
    let shoe = await shoeManager.getOne(shoeId)
    res.json(shoe)
})
router.put('/:shoeId', async (req, res) => {
    let shoeId = req.params.shoeId
    await shoeManager.update(shoeId, req.body)
    res.status(204).end()
})
router.delete('/:shoeId', async (req, res) => {
    let shoeId = req.params.shoeId
    await shoeManager.delete(shoeId)
    res.status(204).end()
})

module.exports = router;
