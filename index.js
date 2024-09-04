let=[]
function signupup(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if(!name || !email || !password){
        alert("please fill in all fields")
        return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("userArray")) || [];
    const userExists = existingUsers.find(user.email=== email);
    if(userExists){
        alert("user with this email already exist.please login")
        window.location.href = "login.html"
        return;
    }
}
function login(){ 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const users = json.parse(localStorage.getItem("usersArray"));
    if(!email || !password){
        alert("please fill in all fields")
        return;
    }
    const user = users.find(user => user.email === email && user.password === password);
if(user){
    localStorage.setItem("loggedInuser", json.stringify(user));
    window.location.href= "hello.html"
}else{
    alert(" invalid email or password.please try again")
}
}
document.addEventListener("DOMContentLoaded", function(){
    function checkUserAuthentication(){
        const loggedInUser = json.parse(localStorage.getItem("loggedInUser"));
        const currentPath = window.location.pathname;
        const isAuthenticated = !!loggedInUser;
        if(isAuthenticated){
            if(currentPath.endsWith("index.html") || currentPath.endsWith("login.html") ||
                currentPath.endsWith("/")) {
                    window.location.href = "hello.html";
                } else if (currentPath.endsWith("hello.html")) {
                    
                    const userNameElement = document.getElementById("username");
                    if (userNameElement) {
                        userNameElement.textContent = loggedInUser.name;
                    }
                }
            } else {
            
                if (currentPath.endsWith("hello.html")) {
                    window.location.href = "login.html";
                }
            }
        }
    
        checkUserAuthentication();
    });
           