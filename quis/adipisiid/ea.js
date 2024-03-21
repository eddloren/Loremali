// Define the function
function fetchData(apiUrl) {
  // Use the built-in fetch API to make the request
  return fetch(apiUrl)
    // Convert the response to JSON
    .then(response => response.json())
    // Handle any errors
    .catch(error => console.error(error));
}

// Call the function with a sample API URL
fetchData('https://www.example.com  // Do something with the data
  .then(data => console.log(data))
  // Output: {login: "example", id: 123456, ...}
