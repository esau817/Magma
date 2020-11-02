// 10 frames, 2 opportunities each
function BowlingGame() {
    let frame   = 0, 
    myScore     = 0,  
    pAttempt    = 0,
    finalScore  = 0;

    //Player throws the ball
    this.roll = function () {
        //For loop might be needed to take control of player
        //attempt
        if (pAttempt == 10)
            throw new Error('Player has played 10 frames already!');

        pAttempt++;

        myScore = Math.floor(Math.random() * 11);
        finalScore += myScore;

        console.log("player has scored " + myScore);
        console.log('Atempt number ' + pAttempt);
        console.log('Your final score is: ' + finalScore);

        if (myScore == 10 && pAttempt == 1) {
            this.strike();
            //break;
        }
        if (pAttempt == 2 && myScore == 10) {
            spare = true;
            console.log('Player earned a spare!');
            this.spare();
        }
        else
            frame++;
    }

    this.spare = function () {
        myScore = Math.floor(Math.random() * 11);
        console.log("player has scored " + myScore + " in spare turn");
    }

    this.strike = function () {
        console.log('Strike!')
        frame++;
    }
    //Getter
    Object.defineProperty(this, 'pAttempt', {
        get: function () { return pAttempt; }
    });
}
//const playBowl = new BowlingGame();

//The game consists of 10 frames as shown above. In each frame the player has two 
//opportunities to knock down 10 pins. The score for the frame is the total number 
//of pins knocked down, plus bonuses for strikes and spares.

//A spare is when the player knocks down all 10 pins in two tries. The bonus for 
//that frame is the number of pins knocked down by the next roll. So in frame 3 above, 
//the score is 10 (the total number knocked down) plus a bonus of 5 
//(the number of pins knocked down on the next roll.)

//A strike is when the player knocks down all 10 pins on his first try. The bonus 
//for that frame is the value of the next two balls rolled.

//In the tenth frame a player who rolls a spare or strike is allowed to roll 
//the extra balls to complete the frame. However no more than three balls can be 
//rolled in tenth frame.