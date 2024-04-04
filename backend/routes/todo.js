const router = require('express').Router();
const { todoController } = require('../controllers');

router.get('/', todoController.fetch)
router.post('/', todoController.create)
router.put('/', todoController.update)
router.delete('/', todoController.remove)

module.exports = router;