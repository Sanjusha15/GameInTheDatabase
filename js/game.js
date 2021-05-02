class Game{
    constructor(){}
    getState(){
        var getGameState = database.ref("gameState");
        getGameState.on("value",(data) =>{
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    async start() {
        if(gameState === 0){
            player = new Player();
            var getPlayerCount = await database.ref("playerCount").once("value");
            if(getPlayerCount.exists()){
                playerCount = getPlayerCount.val()
                player.getCount();
            }
            form = new Form();
            form.dispaly();
        }
    }

    play (){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getplayerinfo();
        if(allPlayers !== undefined){
            var display_position = 130;
            for(var allPlayers in plr){
                if(plr === "player" + player.index){
                    fill("red");
                }else{
                    fill("black");
                }
                display_position += 20;
                textSize(15);
                text(allPlayers [plr].name + ":" + allPlayers[plr].distance,120,display_position)
            }
        
        }
        
        if(keyIsDown(UP_ARROW && player.index !== null)){
            player.distance += 50;
            player.update()
        }
    }
}