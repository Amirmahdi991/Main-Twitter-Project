export const validateEmail = (email) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);
};
