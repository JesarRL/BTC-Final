

const express = require('express'); 
const conectarDB = require('./config/db'); 
const cors = require('cors');
const app = express(); 

conectarDB(); 

app.use(cors()) 
app.use(express.json()) 

app.use('/best-trucks-colombia', require('./routes/routes'))


app.listen(3000, () => {
    console.log('El servidor se esta ejecutando en http://localhost:3000');
});