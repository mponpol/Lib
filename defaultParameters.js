/*
 * OPTIONAL AND DEFAULT PARAMETERS
 *
 * When a function is invoked with fewer arguments than declared parameters, the additional
 * parameters are set to their default value, which is normally undefined.
 */

function Mountain (name, height, mountainRange) {
    this.name = name;
    this.height = height;
    this.mountainRange = mountainRange;
}

var everest = new Mountain ('Everest', 8848, 'Himalaya');  // all parameters passed
var k2 = new Mountain ('K2', 8611);  // mountainRange not passed
console.log (everest);
console.log (k2);
 // => Mountain {name: "Everest", height: 8848, mountainRange: "Himalaya"}
 // => Mountain {name: "K2", height: 8611, mountainRange: undefined}



// ES5: default parameters adding an 'if' statement
function Mountain (name, height, mountainRange) {
    if (mountainRange === undefined) mountainRange = 'Himalaya';
    this.name = name;
    this.height = height;
    this.mountainRange = mountainRange;
}

var everest = new Mountain ('Everest', 8848, 'Himalaya');  // all parameters passed
var k2 = new Mountain ('K2', 8611);  // mountainRange not passed
console.log (everest);
console.log (k2);
 // => Mountain {name: "Everest", height: 8848, mountainRange: "Himalaya"}
 // => Mountain {name: "K2", height: 8611, mountainRange: "Himalaya"}



// ES6: simply follow the parameter name with an equals sign and the default value to use when no argument is supplied for that parameter
function Mountain (name, height, mountainRange = 'Himalaya') {
    this.name = name;
    this.height = height;
    this.mountainRange = mountainRange;
}

let everest = new Mountain ('Everest', 8848, 'Himalaya');  // all parameters passed
let k2 = new Mountain ('K2', 8611);  // mountainRange not passed
console.log (everest);
console.log (k2);
 // => Mountain {name: "Everest", height: 8848, mountainRange: "Himalaya"}
 // => Mountain {name: "K2", height: 8611, mountainRange: "Himalaya"}