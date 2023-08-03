const path = require('path');
const process = require('process');
const os = require('os');

// print out the current working directory
const cwd = path.resolve();
console.log(cwd);

// print out the separator of a given file path 
const seperator = path.sep;
console.log(seperator);

// print out the extension name of a file path
const extName = path.extname('C:\Users\DELL SYS\Desktop\AltSchool-NodeJS-Assignment-Core-Modules\path.js');
console.log(extName);

// print out the process id of the current running process
console.log("The process id of the current running process " + process.pid)

// print out the user information of the os
const user = os.userInfo()
console.log(user)

// print out the platform of an operating system 
const platform = os.platform()
console.log(platform)