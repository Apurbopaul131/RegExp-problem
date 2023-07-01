const validateHexColorCode = (colorCode) =>{
    const regExp = /#?([\da-zA-Z]{2})([\da-zA-Z]{2})([\da-zA-Z]{2})/g;
    if(regExp.test(colorCode)){
        return true;
    }
    return false;
}
console.log(validateHexColorCode("#2A2A2Z"));
console.log(validateHexColorCode("2B2C2F"));