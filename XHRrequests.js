// //We must declare a variable for our request.
// const req = new XMLHttpRequest();

// req.onload = function () {
//   //If it loads, we will print our message along with the returned object.
//   console.log("It worked.");
//   console.log(this);
//   //Inside the object is a key value pair called responseText, which we print
//   console.log(this.responseText);
//   //We also convert it to JSON to see the differences.
//   //It converts the responseText pair to an understandable object we can work with.
//   const realText = JSON.parse(this.responseText);
//   //We print it.
//   console.log(realText);
//   //We print two of its values.
//   console.log(realText.name, realText.height);
//   //We also print a string with the values.
//   console.log(`${realText.name} is ${realText.height} cm. tall.`);
// };

// //Function in case it doesn't load.
// req.onerror = function () {
//   console.log("It didn't work.");
//   console.log(this);
// };

// //Here is where we make the request.
// req.open("GET", "https://swapi.dev/api/people/1/");
// req.send();

//It will return us a promise.
// fetch("https://swapi.dev/api/people/1/")
//   //The yes and no parameter is the returned response object.
//   //(Unreadable, before parsing)
//   //Sometimes they are incomplete, since they are resolved ASAP
//   //and may be missing parts.
//   .then((yes) => {
//     //We print the original object from the response.
//     console.log("It worked x2.", yes);
//     //We convert the response object to a JSON object.
//     //(.json() only used in fetch, different from JSON.parse())
//     return yes.json();
//   })
//   //We print the JSON converted object.
//   .then((data) => {
//     console.log("Done", data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   //We are making a second request IN SERIES,
//   //so the second won't start until the first request comes back successfully.
//   .then((yes) => {
//     console.log("Second request resolved.");
//     return yes.json();
//   })
//   .then((data) => {
//     console.log("Done", data);
//   })
//   .catch((no) => {
//     console.log("It didn't work. x2", no);
//   });

//We could do each request independently, but sometimes it's needed to wait for
//one request to return before we call another one.

// fetch("https://swapi.dev/api/people/1/")
//   .then((yes) => {
//     console.log("It worked x2.", yes);
//     return yes.json();
//   })
//   .then((data) => {
//     console.log("Done", data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((yes) => {
//     console.log("Second request resolved.");
//     return yes.json();
//   })
//   .then((data) => {
//     console.log("Done", data);
//   })
//   .catch((no) => {
//     console.log("It didn't work. x2", no);
//   });

// fetch("https://swapi.dev/api/people/1/")
//   .then((yes) => {
//     console.log("It worked x2.", yes);
//     return yes.json();
//   })
//   .then((data) => {
//     console.log("Done", data);
//     return fetch("https://swapi.dev/api/people/2/");
//   })
//   .then((yes) => {
//     console.log("Second request resolved.");
//     return yes.json();
//   })
//   .then((data) => {
//     console.log("Done", data);
//   })
//   .catch((no) => {
//     console.log("It didn't work. x2", no);
//   });

// const starWarsAPI = async () => {
//   try {
//     const one = await fetch("https://swapi.dev/api/people/1/");
//     const data = await one.json();
//     console.log(data);
//     const two = await fetch("https://swapi.dev/api/people/2/");
//     const data2 = await two.json();
//     console.log(data2);
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };
// starWarsAPI();

//Our yes response object already contains a key value pair called data.
//It is an object with the JSON parsed version.
//One step less, making it easier for us.
// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((success) => {
//     console.log(success.data);
//     return axios.get("https://swapi.dev/api/people/2/");
//   })
//   .then((success) => {
//     console.log(success.data);
//   })
//   .catch((error) => {
//     console.log("Failed request: ", error);
//   });

// //async function
// const sWarsAPI = async () => {
//   try {
//     const success = await axios.get("https://swapi.dev/api/people/1/");
//     console.log(success.data);
//     const success2 = await axios.get("https://swapi.dev/api/people/2/");
//     console.log(success2.data);
//   } catch (error) {
//     console.log("Failed request: ", error);
//   }
// };
// sWarsAPI();

const getDadJokes = async () => {
  try {
    //Documentation for this API needs Accept application/json
    const httpHeaders = { headers: { Accept: "application/json" } };
    //We need to pass our new headers variable as a second argument.
    const success = await axios.get("https://icanhazdadjoke.com/", httpHeaders);
    //This is the path where the joke text is in this particular API:(Nesting)

    return success.data.joke;
  } catch (error) {
    console.log("Error: ", error);
  }
};

const button = document.querySelector("button");
const ul = document.querySelector("ul");

const addNewJoke = async () => {
  const joke = await getDadJokes();
  const newLi = document.createElement("li");
  ul.append(newLi);
  newLi.innerText = joke;
};
button.addEventListener("click", addNewJoke);
