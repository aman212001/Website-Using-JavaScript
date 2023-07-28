// Form Validation
function validate()
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;


if(username=="admin" && password=="123")
{
    alert("Getting you in!!!");
    return false;
}
else
{
    alert("Invalid Username or Password");
    return false;
}

}

//Scroll to top
function scrollToTop(){
window.scrollTo(0,0);

}