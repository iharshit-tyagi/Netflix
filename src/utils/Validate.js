export const validateData = (email, password, name) => {
  const emailValidate = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(
    password
  );
  if (name === "") return "Please Enter your name.";
  if (!emailValidate) return "Invalid Email ID";
  if (!passwordValidate) return "Invalid Password";

  return null;
};
