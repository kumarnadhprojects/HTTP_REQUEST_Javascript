let data = {
  name: "Kumar1234567"
//   email: "kum@kum.com",
//   gender: "Male",
//   status: "Active"
};

let options = {
  method: "PUT",
  headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer bce02a79b1e2c6847a0dedb6e342d32f1196f3b720342228626844715d715ecc"
  },
  body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public-api/users/1503", options)
.then(function(response){
   return response.json();
})
.then(function(jsonData){
    console.log(jsonData);
});