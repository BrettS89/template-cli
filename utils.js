const { exec } = require('child_process');

const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error) => {
      if (error) {
        reject(error);
      }
      resolve(true);
    });
  });
};

module.exports = {
  executeCommand,
};
