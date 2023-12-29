
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')
var signupName = document.getElementById('signupname')
var signupEmail = document.getElementById('signupemail')
var signupPassword = document.getElementById('signuppassword')

var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}

var signuparray = []
if (localStorage.getItem('users') == null) {
    signuparray = []
} else {
    signuparray = JSON.parse(localStorage.getItem('users'))
}

function emailexist() {
    for (var i = 0; i < signuparray.length; i++) {
        if (signuparray[i].email.toLowerCase() == signupemail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    if (signupname.value == "" || signupemail.value == "" || signuppassword.value == "") {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var signUp = {
        name: signupname.value,
        email: signupemail.value,
        password: signuppassword.value,
    }
    if (emailexist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        return false
    } else {
        signuparray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signuparray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }


}


function login() {
    if (signinPassword.value == "" || signinEmail.value == "") {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var info = {
        email: signinemail.value,
        password: signinpassword.value,
    }
    signarray.push(info);
    for (var i = 0; i < signarray.length; i++) {
        if (signarray[i].email.toLowerCase() == email.toLowerCase() && signarray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('myinfo' , JSON.stringify(signarray))
            clearform();
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
}
}
function logout() {
    localStorage.removeItem('myinfo')
}