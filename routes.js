const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get route');
});

router.post('/', (req,res) => {
    res.send('Post route');
});


// export this router to use in index.js
module.exports = router;