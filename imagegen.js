var xlsx = require('xlsx');


var wb = xlsx.readFile('./xls/data.xlsx');

var ws = wb.Sheets["Sheet 1"]
const fs = require('fs');
var data = xlsx.utils.sheet_to_json(ws);

// console.log(data);
let d = new Date();
console.log(d);


async function  base64ToImg(){
  for(let i=0;i<data.length;i++){
    // var base64Str = data[i].base64String;
    // console.log(base64Str);
    let imageVal = data[i].base64ToString;
   const image = new Buffer.from(imageVal.replace(/^data:image\/\w+;base64,/, ""), 'base64');
   console.log(image);
  await fs.writeFileSync(`./images/${data[i].unique}.png`,image,'binary');
  }
}


base64ToImg();