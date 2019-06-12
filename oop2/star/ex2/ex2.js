// Create Shoes constructor.
// It should have the following attributes:
// name, available sizes and a method that checks if a specific size is available.
// Create an instance.
// For that instance check to see if a specific size is available.
// Check once for an available size, and once for an unavailable size.
// For example we could have shoes called “star Shoes” with available sizes: 36,38,44.
// so when we check if size 36 is available we get true.
// When we check if size 46 is available we get false.


class Shoes {
    constructor(name, available_sizes) {
        this.name = name;
        this.available_sizes = available_sizes;
    }
    
    isZise_available(sizes) {
        let inStock =false;
        for (let i = 0; i < this.available_sizes.length; i++) {
            if(this.available_sizes[i] == sizes) {
                inStock = true;
                console.log(inStock)
            } else {
                console.log(inStock)

            }
            
        }
    }
}

let nike_air = new Shoes("nike air",[36,38,44])


