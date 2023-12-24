// import and export session
// route and methods handler session
const userModel = require("../model/user.model");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require('../config');


// middleware of verifiyuser

const verifiyuser = async (req, res) => {
  
}


// register
const register = async (req, res) => {
  try {
    const { username, password, email, profile } = req.body;

    // exists username
    const existsuser = new Promise((resolve, reject) => {
      userModel.findOne({ username }, (error, user) => {
        if (error) reject(new Error(error + `error`));
        if (user) reject({ error: "Please Enter Unique Name" });
        resolve();
      });
    });
    // exists email

    const existsemail = new Promise((resolve, reject) => {
      userModel.findOne({ email }, (error, email) => {
        if (error) reject(new Error(error));
        if (email) reject({ error: "Please Enter Unique email" });
        resolve();
      });
    });
    Promise.all([existsuser, existsemail])
      .then(() => {
        if (password) {
          hash(password, 10)
            .then((hashpassword) => {
              const user = new userModel({
                username,
                password: hashpassword,
                profile: profile || "",
                email,
              });
              // result store as response
              user
                .save()
                .then((result) => {
                  res
                    .status(201)
                    .send({ msg: "User Register Successfully...!" });
                })
                .catch((error) => {
                  res
                    .status(500)
                    .send({ msg: `some thing went worng${error}` });
                });
            })
            .catch((error) => {
              return res.status(500).send({
                error: `something went wrong ${error} in hash password`,
              });
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({
          msg: error,
        });
      });
  } catch (error) {
    return res.status(500).send();
  }
};
//..................... end of register...............................

// login

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    userModel
      .findOne({ username })
      .then((user) => {
        compare(password, user.password)
          .then((passwordcheck) => {
            if (!passwordcheck)
              return res.status(404).send({ error: "passsord does not match" });

            // ................................... jwt token ...............................................................
            const token = jwt.sign(
              {
                userId: user._id,
                username: user.usernmae,
              },
              env.env.JWT_SECRET,
              { expiresIn: "24h" }
            );
            return res.status(200).send({
              msg: "Login successfully",
              username: user.username,
              token
            })
            
          })
          .catch((error) => {
            res.status(404).send({ error: "passsord does not match" });
          });
      })
      .catch((error) => {
        res.status(404).send({ error: "User Not Found" });
      });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};
// .................end of login..........................................

const getuser = async (req, res) => {
  const { username, password } = req.body;
  try {
    
  } catch (error) {
    return res.status(500), send({ msg: "some thing went weong" });
  }
};

const updateuser = async (req, res) => {
  res.json("updateuser route");
};

const genrateOTP = async (req, res) => {
  res.json("genrateOTP route");
};

const verifiyOTP = async (req, res) => {
  res.json("verifiyOTP route");
};

const createRestSession = async (req, res) => {
  res.json("createRestSession route");
};

const restPassword = async (req, res) => {
  res.json("restPassword route");
};

// Exporting the functions
module.exports = {
  register,
  login,
  getuser,
  updateuser,
  genrateOTP,
  verifiyOTP,
  createRestSession,
  restPassword,
};
