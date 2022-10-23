const UserModel = require('./models/UserModel');
const bcrypt = require('bcryptjs');

function RegisterUser(req, res){
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
                    res.send({status: 200, message:'User registered successfully', user: user});
                }
                else {
                    throw err;
                }
            })
        } else {
            res.send(err);
        }
    })
}

module.exports = {RegisterUser};