function vowel(str){
	var	string ="";
	for(var i=0; i<str.length; i++){
		if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
			continue;
		}
		else{ 
		string += str[i];
		}
	}
	return string;
}
console.log(vowel('programming is fun'));