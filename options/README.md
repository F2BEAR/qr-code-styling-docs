---
pageClass: custom-page-class
---

# Object Options

## Options structure

| Property                |  Type  | Default Value | Description                                           |
| ----------------------- | :----: | ------------: | ----------------------------------------------------- |
| width                   | number |           300 | Size of canvas                                        |
| height                  | number |           300 | Size of canvas                                        |
| data                    | string |          none | The date will be encoded to the QR code               |
| image                   | string |          none | The image will be copied to the center of the QR code |
| qrOptions               | object |          none | Options will be passed to qrcode-generator lib        |
| imageOptions            | object |          none | Specific image options, details see below             |
| dotsOptions             | object |          none | Dots styling options                                  |
| cornersSquareOptions    | object |          none | Square in the corners styling options                 |
| cornersDotOptionsHelper | object |          none | Dots in the corners styling options                   |
| backgroundOptions       | object |          none | QR background styling options                         |

### qrOptions structure

| Property             |                       Type                       | Default Value |
| -------------------- | :----------------------------------------------: | ------------: |
| typeNumber           |                 number (0 - 40)                  |             0 |
| mode                 | string ('Numeric' 'Alphanumeric' 'Byte' 'Kanji') |          none |
| errorCorrectionLevel |             string ('L' 'M' 'Q' 'H')             |           'Q' |

### imageOptions structure

| Property           |                 Type                  | Default Value | Description                                                                    |
| ------------------ | :-----------------------------------: | ------------: | ------------------------------------------------------------------------------ |
| hideBackgroundDots |                boolean                |          true | Hide all dots covered by the image                                             |
| imageSize          |                number                 |           0.4 | Coefficient of the image size. Not recommended to use ove 0.5. Lower is better |
| margin             |                number                 |             0 | Margin of the image in px                                                      |
| crossOrigin        | string('anonymous' 'use-credentials') |          none | Set "anonymous" if you want to download QR code from other origins.            |

### dotsOptions structure

| Property |                                     Type                                     | Default Value | Description         |
| -------- | :--------------------------------------------------------------------------: | ------------: | ------------------- |
| color    |                                    string                                    |        '#000' | Color of QR dots    |
| gradient |                                    object                                    |          none | Gradient of QR dots |
| type     | string ('rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded') |      'square' | Style of QR dots    |

### backgroundOptions structure

| Property |  Type  | Default Value |
| -------- | :----: | ------------: |
| color    | string |        '#fff' |
| gradient | object |          none |

### cornersSquareOptions structure

| Property |                  Type                   |                Description |
| -------- | :-------------------------------------: | -------------------------: |
| color    |                 string                  |    Color of Corners Square |
| gradient |                 object                  | Gradient of Corners Square |
| type     | string ('dot' 'square' 'extra-rounded') |    Style of Corners Square |

### cornersDotOptions structure

| Property |          Type           |             Description |
| -------- | :---------------------: | ----------------------: |
| color    |         string          |    Color of Corners Dot |
| gradient |         object          | Gradient of Corners Dot |
| type     | string ('dot' 'square') |    Style of Corners Dot |

## Gradients

### Gradient structure

- options.dotsOptions.gradient

- options.backgroundOptions.gradient

- options.cornersSquareOptions.gradient

- options.cornersDotOptions.gradient

| Property   |            Type            | Default Value | Description                                                                          |
| ---------- | :------------------------: | ------------: | ------------------------------------------------------------------------------------ |
| type       | string ('linear' 'radial') |      "linear" | Type of gradient spread                                                              |
| rotation   |           number           |             0 | Rotation of gradient in radians (Math.PI === 180 degrees)                            |
| colorStops |      array of objects      |          none | Gradient colors. Example [{ offset: 0, color: 'blue' }, { offset: 1, color: 'red' }] |

### Gradient colorStops structure

- options.dotsOptions.gradient.colorStops[]

- options.backgroundOptions.gradient.colorStops[]

- options.cornersSquareOptions.gradient.colorStops[]

- options.cornersDotOptions.gradient.colorStops[]

| Property |      Type      |                         Description |
| -------- | :------------: | ----------------------------------: |
| offset   | number (0 - 1) | Position of color in gradient range |
| color    |     string     |     Color of stop in gradient range |
