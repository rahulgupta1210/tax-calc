

export const checkValidData = (email, password) => {
    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = (password) => /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(password);

    if (!isEmailValid(email)) return 'E-mail is invalid';
    if (!isPasswordValid(password)) return 'Password is Invalid';
    return null;
}

