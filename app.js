const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});   

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
}); 

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
}); 
 
app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor corriendo en el puerto 3000')
})
