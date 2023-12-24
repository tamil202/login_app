import toast from "react-hot-toast"

// username validate
export const usernamevalidate = async(values) => {
    const error = usernameverifiy({}, values);
    return error;  
}
// password validation

export const passwordvalidate = async (values) => {
    const error = passwordverifiy({}, values)
    return error;
}

// email validation
export const emailvalidation = async(values) => {
  let error = emailverifiy({}, values);
  return error
}
// reigitser validation
export const registervalidation = (values) => {
  const error = usernameverifiy({}, values);
  passwordverifiy(error, values);
  emailverifiy(error, values)
  return error
}
// validate usernameverifiy

const usernameverifiy = (error={},values) => {
    if (!values.username) {
        error.username = toast.error("Required username")
    } else if (values.username.includes(" ")) {
        error.username = toast.error("Invalid username...!")
    }
    return error;
}

const passwordverifiy = (error = {}, values) => {
    const specialChar = /[.*+?^${}()|[\]\\]/g;

    if (!values.password) {
      error.password = toast.error("Required password");
    } else if (values.password.length < 6) {
      error.passwor = toast.error("password mmust have 6 characters");
    } else if (values.password.includes(" ")) {
      error.password = toast.error("wrong password !");
    } else if (!specialChar.test(values.password)) {
      error.passwor = toast.error("must have special characters");
    } 
    return error;
}

// profile validation
export const profilevalidation = async (values) => {
  const error = usernameverifiy({}, values);
  emailverifiy(error, values); 
  return error
}
// password match

export const restpassword = async(values) => {
  const error = passwordverifiy({}, values);
  if (values.password !== values.confirm_password) {
  error.exist = toast.error("password does not match");
  }
  return error;
}

export const emailverifiy = async (error = {},values) => {
   const specialChar = /[.*+?^${}()|[\]\\]/g;

   if (!values.email) {
     error.email = toast.error("Required email");
   }else if (values.email.includes(" ")) {
     error.email = toast.error("wrong email !");
   } else if (!specialChar.test(values.email)) {
     error.email = toast.error("enter email");
   }
   return error;
};
