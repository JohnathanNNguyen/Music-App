const fetch = require("node-fetch");
// https://the-one-api.dev/documentation

// const main = async (arr) => {
//     try {
//         // `await` syntax
//         const response = await fetch(
//             'https://the-one-api.dev/v2/book', {
//             method: 'GET', // *GET, POST, PUT, DELETE, etc.
//             headers: {
//               'Authorization': 'OD8e_65pN2XY-bc4KdX5'
//             }
//         });
//         const res = await response.json();
//         console.log('response', res)

//         // `.then()` syntax
//         // fetch('https://the-one-api.dev/v2/book', {
//         //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
//         //     headers: {
//         //       'Authorization': INSERT API KEY HERE
//         //     }
//         // }).then(async res => {
//         //     const response = await res.json();
//         //     console.log(response);
//         // });
//     } catch (err) {
//         console.log('err', err)
//     }
// }

// main()

const getApiToken = async () => {
  const base64Tokens = new Buffer(
    "2290da4795a040ffab20a16c183115d3:80cf1cc00f80433688ca6f79e106a8fd"
  ).toString("base64");

  console.log("base64Tokens", base64Tokens);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + base64Tokens,
    },
    body: "grant_type=client_credentials",
    // json: true
  });
  const respJson = await response.json();
  console.log("RESPONSEe", response, "JSONNN", respJson);
};

getApiToken();

// package.json
// {
//   "name": "bvtca-api-example",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "node-fetch": "^2.6.1"
//   }
// }
