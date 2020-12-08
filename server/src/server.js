require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 5000;

const authRoutes = require('./routes/auth.routes');
const categoryRoutes = require('./routes/category.routes');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');
const authController = require('./controllers/auth.controller');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/user', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/post', postRoutes);
app.use('/api/user', userRoutes);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
