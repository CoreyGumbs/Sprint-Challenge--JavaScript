// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attributes) {
//     this.length = attributes.length;
//     this.width = attributes.width;
//     this.height = attributes.height;
//   }

//   CuboidMaker.prototype.volume = function(){
//     return this.length * this.width * this.height;
//   } 

//   CuboidMaker.prototype.surfaceArea = function(){
//     return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
//   }

//   const cuboid =  new CuboidMaker({
//     length: 4,
//     width: 5,
//     height: 5
//   });

class RefactorCuboidMaker{
    constructor(cuboidMakerAttrs){
        this.length = cuboidMakerAttrs.length;
        this.width = cuboidMakerAttrs.width;
        this.height = cuboidMakerAttrs.height;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}

const cuboid2 = new RefactorCuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Cubioid volume: ", cuboid2.volume()); // 100
console.log("Cubioid surface area: ", cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends RefactorCuboidMaker{
    constructor(cubeAttrs){
        super(cubeAttrs);
        this.area = function(){
            return this.length * this.width * this. height;
        }
    }

   cubeSurfaceArea(){
       return 6 * (this.width * this.height);
   }
}

const cube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
})
console.log("Cube volume: ", cube.volume());
console.log("Cube surface area: ", cube.cubeSurfaceArea());