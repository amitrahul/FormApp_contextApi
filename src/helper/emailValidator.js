const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (userEmail) => {
  if (!emailregex.test(userEmail)) return false;
  return true;
};

export default validateEmail;
