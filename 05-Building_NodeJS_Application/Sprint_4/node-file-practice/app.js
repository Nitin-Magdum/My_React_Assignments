const fs = require("fs");

const writeLineBySeperateLines = (filename, newData) => {
  let data = fs.appendFileSync(filename, newData);
  return data;
};

const readLineBySeperateLines = (filename) => {
  let data = fs.readFileSync(filename);
  return data.toString();
};

const renameFile = (filename, newFilename) => {
  let data = fs.renameSync(newFilename, filename);
  console.log("File Renamed");
};

const deleteFile = (filename) => {
  try {
    fs.unlinkSync(filename);

    console.log("File is deleted.");
  } catch (error) {
    console.log(error);
  }
};

writeLineBySeperateLines("file.txt", " This is new test to write");
console.log("Data Append");

const output2 = readLineBySeperateLines("file.txt");
console.log(output2);

const output3 = renameFile("file.txt", "new_file_name.txt");
deleteFile("deleting_operations.txt");
