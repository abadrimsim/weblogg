require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./db/mongoose');

// Initiate our app
const app = express();
const port = process.env.PORT || 5000;

const categoryRoutes = require('./routes/category.routes');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(categoryRoutes);
app.use(postRoutes);
app.use(userRoutes);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
