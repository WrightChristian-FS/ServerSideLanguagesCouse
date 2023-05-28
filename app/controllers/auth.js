// Render the sign in page
exports.signup = (req, res) => {
    res.render('pages/auth/signin');
};


// Validate the user sign in data and render the profile page 
exports.signin = (req, res) => {
    const {email, password} = req.body;
    if( (email != 'Mike@aol.com') || (password != 'abc123')){
        res.render('pages/auth/signin',{error: true, login: false});
    } else {

        req.session.login = true;
        res.render('pages/profile', {login: true});    
    }
};