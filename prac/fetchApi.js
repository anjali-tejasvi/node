const fetch = require('node-fetch')

const fetchApi= () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res) => res.json())
    .then((data) => console.log(data))
}
fetchApi();