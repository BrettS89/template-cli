const setup = require('./template-setup');

const run = async () => {
  const inquirer = await import ('inquirer');
  const prompt = inquirer.createPromptModule();

    prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What type of app are you building?',
        choices: [
          'react',
          'node',
        ],
      },
    ])
    .then(async answers => {
      await setup[answers.type]();
      console.log('Setup completed!');
    });
}

run();
