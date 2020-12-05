const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;

// Configure mongoose
mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;

connection.once('open', () => {
	console.log('MongoDB database connection established successfully!');
});
