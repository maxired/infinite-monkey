var keyworkds = ['return'];

var symbole='x=){}45';
symbole = symbole.split('');
//symbole.push("Math.abs(");*

/*symbole.push(".length");	
symbole.push("Math.floor(");
symbole.push("Math.cos(");
symbole.push("Math.sin(");
symbole.push("Math.round(");*/
symbole.push("'toto'");
symbole.push("'tatum'");
symbole.push("if(");
symbole.push("else{");	
//symbole.push(".length");
symbole.push("return ");

var bruteIndex=0;

var randomLine="";


var nbSymbole =0;
function BruteIndexToText(index){
	var newNbSymbole = Math.floor( Math.log(index)/Math.log(symbole.length) );
	if(newNbSymbole > nbSymbole){
		nbSymbole = newNbSymbole;
		console.log("starting with", nbSymbole );
	}
	var letters=[];
	
	while(true){	
		letters.push( symbole[ index % symbole.length] );
		if( index > symbole.length){
			index = Math.floor( index / symbole.length) -1;
		}else{
			break;
		}
	}

	return letters.join('');
}

var tests = [ ];
tests.push( ['toto', '4']);
tests.push( ['tatum', '5'])
	
var callTest= function(fct, input){
	var result='';
	result = fct(input)
	return result;
}

var index=0;


while(true){
	var result;
try{

	var fct = new Function("x", BruteIndexToText(index));
	
	if( tests.every(function(toTest){
			return callTest(fct, toTest[0]) == toTest[1];
		}) ){
		console.log("solution found : " , BruteIndexToText(index));
		break;
	}else{
		index++
	}
	}catch (err){		
		index++
 continue;} ;
	
}
