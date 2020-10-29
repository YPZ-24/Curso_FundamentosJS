let data;

//http://jsonplaceholder.typicode.com/
fetch("http://jsonplaceholder.typicode.com/comments").then(function (response) {
    response.text().then(function (text) {
        data = text;
    });
});
    