//Check whether the first character of a string is uppercase or not
function upper_case(str){
    if(/^[A-Z]/.test(str)){
        console.log("String first character is uppercase.");
    }
    else{
        console.log("String first character is not a uppercase.");
    }
}
upper_case("Apurbo paul is a businessman.");
upper_case("apurbo paul is a businessman.");