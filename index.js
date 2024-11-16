fetch('https://api.sampleapis.com/coffee/hot')
.then(response => {
    if (response.ok) {
    return response.json();
} else {
    throw new Error('API request failed');
}
})

.then(data => {
    console.log(data);
})

.catch(error => {
    console.error(error);
});
