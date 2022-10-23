const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const DB_URI = 'mongodb://localhost:27017/jwtDB';

const store = new MongoDBStore({
    uri: DB_URI,
    collection: 'app-sessions'
})

mongoose.connect(DB_URI);
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log('Connected to MongoDB');
    }
})

app.use(bodyParser.json());
app.use(session({
    secret: 'this is my secret',
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    },
    store: store,
    resave: false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user._id);
})

passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
        done(err, user);
    })
});

passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password'}, function(username, password, done) {
    UserModel.find({ email: username }, (err, user)=> {
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'Incorrect email'});
        }
        if(!bcrypt.compareSync(password, user.password)){
            return done(null, false, {message: 'Incorrect password'});
        }
        return done(null, user); 
    })
}));

app.listen(8000, () => {
    console.log('Server is running on port 8000')
});