//your code here

var compare=function(a,b){
	let str1=a.toLowerCase();
	let str1=b.toLowerCase();
	
	let str1=removearticle(str1);
	let str2=removearticle(str2)

	if(str1>str2)
		return 1;
	else if(str2>str1)
		return -1;
};

function removearticle(str){
	let ans=str.split(" ");
	if(ans.length<1){
		return str;
	}
	if(ans[0]=='a' || ans[0]=='the' || ans[0]=='an'){
		return ans.slice(1).join(" "); 
	}
	return ans;
}

let arr=['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
var sortedarr=arr.sort(compare);





console.log(sortedarr);