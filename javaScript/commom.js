function common(a, b){
	var result=[];
	for(i=0; i<=a.length; i++){
		for(j=0;j<=b.length; j++){
			if(a[i] === b[j]){
				result.push(a[i]);
			}
		}
	}
	return result;
}
// var a = [1, 2, 3, 4, 5, 6];
// var b = [3, 4, 1, 8, 9, 0];
console.log(common([1,2,3,5],[3,1,6,7]));


