hippify jQuery Plugin
-------

Swap high resolution images on non-mobile high ppi displays

How to Use
-------

Include hippify.min.js after jQuery

```html
<script src="js/hippify.min.js"></script>
```

Include high resolution image with @2x before extention in the same directory

> image.jpg  
> image@2x.jpg

Add attribute data-hippi="true" to image tag

```html
<img data-hippi="true" src="image.jpg" />
```

Uses
-------
[Detect Mobile Browsers] [1]

[1]: http://detectmobilebrowsers.com/ "Detect Mobile Browsers"
