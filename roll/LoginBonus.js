var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 登入獎勵
function LoginBonus() {
	  let temp = rollbase.Dice(100);
		
	  if (temp >= 80) rply.text =  '\獲得10g...';
	  if (temp <=79 && temp >= 60) rply.text =  '\恭喜獲得50g!';
	  if (temp <=59 && temp >= 30) rply.text =  '\恭喜獲得100g!!';
	  if (temp <=29) rply.text =  '\恭喜獲得200g!!!';
    
    return rply;
    
	}
////////////////

module.exports = {
	LoginBonus
};
