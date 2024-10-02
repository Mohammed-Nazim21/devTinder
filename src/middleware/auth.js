const adminAuth = (req, res, next) => {
  const token = "abc";
  const adminAuthenicated = "abc" === token;
  if (!adminAuthenicated) {
    res.status(501).send("Wrong Authentication Token");
  } else {
    console.log("Admin Authenticated");
    next();
  }
};

const userAuth = (req, res, next) => {
  const userToken = "xyz";
  const isUserAuthenticated = "xyz" === userToken;
  if (!isUserAuthenticated) {
    console.log("Wrong Token");
    res.status(401).send("unauthorised request");
  } else {
    console.log("user Authorised");
    next();
  }
};

module.exports = { adminAuth, userAuth };
