const {create,remove,fetch} = require ('../controllers/userControllers'); 

const router = require('express').Router();


router.get('/fetch/:id',fetch);
// router.post('/remove/:id',remove);
router.post('/create/:id',create);

module.exports = router;