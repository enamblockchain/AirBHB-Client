// webpack doesn't like localStorage otherwise
let localStorage = global.window.localStorage;
//let email;

var RestClient = {
    init() {
        // Get the previous users from localStorage if they exist, otherwise
        // populates the localStorage
        if (localStorage.email === undefined || !localStorage.encrypted) {
        // Set default user
        /*const AzureDiamond = "AzureDiamond";
        const AzureDiamondSalt = genSalt(AzureDiamond);
        const AzureDiamondPass = bcrypt.hashSync("hunter2", AzureDiamondSalt);
        users = {
            [AzureDiamond]: bcrypt.hashSync(AzureDiamondPass, salt)
        };
        localStorage.users = JSON.stringify(users);*/
            //localStorage.user = {"email":"oneenam@gmail.com"};
            localStorage.encrypted = true;
        } else {
            //email = localStorage.email; //JSON.parse(localStorage.users);
        }
    },

    login(email, password){

        localStorage.setItem('email', email);
        
    },

    loggedIn() {
        
        if (localStorage.getItem('email') === undefined || localStorage.getItem('email') === null){
            return false;
        }            
        else{
            //console.log("email: "+localStorage.getItem('email'));
            return true;
        }
        
        //console.log(localStorage.email);
        //return !!localStorage.email;
    },
    logOut(){
        console.log(localStorage.email);
        localStorage.email = null;
    }
}

RestClient.init();

module.exports = RestClient;
