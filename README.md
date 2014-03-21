## Custom Widget for [Wakanda](http://wakanda.org)

Available under "Wakanda Studio V8 " , circles widget is a nice looking widget.that may be helpful for many purposes, all what you need is  just to include it under "Wakanda Custom Widget". 
### Circles Widgets Examples:


![CirclesWakanda](https://raw.github.com/elaissoussi/Image/master/im.png)

### Properties
```js
value      : widget.property({type:'number', defaultValue: 0})
radius     : widget.property({type:'number', defaultValue: 50})
max        : widget.property({type:'number', defaultValue: 100})
text       : widget.property({type:'string', defaultValue: '%'})
animationDuration: widget.property({type: 'integer', defaultValue: 400})
primaryColor  : widget.property({type:'string', defaultValue: '#D3B6C6'})
secondaryColor: widget.property({type:'string', defaultValue: '#4B253A'})

```

where


* `value` 	- the percentage dictating the smaller circle
* `radius` 			- the radius of the circles
* `max`			- the maximum value of the circle percentage to display. 
* `text` 				- the text to display after the number  specified)
* `[primaryColor,secondaryColor ]` - an array of colors, with the first item coloring the full circle and second color  the clicked part. 
* `duration` 		- value in ms of animation's duration; defaults to 500; if `null` is passed, the animation will not run.


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
