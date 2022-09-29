const wilders = ["Johanna", "Célia", "Audrey", "Victor"];

import chalk from 'chalk';

const intro = "The others Rokettos wilders are : ";

console.log(`${intro}`, chalk.red(`${wilders[0]},`), chalk.blue(`${wilders[1]},`), chalk.green(`${wilders[2]} and`), chalk.yellow(`${wilders[3]}`));
