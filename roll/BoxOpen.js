var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

function main() {
	let temp = rollbase.Dice(100);
		
	if (temp >= 68) rply.text =  '\恭喜，是普通獎勵。';
	if (temp <=67 && temp >= 39) rply.text = '\恭喜，是中等獎勵。';
	if (temp <=38 && temp >= 16) rply.text = '\喔喔！是高等獎勵欸，恭喜！';
	if (temp <=15) rply.text = '\太棒了！！！是頂級獎勵！恭喜！';
	
	return rply;
	
}


module.exports = {
	main
};
