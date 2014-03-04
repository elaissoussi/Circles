## Custom Widget for [Wakanda](http://wakanda.org)

Created under "Wakanda Studio" . Circles widget is a nice looking widget. 

### Circles Widgets Examples:

![Circles](http://lugolabs.com/static/circles.png)

### Properties
```js
Circles.create({
	id:         'circles-id',
	percentage: 43,
	radius:     50,
	width:      10,
	number:     7.13,
	text:       '%',
	colors:     ['#D3B6C6', '#4B253A'],
	duration: 	400
})
```

where

* `id` 					- the DOM element that will hold the graph
* `percentage` 	- the percentage dictating the smaller circle
* `radius` 			- the radius of the circles
* `width` 			- the width of the ring (optional, has value 10, if not specified)
* `number`			- the number to display at the centre of the graph (optional, the percentage will show if not specified)
* `text` 				- the text to display after the number (optional, nothing will show if not specified)
* `colors` 			- an array of colors, with the first item coloring the full circle (optional, it will be `['#EEE', '#F00']` if not specified)
* `duration` 		- value in ms of animation's duration; defaults to 500; if `null` is passed, the animation will not run.


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.
