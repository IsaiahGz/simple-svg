const prompt = require('./lib/prompt');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

// Questions to ask user
const questions = [
	{
		type: 'input',
		name: 'text',
		message: 'What text would you like (Max: 3)?',
		validate(input) {
			return new Promise((resolve, reject) => {
				if (input.length >= 1 && input.length <= 3) resolve(true);
				else reject('Invalid text length');
			});
		},
	},
	{
		type: 'input',
		name: 'textColor',
		message: 'What color would you like the text to be?',
	},
	{
		type: 'list',
		name: 'shape',
		message: 'Which shape would you like?',
		choices: ['Circle', 'Triangle', 'Square'],
	},
	{
		type: 'input',
		name: 'shapeColor',
		message: 'What color would you like the shape to be?',
	},
];

// Function to be called on program start
const init = () => {
	prompt(questions, (answers) => {
		const { text, textColor, shape, shapeColor } = answers;
		let shapeObj = null;
		switch (shape) {
			case 'Triangle':
				shapeObj = new Triangle();
				break;
			case 'Square':
				shapeObj = new Square();
				break;
			case 'Circle':
				shapeObj = new Circle();
				break;
		}
		shapeObj.setText(text).setShapeColor(shapeColor).setTextColor(textColor);
		fs.writeFile('./logo.svg', shapeObj.render(), () => {
			console.log('Generated logo.svg');
		});
	});
};

// Start the program
init();
