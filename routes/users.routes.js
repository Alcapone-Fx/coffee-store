const { Router } = require('express'); // Class to create modular, mountable route handlers
const router = Router();

const errorHandlers = require('../middlewares/handleErrors.middleware');

const {
  getUsers,
  getUser,
  createUsers,
  updateUsers,
  deleteUsers,
} = require('../controllers/users.controllers');

router.get('/', getUsers);

router.get('/:userId', getUser);

router.post('/', createUsers);

router.put('/:userId', updateUsers, errorHandlers); // middleware at route level

router.delete('/', deleteUsers);

// router.use(errorHandlers); // middleware at router level

module.exports = router;
