const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserModel = require('./models/UserModel');
const bodyParser = require('body-parser');
const DB_URI = 'mongodb://localhost:27017/AuthDB';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

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

app.use(bodyParser.urlencoded({ extended: false }));
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

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), (req, res)=> {
    res.redirect('/profile');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', (req, res) => {
    UserModel.findOne({ email: req.body.email }, (err, user) => {
        if (user) {
            res.send({ status: 409, message: 'User with specified email already exists' })
        } else if (!user) {
            let user = new UserModel();
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.country = req.body.country;
            user.email = req.body.email;
            user.password = bcrypt.hashSync(req.body.password, 8);
            user.save((err) => {
                if (!err) {
                    res.redirect('/login');
                }
                else {
                    throw err;
                }
            })
        } else {
            res.send(err);
        }
    })

})

app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

app.post('/logout', (req, res)=> {
    req.logout((err) => {
        if(!err){
            res.redirect('/');
        }
    });
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
});