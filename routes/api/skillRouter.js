const router = require('express').Router()
const skillCtrl = require('../../controllers/api/skillController')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', checkToken, ensureLoggedIn, skillCtrl.createSkill, skillCtrl.respondWithSkill);

router.put('/:id', checkToken, ensureLoggedIn, skillCtrl.updateSkill, skillCtrl.respondWithSkill);

router.delete('/:id', checkToken, ensureLoggedIn, skillCtrl.destroySkill, skillCtrl.respondWithSkill);

module.exports = router;