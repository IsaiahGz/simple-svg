const { Triangle, Square, Circle, Shape } = require('./shapes');

describe('Shapes lib', () => {
	describe('Class: Shape', () => {
		it('should throw an error when trying to call render()', () => {
			const shape = new Shape();
			expect(shape.render).toThrow(new Error('Shape does not implement render()'));
		});
	});
});
