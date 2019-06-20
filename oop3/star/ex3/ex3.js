// Write a class called Point, which represents a point in two-dimensional space.
// A point has x and y properties, given as arguments to its constructor.
// point example:
// (3,0) : x=3, y=0
// It also has a single method plus, which takes another point and returns a new point that is the sum of the two points.
// That is, a new point whose x is the sum of the x properties of the original point and the other point,
// and whose y is the sum of their y properties.
// Make sure that the plus method returns a new point.
// Test your code and submit at least 2 test cases.

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    
    isumThem(x,y) {
      return x+y
    }
}

let twonums = new Point()

twonums.isumThem(900,50)




