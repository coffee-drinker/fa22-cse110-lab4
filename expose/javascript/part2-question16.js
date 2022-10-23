let statistics = {
    redCar: 21, 
    blueCar: 45, 
    greenCar: 12, 
    raceCar: 5, 
    blackCar: 40,
    rareCar: 2 
}

// let str = "hello, abcdefg"

for (const s in statistics) {
    // console.log (str.charAt (s)); 
    // console.log (s); 
    if ((s.charAt (0) == "r") || ((statistics [s] % 2) == 1)) {
        console.log (statistics [s])
    }
}