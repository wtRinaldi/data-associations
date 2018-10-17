let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_references", { useNewUrlParser: true });

let Post = require("./models/post");
let User = require("./models/user");



/*User.create({
    email: "bob@gmail.com",
    name: "Bob Beran"
});*/

/*Post.create({
    title: "No wait, this is an even newer post",
    content: "I've created newer content"
}, function(err, post) {
    if(err) {
        
    } else {
        User.findOne({
            email: "bob@gmail.com"
        }, function(err, foundUser) {
            if(err) {
                
            } else {
                foundUser.posts.push(post);
                foundUser.save(function(err, data) {
                    if(err) {
                        
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});*/

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
    if(err) {
        
    } else {
        console.log(user);
    }
});