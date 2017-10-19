


function printRange(startPoint,endPoint, skipPoint ){

for(var n = startPoint; n<endPoint; n+=skipPoint){
   console.log(n);
    startPoint += skipPoint;

    
 }
 
}
printRange(2,10,2);