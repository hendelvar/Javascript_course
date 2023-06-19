import chalk from "chalk";

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Henry';
console.log(chalk.green('Hello %s'), name);