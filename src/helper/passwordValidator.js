// regeular expression in short form is called as Regex.
const regex = /^(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

const validatePassword = (userPassword) => {
  if (userPassword.length < 8 || !regex.test(userPassword)) return false;
  return true;
};

export default validatePassword;
