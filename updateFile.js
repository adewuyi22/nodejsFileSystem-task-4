var File = require('fs');

//The Append method is use to make an update to a file

let myfile = 'myfile.txt';
let text = " A New text added to the file successfully... \n";

File.appendFile(myfile, text, (err) => {
if (err) {
    console.log('Error Occured...');
} else {

   let message = "Text added successfully...\n";
    console.log(message);
}

})
