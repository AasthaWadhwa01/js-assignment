var output = [];
var fs = require('fs');
var readline = require('readline').createInterface({
    input: fs.createReadStream('Indicators.csv')
});

readline.on('line', function(line) {           
    line.split("\n");
    var arr = line.split(",");
    var asiaarray=['ARM','AZE','BHR','BGD','BTN','BRN','KHM','CHN','CXR','CCK','IOT','GEO','HKG',
'IND','IDN','IRN','IRQ','ISR','JPN','JOR','KAZ','KWT','KGZ','LAO','LBN','MAC','MYS','MDV',
'MNG','MMR','NPL','PRK','OMN','PAK','PSE','PHL','QAT','SAU','SGP','KOR','LKA','SYR','TWN',
'TJK','THA','TUR','TKM','ARE','UZB','VNM','YEM']
        for(i in asiaarray){
                if(arr[1]===asiaarray[i] && arr[2]==='\"Life expectancy at birth' && 
                (arr[3]===' female (years)\"' || arr[3] ===' male (years)\"') )
                {
                    // output[arr[5]]= output[arr[5]] || []
                    output.push({
                    countrycode : arr[1],
                    gender : arr[3],
                    value: arr[6]
                });
                    output.sort(function(a,b){
                        return b.value-a.value;
                    });

                }
                }   
            })   
readline.on('close', function(line) {
    //console.log(output.slice(0,5));
    /*var result = JSON.stringify(output, null,2);
    fs.writeFileSync('myjayson.json',result);*/
    fs.createWriteStream('assignmentthree.json').write(JSON.stringify(output.slice(0,5),null,2),'utf-8');
});