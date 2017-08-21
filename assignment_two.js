var output = [];
var fs = require('fs');
var readline = require('readline').createInterface({
    input: fs.createReadStream('Indicators.csv')
});

readline.on('line', function(line) {           
    line.split("\n");
    var arr = line.split(",");
    //var india=['IND']

   //for(i in india){
if(arr[1]==='IND' && (arr[2]==="\"Birth rate" || arr[2] ==="\"Death rate"))
            //  && arr[3] === "\" crude (per 1" && arr[4]==="000 people)\"")
            {
//console.log(arr[1], arr[2], arr[3], arr[4], arr[6], arr[7])//, arr[4])
    output.push({
        livingrate : arr[2],
        year: arr[6],
        value: arr[7]
             });
//console.log(output);
        }
    //}
})
readline.on('close', function(line) {
    /*var result = JSON.stringify(output, null,2);
    fs.writeFileSync('myjayson.json',result);*/
    fs.createWriteStream('assignmenttwo.json').write(JSON.stringify(output,null,2),'utf-8');
});