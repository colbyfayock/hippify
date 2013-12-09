hippify
-------

Swap high resolution images on non-mobile high ppi displays

How to Use
-------

Include hippify.min.js before ```</body>```

```html
<script src="js/hippify.min.js"></script>
```

Include high resolution image with @2x before extention in the same directory

```html
images
- image.jpg  
- image@2x.jpg
```

Add class .hippify to image tag

```html
<img class="hippify" data-hippi="true" src="image.jpg" />
```

This automatically will swap to your @2x image.

If you would prefer to specify your replacement image, add attribute data-hippi-src="path-to-image/image@2x.jpg" to image tag

```html
<img class="hippify" src="image.jpg" data-hippi-src="path-to-image/image@2x.jpg" />
```

Uses
-------
[Detect Mobile Browsers] [1]

[1]: http://detectmobilebrowsers.com/ "Detect Mobile Browsers"
