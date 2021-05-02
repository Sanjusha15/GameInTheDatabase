class Player{
    constructor(){

        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getCount(){
          var getPlayerCount = database.ref("playerCount");
          getPlayerCount.on("value",(data) => {
              playerCount = data.val();
          })

         }
    
     updateCount(count){

         database.ref("/").update({
             playerCount : count

         })
     }
     update(){

         var playerIndex = "players/player" + this.index;
         database.ref(playerIndex).set({
             name : this.name,
             distance : this.distance

         })

     }

     static getplayerinfo(){

        var playerinfo = database.ref("players");
        playerinfo.on("value",(data) => {
          
            allPlayers = data.val()


        })
     }
}