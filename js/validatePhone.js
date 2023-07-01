//Validation of phone numbers
// +88-01793736293
const validatePhone = phone =>{
    const regExp = /(\+88)?-?01[3-9]\d{8}/g;
    if(regExp.test(phone)){
        return true;
    }
    return false;
}
console.log(validatePhone("+8801793736293"));
console.log(validatePhone("01988681792"));
console.log(validatePhone("+88-11793736293"));