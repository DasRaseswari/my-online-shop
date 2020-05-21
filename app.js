const path = require('path');

const errorController = require('./controllers/error.js');

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);