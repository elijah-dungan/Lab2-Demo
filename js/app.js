var ownCar = prompt('Do you own a car?');

ownCar = ownCar.toLowerCase(); //normalize data, not working

if(ownCar === 'yes' || ownCar === 'yes') {
    alert('Great!');
} else {
    alert('Go you plan on owning a car?');
}