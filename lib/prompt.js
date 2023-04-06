const inquirer = require('inquirer');

/**
 *
 * @param {Array} questions Array of questions
 * @param {Function} callback A callback function which is passed the answers from the questions
 */
const prompt = (questions, callback) => {
	inquirer
		.prompt(questions)
		.then((answers) => callback(answers))
		.catch((err) => console.log(err));
};

module.exports = prompt;
