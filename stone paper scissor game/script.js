function rpsGame(yourChoice)
{
    var humanChoice = yourChoice.id;
    var botChoice = numberToChoice(randNumber());
    var result = decideWinner(humanChoice,botChoice);// 1->humanWin , 0.5->tied , 0->lost 
    var message = findMessage(result);// return message and color of it
    rpsFront(humanChoice,botChoice,message);
}

function randNumber()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(n)
{
    return ['rock','paper','scissor'][n];
}

function decideWinner(yourChoice,computerChoice)
{
   var rpsDatabase={
       'rock': {'scissor':1,'rock':0.5,'paper':0},
       'paper': {'rock':1,'paper':0.5,'scissor':0},
       'scissor': {'paper':1,'scissor':0.5,'rock':0},
   };

   return rpsDatabase[yourChoice][computerChoice];
}

function findMessage(result)
{
    if(result===0)
    return {'message':'You Lost!','color':'red'};
    else if(result===0.5)
    return {'message':'You Tied!','color':'yellow'};
    else
    return {'message':'You Won!','color':'green'};
}

function rpsFront(humanImageChoice,botImageChoice,finalMessage)
{
    var imageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
    };

    //remove all the 3 image
    document.getElementById('choose').remove();
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    humanDiv.setAttribute('id','human');
    var botDiv = document.createElement('div');
    botDiv.setAttribute('id','computer');
    var messageDiv = document.createElement('div');
    
   humanDiv.innerHTML =  "<img src='"+imageDatabase[humanImageChoice]+"' style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
   messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+"; font-size:60px;'>"+finalMessage['message']+"</h1>";
   botDiv.innerHTML =  "<img src='"+imageDatabase[botImageChoice]+"' style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

   document.getElementById('answer').appendChild(humanDiv);
   document.getElementById('answer').appendChild(messageDiv);
   document.getElementById('answer').appendChild(botDiv);

   let text1 = document.createTextNode("your's Choise");
    humanDiv.appendChild(text1);
    let text2 = document.createTextNode("Computer's Choise");
    botDiv.appendChild(text2);

    var btn = document.createElement('a');
    btn.setAttribute('id','butn');
    btn.setAttribute('href',"http://127.0.0.1:5500/index.html");
    btn.innerText = "Play Again";
    document.getElementById('reset').appendChild(btn);
}
