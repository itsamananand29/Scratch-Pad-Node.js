const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/admin/admin');

router.get('/notes',adminController.getNotes);

router.post('/notes',adminController.postNotes);

router.put('/notes/:id',adminController.editNotes);

router.delete('/notes/:id',adminController.deleteNotes);


module.exports = router;