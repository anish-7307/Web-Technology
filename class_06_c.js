//write a program using js that you can go to kashmir or not ,if petrol is greater then 1000 ltr then you can go or else you cant go using proms

function canGoToKashmir(petrol) {
    return new Promise((resolve, reject) => {
        if (petrol > 1000) {
            resolve("You can go to Kashmir!");
        } else {
            reject("You cannot go to Kashmir!");
        }
    });
}

canGoToKashmir(1500)
    .then(message => console.log(message))
    .catch(error => console.log(error));