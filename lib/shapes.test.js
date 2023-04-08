const { Triangle, Square, Circle, Shape } = require('./shapes');

describe('Shapes lib', () => {
	describe('Class: Shape', () => {
		it('should throw an error when trying to call render()', () => {
			const shape = new Shape();
			expect(shape.render).toThrow(new Error('Shape does not implement render()'));
		});
	});

	describe('Class: Triangle', () => {
		it('should render a triangle with blue text and an orange triangle with a text of "AB"', () => {
			const triangle = new Triangle();
			triangle.setText('AB').setTextColor('blue').setShapeColor('orange');
			const render = triangle.render();
			expect(render.indexOf('<polygon points="150, 18 244, 182 56, 182" fill="orange" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="blue" style="font-size: 50px" x="100" y="155">AB</text>')).toBeGreaterThanOrEqual(0);
		});

		it('should render a triangle with cyan text and a black triangle with a text of "Hey"', () => {
			const triangle = new Triangle();
			triangle.setText('Hey').setTextColor('cyan').setShapeColor('black');
			const render = triangle.render();
			expect(render.indexOf('<polygon points="150, 18 244, 182 56, 182" fill="black" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="cyan" style="font-size: 50px" x="100" y="155">Hey</text>')).toBeGreaterThanOrEqual(0);
		});
	});

	describe('Class: Square', () => {
		it('should render a square with gold text and a grey square with a text of "HoP"', () => {
			const square = new Square();
			square.setText('HoP').setTextColor('gold').setShapeColor('grey');
			const render = square.render();
			expect(render.indexOf('<rect width="150" height="150" x="65" y="65" fill="grey" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="gold" style="font-size: 50px" x="100" y="155">HoP</text>')).toBeGreaterThanOrEqual(0);
		});
	});

	describe('Class: Circle', () => {
		it('should render a circle with pink text and a maroon circle with a text of "MKO"', () => {
			const circle = new Circle();
			circle.setText('MKO').setTextColor('pink').setShapeColor('maroon');
			const render = circle.render();
			expect(render.indexOf('<circle cx="135" cy="135" r="100" fill="maroon" />')).toBeGreaterThanOrEqual(0);
			expect(render.indexOf('<text fill="pink" style="font-size: 50px" x="95" y="155">MKO</text>')).toBeGreaterThanOrEqual(0);
		});
	});
});
