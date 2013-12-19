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
<img class="hippify" src="image.jpg" />
```

If it's relative pathing, this will automatically swap to your @2x image after a test to make sure it exists.

If your file is remote or would prefer to specify your replacement image path, add attribute data-hippi-src="path-to-image/image@2x.jpg" to your image tag

```html
<img class="hippify" src="image.jpg" data-hippi-src="path-to-image/image@2x.jpg" />
```

Uses
-------
[Detect Mobile Browsers] [1]

[1]: http://detectmobilebrowsers.com/ "Detect Mobile Browsers"
