const router= require('express').Router();
const formulirController = require('../controllers/formulirController');

router.get('/', formulirController.index);
router.post('/store',formulirController.store);
router.put('/update', formulirController.update);
router.delete('/delete/:id', formulirController.delete);

module.exports = router;