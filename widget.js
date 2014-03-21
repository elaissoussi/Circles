WAF.define('Circles', ['waf-core/widget'], function(widget) {
    
    var CirclesWidget = widget.create('Circles', {
        
        /*properties  */
        value: widget.property({type:'number', defaultValue: 0}),
        max: widget.property({type:'number', defaultValue: 100}),
        animationDuration: widget.property({type: 'integer', defaultValue: 400}),
        primaryColor: widget.property({type:'string', defaultValue: '#D3B6C6'}),
        secondaryColor: widget.property({type:'string', defaultValue: '#4B253A'}),
        text: widget.property({type:'string', defaultValue: '%'}),
        
        /*init */
        
        init: function() {
            
            var $node  = $(this.node);
            $node.innerHTML = '';
            
            /*onChange some properties*/
            this.value.onChange(this.render);
            this.primaryColor.onChange(this.render);
            this.secondaryColor.onChange(this.render);
             
             /* onClick on the circle*/
          if (!window.Designer) {
               $node.on('click', function(event) {
               /*
               les maths :
               arc de cercle = angle * rayon ;
               angle ?
               */
                /*  M(x,y)  */
                var x = event.offsetX ;
                var y = event.offsetY ;
                /* rayon fixe*/
                var r = this.radius();
                /* rayon ralative au point M(x,y) sqrt(x1^2 - y1^2)*/
                var R = Math.sqrt(2*r*r+x*x+y*y - 2*r*(x+y));
       
               
                  /* rectagle (X,Y) 2r*r*/

                if((x >= r && x < 2*r) &&  (y >= 0 && y  < r) ){
                    
                    var a  =  Math.asin((x-r) /R) ;
                    var d = (a*50)/(Math.PI);
                    this.value(Math.round(d));                 
                }
             /*  Seconde part of the */   
               else if  ((x >= r && x < 2*r) &&  (y >= r && y < 2*r) ){
                
                    var e  = 0.5*Math.PI  +  Math.asin((y-r) / R) ;
                    var f = (e*50)/(Math.PI);
                    this.value(Math.round(f));

             
                 }
               else if  ((x >= 0 && x < r) &&  (y >= r && y < 2*r) ){
                
                    
                    var e1  = Math.PI  +  Math.asin((r-x) / R) ;
                    var f1 = (e1*50)/(Math.PI);
                    this.value(Math.round(f1));
                 }
               else if  ((x >= 0 && x < r) &&  (y >= 0 && y < r) ){
                
                    var e2  = 1.5*Math.PI  +  Math.asin((r-y) / R) ;
                    var f2 = (e2*50)/(Math.PI);
                    this.value(Math.round(f2));
                 }
                }.bind(this));
            }
            /* fin Onclick*/

           
            /* create the circle */    
            this.render();
            
            
        },        
        /*  create circle*/
        render: function() {
            Circles.create({
                id: this.node.id,
                percentage: this.value() / this.max() * 100,
                number: this.value(),
                text  : this.text(),
                colors: [this.primaryColor(), this.secondaryColor()],
                duration: this.animationDuration()
            });         
        },
        /*  calucl the arc of the color
        
        $node.on('click', function(event) {
                        var ratio = (event.offsetX) / $node.width() * 100;
                        this.value(Math.round(ratio));
                }.bind(this));
        */
        arc : function(){
        
        
        } 
    });

    return CirclesWidget;

});

