function repeat () {
    let d = new Date (); 
    let time = d.toLocaleString (); 
    console.log (time); 
    setTimeout (repeat, 1000); 
}

repeat (); 
// console.log (time); 