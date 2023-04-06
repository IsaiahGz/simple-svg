class Shape {
	constructor() {
		this.text = '';
		this.textColor = '';
		this.shapeColor = '';
	}

	setText(text) {
		this.text = text;
		return this;
	}

	setTextColor(textColor) {
		this.textColor = textColor;
		return this;
	}

	setShapeColor(shapeColor) {
		this.shapeColor = shapeColor;
		return this;
	}

	render() {
		throw new Error('Shape does not implement render()');
	}
}

class Triangle extends Shape {
	constructor() {
		super();
	}

	render() {
		// Render Triangle SVG
	}
}

class Square extends Shape {
	constructor() {
		super();
	}

	render() {
		// Render Square SVG
	}
}

class Circle extends Shape {
	constructor() {
		super();
	}

	render() {
		// Render Circle SVG
	}
}
