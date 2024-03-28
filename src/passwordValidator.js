function validatePassword(password){
    //Check min lenght
    if(password.length < 8){
        return "Password must be at least 8 characters long.";
    }
    //Uppercase char check
    if(!/[A-Z]/.test(password)){
        return "Password must contain at least 1 uppercase letter.";
    }
    //Lowercase char check
    if(!/[a-z]/.test(password)){
        return "Password must contain at least 1 lowercase letter.";
    }
    //Num check
    if(!/\d/.test(password)){
        return "Password must contain at least 1 number.";
    }
    //Special char check
    if(!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?~`]/.test(password)){
        return "Password must contain at least one special character.";
    }

    //If password passes every check
    return "Password is valid.";

}

export default validatePassword;
