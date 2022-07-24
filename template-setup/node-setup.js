const fs = require('fs');
const { executeCommand } = require('../utils');

const nodeSetup = async () => {
  const cwd = process.cwd();
  const dir = process.env.INIT_CWD;

  fs.cpSync(`${cwd}/templates/feathers-src`, `${dir}/src`, { recursive: true });
  fs.cpSync(`${cwd}/templates/feathers-config`, `${dir}/config`, { recursive: true });

  await executeCommand(`npm --prefix ${dir} install --save ajv bcryptjs dotenv feathers-hooks-common jsonwebtoken feathers-mongoose mongoose mongodb-core`);
  await executeCommand(`npm --prefix ${dir} install --save-dev @types/jsonwebtoken @types/bcryptjs`);
};

module.exports = nodeSetup;
