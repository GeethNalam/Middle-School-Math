class Form{

    constructor(){
  this.button1 = createButton("7th Grade")
  this.button1.style('background', 'lightgrey');

  this.button2 = createButton("6th Grade")
  this.button2.style('background', 'lightgrey');
 
  this.button3 = createButton("8th Grade")
  this.button3.style('background', 'lightgrey');

  this.title = createElement('h1');
  
    }

    display(){
        this.title.html("Please Select Your Grade");
        this.title.position(displayWidth/2 -100, 200);

        this.button1.position(displayWidth/2,displayHeight/2);
        this.button2.position(displayWidth/2-100,displayHeight/2);
        this.button3.position(displayWidth/2+100,displayHeight/2);

    }

 
}