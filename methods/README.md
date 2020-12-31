---
pageClass: custom-page-class
---

# Methods

## Append

- QRCodeStyling.append(container) => void

| Param     |    Type     |                                              Description |
| --------- | :---------: | -------------------------------------------------------: |
| container | DOM element | This container will be used for appending of the QR code |

## Update

- QRCodeStyling.update(options) => void

| Param   |  Type  |                            Description |
| ------- | :----: | -------------------------------------: |
| options | object | The same options as for initialization |

## Download

- QRCodeStyling.download(downloadOptions) => void

| Param           |  Type  |                                            Description |
| --------------- | :----: | -----------------------------------------------------: |
| downloadOptions | object | Options with extension and name of file (not required) |

### downloadOptions structure

| Property  |            Type             | Default Value | Description                 |
| --------- | :-------------------------: | ------------: | --------------------------- |
| name      |           string            |          'qr' | Name of the downloaded file |
| extension | tring ('png' 'jpeg' 'webp') |         'png' | File extension              |
