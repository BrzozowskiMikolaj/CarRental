const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'DZIAŁA GÓWNO DZIAŁA' });
}); 

app.listen(5000, () => {
    console.log('Backend napierdala na porcie 5000');
});