module.exports = function main(inputs) {
    var price = 6;
    var distance = inputs.distance;
    var parkTime = inputs.parkTime;


    if (distance > 2 && distance <= 8) {
        price = 6 + 0.8 * (distance-2);
    }
    else if(distance > 8){
        price =  6 + 0.8 * 6 + (distance - 8) * 0.8 * 1.5;
    }
    if (parkTime != 0) {
        price = price + 0.25 * parkTime;
    }
    price = Math.round(price)
    return price;
};
