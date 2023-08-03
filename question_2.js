const fs = require('fs');
const path = require('path');


// Create a directory/folder named: "Students"
const studentsFolder = path.join(__dirname, 'Students');
fs.mkdir(studentsFolder, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Students folder has been created successfully')
});

 // Update Students directory to Names
const  namesFolder = path.join(__dirname, 'Names')
fs.rename(studentsFolder, namesFolder, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Students directory successfully updated to Names')
});

// Create a file name user.js  and add your name as content to the file
const newFile = path.join(__dirname, 'Names', 'user.js')
const content = 'Success Abhulimen'
fs.writeFile(newFile, content, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File  created successfully')
});

//  Update the file with information about yourself (age, sex, nationality, phone number)
fs.appendFile(newFile, '\n22\nFemale\nNigerian\n08090605679', (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File updated successfully')
});

// Update user.js to success_abhulimen.js
const updatedFilename = path.join(__dirname, 'Names', 'success_abhulimen.js')
fs.rename(newFile, updatedFilename, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Filename successfully updated')
});

// Read the contents from success_abhulimen.js
fs.readFile(updatedFilename, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
       
    }
    console.log('File read successfully')
    console.log(data)
});

// Delete success_abhulimen.js file
fs.rm(updatedFilename, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File deleted successfully')
});

// Delete Names directory
fs.rmdir(namesFolder, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Names folder deleted successfully')
});
