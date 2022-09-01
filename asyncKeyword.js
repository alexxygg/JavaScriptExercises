// const successCry = async () => {
//   throw "error";
//   return "YESSSSS";
// };

// successCry()
//   .then((yes) => {
//     console.log("WE DID IT, ", yes);
//   })
//   .catch((no) => {
//     console.log("WE FAILED", no);
//   });

// const orderUber = async () => {
//   //   throw "No ubers in the area.";
//   return "On the way!";
// };

// orderUber()
//   .then((success) => {
//     console.log("OK! ", success);
//   })
//   .catch((failed) => {
//     console.log("Actually we can't, ", failed);
//   });

const login = async (username, password) => {
  if ((username && !password) || (!username && password)) {
    throw "Something's missing!";
  } else if (username == "alex" && password == "password") {
    return "LOGGED IN!";
  } else {
    return "NOT LOGGED IN!";
  }
};

login("alex", "dssd")
  .then((success) => {
    console.log("SUCCESS", success);
  })
  .catch((failed) => {
    console.log("YOUR REQUEST FAILED", failed);
  });
