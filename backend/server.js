const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://zhihuiw:123126@cluster0.9ya5gzh.mongodb.net/form-app?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
    name: String,
    education: String
});

const User = mongoose.model('User', userSchema);

app.post('/submit', (req, res) => {
    console.log(req.body);
    const newUser = new User(req.body);
    
    newUser.save()
        .then(() => res.json('Form Submitted'))
        .catch(err => res.status(400).json('Error: ' + err));
});



app.listen(5000, () => console.log('Server running on port 5000'));
