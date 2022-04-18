var randomArray = [];

const randomMax = 37;
const iterations = 10000000;
const reds = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
for (var randomItem = 0; randomItem < randomMax; randomItem++){
    if (randomItem == 0) {
        randomArray.push({val: 0, color: 0, count: 0, percent: 0});
    } else {
        if (reds.indexOf(randomItem) > -1){
            randomArray.push({val: randomItem, color: 1, count: 0, percent: 0});
        } else {
            randomArray.push({val: randomItem, color: 2, count: 0, percent: 0});
        }
    }
}


var StartTime = new Date();
var i = 0;
var randomColor = 0;
var randomVal = 0;
while (i<iterations){
    randomVal = Math.floor(Math.random() * randomMax);
   
    randomArray.map( (val)=>{
        if (val.val == randomVal){
            val.count++;
        }
    });
    i++;
}

/*
randomArray.map( (val)=>{
    val.percent = ((val.count/iterations)*100).toFixed(6)+`%`;
});*/

var Total = [{color:0, count:0, percent:0},{color:1, count:0, percent:0},{color:2, count:0, percent:0}];
randomArray.map( (val)=>{
    Total.forEach((totalval, idx)=>{
        if (val.color == totalval.color){
            Total[idx].count += val.count;
            Total[idx].percent += val.percent;
        }
    })
});
Total.map( (val)=>{
    val.percent = ((val.count/iterations)*100).toFixed(6)+`%`;
});

var EndTime = new Date();
//console.log(`Roulete field: `, randomArray);
console.log(`Random numbers from 0 to ${randomMax-1} for ${iterations} iterations:`);
console.log(`Function complete for ${(EndTime-StartTime)/1000} seconds`);
console.log(`Color chances: `,Total)
