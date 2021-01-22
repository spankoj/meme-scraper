const request = require('request');

let myArray = [];

request(
  'https://memegen-link-examples-upleveled.netlify.app',
  function (error, response, body) {
    const rule = /<img[^>]+src="([^">]+)"/g;
    for (let i = 0; i < 10; i++) {
      let match = rule.exec(body);
      myArray.push(match[1]);
    }
    console.log(myArray);
  },
);
