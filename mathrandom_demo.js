var randomArray = [];

const randomMax = 10;
const iterations = 100000000;
for (var randomItem = 0; randomItem < randomMax; randomItem++){
    randomArray.push({val: randomItem, count: 0, percent: 0});
}

var StartTime = new Date();
var i = 0;
while (i<iterations){
    let randomVal = Math.floor(Math.random() * randomMax);
    randomArray.map( (val)=>{
        if (val.val == randomVal){
            val.count++;
        }
    });
    i++;
}

randomArray.map( (val)=>{
    val.percent = ((val.count/iterations)*100).toFixed(6)+`%`;
});

var EndTime = new Date();
console.log(`Random numbers from 0 to ${randomMax-1} for ${iterations} iterations:`);
console.log(randomArray);
console.log(`Function complete for ${(EndTime-StartTime)/1000} seconds`);
