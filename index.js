function rollthedice(){

/* Player 1 */

var random = Math.floor(Math.random() * 6);
player1_dicenum=random+1

/* alert(randomNumber);  ==> make sure the number is right */


/*
throwdice1.onclick = function() {
    document.getElementsByClassName('img1').setAttribute ('src','images/dice2.png');
}

*/

var image = document.getElementById('img1');
var imagepath="./images/dice" + player1_dicenum + ".png";
image.setAttribute('src', imagepath);



/* Player 1 */


/* Player 2 */
var random2 = Math.floor(Math.random() * 6);
player2_dicenum=random2+1



var image2 = document.getElementById('img2');
var imagepath2="./images/dice" + player2_dicenum + ".png";
image2.setAttribute('src', imagepath2);


if (player1_dicenum>player2_dicenum){
    var list=document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
    list.innerHTML=" &#128681 Player 1 Wins! ";

}

else if(player1_dicenum<player2_dicenum){

    var list=document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
    list.innerHTML="Player 2 Wins! &#128681 ";
}

else{
    var list=document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
    list.innerHTML=" Draw !!!  ";
}


}


    
function refresh(){
    var list=document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
    list.innerHTML=" Roll the dice again ";

    var image = document.getElementById('img1');
    var imagepath="./images/dice-ques.png";
    image.setAttribute('src', imagepath);


    var image2 = document.getElementById('img2');
    var imagepath2="./images/dice-ques.png";
    image2.setAttribute('src', imagepath2); 


}
