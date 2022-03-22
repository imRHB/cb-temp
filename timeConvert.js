function time_convert(num) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ":" + minutes;
}

console.log(time_convert(126));
console.log(time_convert(45));
// console.log(time_convert(1441));
