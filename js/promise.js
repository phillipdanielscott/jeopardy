
function primp(person) {
    console.log('primping');
    return person.results[0];
}

function greet(person) {
    console.log(`hi im ${person.name.first}`);
}

window.addEventListener('load', function () {
    // Create the promise and tell it what we're promising.
    let askEm = new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
        // When the response is 'loaded' (has come back), parse
        // it and return the result.
        request.addEventListener('load', function () {
            if (request.status !== 200) {
                reject('ajax request failed');
            } else {
                let result = JSON.parse(request.responseText);
                resolve(result);
            }

        });

        request.open('GET', 'http://jservice.io/api/random');
        request.send();
    });

    // Once the promise completes, do something else.
    askEm
        .then(primp)
        .then(greet)
        .catch(function (errorMsg) {
            console.error(`Terrible news: ${errorMsg}`);
        });
    // getEm.catch(function () {
    //     console.error('uh oh');
    // });
});
