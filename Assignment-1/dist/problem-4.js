"use strict";
{
    ;
    ;
    const calculateShapeArea = (shape) => {
        if (shape.shape === 'circle') {
            return Number((Math.PI * shape.radius * shape.radius).toFixed(2));
        }
        else if (shape.shape === 'rectangle') {
            return Number((shape.height * shape.width).toFixed(2));
        }
        else {
            throw new Error('Invalid Shape Type');
        }
    };
    const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({ shape: 'rectangle', height: 6, width: 4 });
    console.log(rectangleArea);
    //
}
