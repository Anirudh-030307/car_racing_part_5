class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;

    }

    getplayerCount(){
        var toread = database.ref('playerCount');
        toread.on("value",function (data) {
            playerCount = data.val();
        })
    }

    updateplayerCount(Count){
        database.ref('/').update({'playerCount' : Count});
    }

    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name , 
            distance : this.distance 
        })
    }

    static getplayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers=data.val();
        })
    }

}