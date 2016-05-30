/*!
 * hippify - High PPI image replacement
 * http://colbyfayock.github.io/hippify/
 * Version: 0.5.0
 * @colbyfayock - colbyfayock.com
 */
(function(){

    window.hippify = function() {

        var devicePixelRatio, isHippi, isRelative, get2x, swap, swapData, imgArr;

        devicePixelRatio = window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio;
        isHippi = typeof XMLHttpRequest !== 'undefined' && devicePixelRatio && devicePixelRatio > 1;
        imgArr = Array.prototype.slice.call(document.getElementsByClassName('hippify')) || false;

        isRelative = function(url) {
            return !url.match(/^https?:\/\//i);
        };

        get2x = function(url) {
            return url.indexOf('@2x') === -1 ? url.replace(/(.jpg|.jpeg|.png|.gif|.bmp)/, '@2x$1') : url;
        };

        swap = function(img) {
            
            var img_test = new Image(),
                url = img.getAttribute('data-hippi-src') || img.getAttribute('src');
            
            img.dataset.hippiOrig = img.getAttribute('src');

            if ( isRelative(url) ) url = get2x(url);

            img_test.onload = function() {
                img.src = url;
            };

            img_test.onerror = function() {
                img.src = img.getAttribute('data-hippi-orig');
            }

            img_test.src = url;

        };

        if(isHippi) {
            while(imgArr.length) {
                swap( imgArr.pop() );
            }
        }

    };

    window.onload = function(){
        window.hippify();
    };

})(window);
