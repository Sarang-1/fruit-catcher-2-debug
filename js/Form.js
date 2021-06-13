class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder","Your Name");
       this.button = createButton('PLAY');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton("RESET");
       
       this.i = createElement("h3");
       this.j = createElement("h3");
       this.k = createElement("h3");
       this.l = createElement("h3");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.i.hide();
        this.j.hide();
        this.k.hide();
        this.l.hide();
    }
    display() {
        this.reset.position(200,20);
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.button.style('font-size','20px');

        this.button.mousePressed(() => {
            player.name = this.input.value();
            if(player.name!=""){
            this.input.hide();
            this.button.hide();
            
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,180);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');

            this.i.html("*Wait for another player to join or duplicate the current tab to join as another player.");
            this.i.position(210,400);
            this.i.style("color","white");
            this.i.style('font-size','25px');

            this.j.html("*Don't press over reset until needed.");
            this.j.position(210,430);
            this.j.style('font-size','25px');
            this.j.style('color','white');

            this.k.html("*Use left and right arrow keys to move.");
            this.k.position(210,460);
            this.k.style('font-size','25px');
            this.k.style('color','white');

            this.l.html("*Collecting the stones will reduce your score.");
            this.l.position(210,490);
            this.l.style('font-size','25px');
            this.l.style('color','white');

        }else{
            this.input.style("border","2px solid red");

            }
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            player.zero();
          });
      
        }
    }
