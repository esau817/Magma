// 10 frames, 2 opportunities each
function BowlingGame() {
    let frame = 0,
        myScore = 0,
        myScore2 = 0,
        finalScore = 0;

    //Player throws the ball
    this.roll = function () {
        if (frame == 10)
            throw new Error('Player has played 10 frames already!');

        let tempScore = 0; //Variable for storing player score per frame 

        myScore = Math.floor(Math.random() * 11);
        tempScore += myScore
        console.log("player has scored " + myScore);
        //console.log(myScore);
        if (myScore === 10) {
            this.strike();
            finalScore += myScore;
            console.log('Your final score is: ' + finalScore)
            return;
        }

        myScore2 = Math.floor(Math.random() * (11 - myScore));

        console.log("player has scored " + myScore2);
        
        if (myScore + myScore2 == 10){
            finalScore += myScore + myScore2;
            this.spare();
            return;
        }

        finalScore += myScore + myScore2;

        console.log('Your final score is: ' + finalScore);
        frame++;
        console.log('Frame No. ' + frame);
    }

    //Spare only gets points from next roll
    this.spare = function () {
        console.log('Spare!')
        myScore = Math.floor(Math.random() * 11);
        finalScore += myScore;
        console.log("player has scored " + myScore + " in spare turn");
        console.log('Your final score is: ' + finalScore);
    }
    //If player gets a strike, it'll make a new strike
    this.strike = function () {
        console.log('Strike!')

        myScore = Math.floor(Math.random() * 11);
        console.log("player has scored " + myScore + " in strike turn");
        finalScore += (myScore * 2);
        if (myScore === 10) {
            console.log('You just got another Strike!')
            finalScore += 10;
            return;
        }

        myScore2 = Math.floor(Math.random() * (11 - myScore));
        console.log("player has scored " + myScore2 + " in strike turn");

        frame++;
    }
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


// 2 más, si hace un spare tiró todas, 2 spare maximos
// en strike 1 tiro mas, si hace otro strike ya no se puede hacer mas
// tiro normal son dos bolas 

// 