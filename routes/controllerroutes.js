const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to add a new item
router.post('/newitems', itemController.additem);
//Route to get all items
router.get('/newitems',itemController.findall);

//route to find specific Items
router.get('/newitems/:id',itemController.findbyId);

//route to find and delete the item

router.delete('/newitems/:id',itemController.delete);

//route for update 
router.put('/newitems/:id',itemController.updateitem);

module.exports = router;