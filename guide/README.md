---
pageClass: custom-page-class
---

# Get-Started

## Introduction

QR-Code-Styling is the JavaScript library for generating QR codes with a logo and custom styling for the DOM.

With this library developing a QR-code generator is as easy as doing this:

```javascript
const qrCode = new QRCodeStyling({
	width: 300,
	height: 300,
	data: 'https://www.facebook.com/',
	image:
		'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
	dotsOptions: {
		color: '#4267b2',
		type: 'rounded'
	},
	backgroundOptions: {
		color: '#e9ebee'
	},
	imageOptions: {
		crossOrigin: 'anonymous',
		margin: 20
	}
})

qrCode.append(document.getElementById('canvas'))
```

Try it [here!](https://qr-code-styling.com)

If you have issues/suggestions/notes/questions, please [open an issue](https://github.com/kozakdenys/qr-code-styling/issues/new) or contact [@kozakdenys](https://github.com/kozakdenys). Let's create a cool library together.

## Installation

There are two ways to use this library on your project:

- With NPM doing:

```
npm install qr-code-styling
```

- With the content delivery network https://unpkg.com/qr-code-styling/lib/qr-code-styling.js like this:

```html
<script
	type="text/javascript"
	src="https://unpkg.com/qr-code-styling/lib/qr-code-styling.js"
></script>
```

If you're willing to use the CDN link to get this library up and running, don't forget to add the script tag inside the head tag.

## QRCodeStyling Object Instance

The QRCodeStyling is the main object of this library; we use its options and methods to generate the QR code.

To use it, you should instance it inside of a _script_ tag or on a _JavaScript_ file and then append it to any element of your _HTML_ file like this:

```javascript
const qrCode = new QRCodeStyling(options)

qrCode.append(document.getElementById('canvas'))
```

::: tip
_Note: The options argument inside the QRCodeStyling Object instance is an object which includes all the options you want to apply in a key/value style._
:::

## Basic Options

To generate a QR code, we must pass some options on the instance of the QRCodeStyling object; the most basic you must provide are:

- width
- height
- data

With those three options, you can already make the most basic form of QR code this library could make.

You can implement it doing:

```javascript
const qrCode = new QRCodeStyling({
	width: 300,
	height: 300,
	data: 'https://qr-code-styling.com'
})
```

Note that you can also add all of the options you need on a variable and pass it as the QRCodeStyling instance argument.

```javascript
const options = {
	width: 300,
	height: 300,
	data: 'https://qr-code-styling.com'
}
const qrCode = new QRCodeStyling(options)
```

## Basic Styling

For the QR code's styling, this library comes with a couple of style options to make your QR code look good.

Some of the options you have are:

- dotsOptions
- cornersSquareOptions
- cornersDotOptions
- image
- backgroundOptions

Let's begin with the _dotsOptions_. This option accepts an object that has three parameters to play with:

- color
- gradient
- type

To use it, inside of the QRCodeStyling object do the following:

```javascript
dotsOptions: {
  type: "classy",
  color: "blue"
}
```

The types you can use with this option are:

- rounded
- dots
- classy
- classy-rounded
- square
- extra-rounded

The _cornersSquareOptions_ is the one used to, as the name implies, style the QR code's corner boxes.

The parameters of this option are the same as the parameters for the _dotsOptions_, whit the difference that the types are:

- dot
- square
- extra-rounded

To implement this, inside of the QRCodeStyling object do the following:

```javascript
cornersSquareOptions: {
	type: 'dot'
}
```

For the _cornersDotOptions_ you have the same parameters as the _dotsOptions_ but as the _cornersSquareOptions_ the types you can use are also different:

- dot
- square

To implement this, do the following inside the QRCodeStyling object:

```javascript
cornersDotOptions: {
	type: 'dots'
}
```

The Image option used to add an image to the center of the QR code; it takes a URL string and uses the image you provided.

If you want to use this, do the following:

```javascript
image: 'https://qr-code-styling.com/0b3922d9d1e466270a79706c08c4a57c.png'
```

The _backgroundOptions_ has two properties to play around with, color and gradient.

To implement it you just need to do the following:

```javascript
backgroundOptions: {
	color: '#6a1a4c'
}
```

:::tip
You can learn more about the rest of the available options by clicking [here!](../options/#object-options)
:::

## Methods

QR-Code-Styling comes with three different Methods:

- append
- update
- download

The Append method it's the principal method on this library, it's job is to append the generated QR code into a DOM element in your page:

```javascript
const qrCode = new QRCodeStyling(options)

qrCode.append(document.getElementById('canvas'))
```

Then we have the Update method. This method takes any of the options available for the QRCodeStyling object and updates the QR code based on the options you specified to update.

Here is an example of the usage of this method:

```javascript
qrCode.update({
	dotsOptions: {
		type: classy,
		color: '#6a1a4c'
	}
})
```

And last but not least, the QR-Code-Styling library comes with a handy Download method which you can set to download the QR code on the following extension types:

- png
- jpeg
- webp

```javascript
qrCode.download('jpeg')
```

You can then wrap this method on a function and call it on a button element on your HTML file.

If you don't set any parameters for this method, PNG will be the default extension type.

:::tip
You can learn more about these methods on the [Methods Page.](../methods/)
:::

## Gradients

If you want to generate more stylized QR codes, qr-code-styling comes with a built-in gradient property, which accepts an object with the offsets and colors you want to apply on your QR code. 

Three options accept the gradient property; those are:

- options.dotsOptions.gradient
- options.cornersSquareOptions.gradient
- options.backgroundOptions.gradient
- options.cornersDotOptions.gradient

The gradient property accepts three different options:

- type
- rotation
- colorStops
An example of this property is the following:

```javascript
dotsOptions: {
	type: "square",
	gradient: {
		type: "linear",
		colorStops: [
			{ offset: 0, color: "#B86598" },
			{ offset: 0.5, color: "#84486D" },
			{ offset: 1, color: "#6A1A4C" }
		]
	}
}
```
As you can see in the example above, colorStops is an Array of objects with two options: offset and color; with those options filled, you will generate a QR code with a gradient style applied to it.

:::tip
[Click here](../options/#gradients) if you want to know more about all the specifications of the Gradient property's options.
:::