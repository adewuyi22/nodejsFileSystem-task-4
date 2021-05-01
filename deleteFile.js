var del = require('fs');

//Declaring a deleteing a File method 
del.unlink('posts.txt', (err) => {

if (err) {
  
    console.log('File  has been deleted or Does not exist...');
} else {
    console.log('File Deleted Successfully!');
}

});

