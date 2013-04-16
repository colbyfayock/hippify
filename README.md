hippify jQuery Plugin
=======
Swap high resolution images on non-mobile high ppi displays

How to Use
=======
- Include hippify.min.js after jQuery
- Include high resolution image with @2x before extention in the same directory
```html
	- img
    -- image.jpg
    -- image@2x.jpg
```
- Add attribute data-hippi="true" to image tag
```html
    <img data-hippi="true" src="image.jpg" />
```