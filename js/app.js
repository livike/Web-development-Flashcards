var counter=0;

function showPanel(){                    
var randomQuestion = Math.floor((Math.random() * questions1.length));

$('.question span').html(questions1[randomQuestion]['question']);
$('.answer span').html(questions1[randomQuestion]['answer']);
Spoiler();
};

function showLinear(){
	$('.question span').html(questions1[counter]['question']);
	$('.answer span').html(questions1[counter]['answer']);
	counter +=1;
	Spoiler();

};

function Spoiler(){         
//1, Hide spoiler
$(".answer span").hide();
//2, Add a button
$(".answer").append("<button class='reveal'>Reveal the answer!</button>");
//3, When button pressed
$(".reveal").click(function(){
  //3.1, Show spoiler next to the button clicked
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});
};


$('.random').on('click',function(){showPanel();});
$('.linear').on('click',function(){showLinear();});


