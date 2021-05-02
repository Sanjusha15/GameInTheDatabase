class Form{
    constructor(){
        
        this.input = createInput("");
        this.button = createButton("Play");
        this.greeting = createElement("h3");

    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    dispaly(){
        var title = createElement("h2");
        title.html("Multiplayer Car Racing");
        title.position(130,0);
        
        
        this.input.position(350,250);
        this.button.position(400,300);
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello" + player.name);
            this.greeting.position(400,200);
        })
    }
}