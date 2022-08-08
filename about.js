console.log("hello world");



// function handleSubmit(evt) {
// 	alert("Your submission was successful")	;

    
// 	console.log('form submit');
// }


let form = document.querySelector('#contact');

form.addEventListener('submit', () =>{
	alert("Your submission was successful")
});

let image = document.querySelector('#Kevin');

image.addEventListener('mouseover', ()=>{
	alert("Kevin thinks you're the bees knees!")
})

// Why does this not work?
// const image = document.getElementById('#Kevin')
// const p1= document.getElementById('#p1')

// const setMessage = function(){
// p1.innerText= ("Kevin thinks you're the bees knees!")
// 	p1.style.backgroundColor="light blue";
// }

// image.addEventListener('mouseover', 'setMessage()', true);

// image.addEventListener('mouseleave', function(){
// 	p1.innertext= "'Come back!' - Kevin";
// 	p1.style.backgroundColor='light blue';

// }, true)