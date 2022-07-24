const fs = require('fs');
const { executeCommand } = require('../utils');

const reactSetup = async () => {
  const cwd = process.cwd();
  const dir = process.env.INIT_CWD;

  fs.cpSync(`${cwd}/templates/react-src`, `${dir}/src`, { recursive: true });

  await executeCommand(`npm --prefix ${dir} install --save @emotion/react @emotion/styled @feathersjs/feathers @feathersjs/rest-client @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @mui/icons-material @mui/material axios lodash react-redux react-router-dom redux redux-saga`);
  await executeCommand(`npm --prefix ${dir} install --save-dev @types/lodash`);
};

module.exports = reactSetup;
