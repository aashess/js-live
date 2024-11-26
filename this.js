const user = {
    username: "aashish",
    price: 900,

    welcomeMessage: function message() {
        console.log(`${this.username}, welcome to the website.`);
        
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()