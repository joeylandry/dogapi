// get data from Dog API
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())  // parse json
    .then(data => {
        displayData(data); // display
        addApiInfo(); // add api info
    })
    .catch(error => console.error('Error fetching data:', error));

// display data
function displayData(data) {
    // get image URL
    const imageUrl = data.message;

    // set <img> element to URL
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog Image';
    img.style.maxWidth = '300px';

    // append image to 'api-results'
    document.getElementById('api-results').appendChild(img);
}

// add api info
function addApiInfo() {
    // spec requirements
    document.getElementById('api-description').innerText = 
        "The Dog CEO API provides random images of different dogs of all breeds.";
    document.getElementById('api-source').innerHTML = 
        'API: <a href="https://dog.ceo/dog-api/" target="_blank">Dog CEO API</a>';
    document.getElementById('api-parameters').innerText = 
        "No parameters needed for the request, defaulted to retrieve dog image.";
    document.getElementById('api-applications').innerText = 
        "Applications: This API could be useful for vets, pet adoption or pet stores to generate random images of dogs to provide info, services or products related.";
}
