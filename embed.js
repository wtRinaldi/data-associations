let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

let Post = mongoose.model("Post", postSchema);

let userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
});

let User = mongoose.model("User", userSchema);

/*let newUser = new User({
    email: "williamtrinaldi@gmail.com",
    name: "William Rinaldi"
});

newUser.posts.push({
    title: "Testing Posts",
    content: "testing 1 2 3"
});

newUser.save(function(err, user) {
    if(err) {
        
    } else {
        console.log(user);
    }
});*/

User.findOne({name: "William Rinaldi"}, function(err, user) {
    if(err) {
        
    } else {
        user.posts.push({
           title: "adding anutter post",
           content: "i hadda add anutter post with dis dat nda tird"
        });
        user.save(function(err, user) {
            if(err) {
        
            } else {
                console.log(user);
            }
        })
    }
});