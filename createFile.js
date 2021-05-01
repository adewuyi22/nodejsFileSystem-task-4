var Myfile = require('fs');

//creating a result directory variable and posts.txt text file
let result = "./result/posts.txt";

//declaring a post variable 
let post = "Welcome to Zuri-Internship";

//creating a text file and writing to it in the result directory 
 Myfile.writeFile(result, post, (err)=> {
if (err) {
    console.log('Error occured! \n '+err);

} else {
    console.log("File created sucessfully.");
   
}

});

