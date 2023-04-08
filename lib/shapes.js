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
		return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
	<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
	<text fill="${this.textColor}" style="font-size: 50px" x="95" y="155">${this.text}</text>
</svg>`;
	}
}

class Square extends Shape {
	constructor() {
		super();
	}

	render() {
		// Render Circle SVG
		return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
	<rect width="150" height="150" x="65" y="65" fill="${this.shapeColor}" />
	<text fill="${this.textColor}" style="font-size: 50px" x="95" y="155">${this.text}</text>
</svg>`;
	}
}

class Circle extends Shape {
	constructor() {
		super();
	}

	render() {
		// Render Circle SVG
		return `<svg height="400" width="400" xmlns="http://www.w3.org/2000/svg">
	<circle cx="135" cy="135" r="100" fill="${this.shapeColor}" />
	<text fill="${this.textColor}" style="font-size: 50px" x="95" y="155">${this.text}</text>
</svg>`;
	}
}

module.exports = {
	Shape,
	Triangle,
	Square,
	Circle,
};
