function validate_email(email){
    if(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)){
        return true;
    }
    return false;
}
console.log(validate_email("workingexample@email.com"));
console.log(validate_email("notanemail.com"));
console.log(validate_email("another_working@somethingelse.org"));
