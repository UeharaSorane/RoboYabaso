var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// ccb功能   
function ccb(chack,text){
          let temp = Dice(100);
          if (text == null ) {
            if (temp == 100) rply.text = 'ccb<=' + chack  + ' ' + temp + ' → 啊！大失敗！';
	    if (temp == 1) rply.text = 'ccb<=' + chack  + ' ' + temp + ' → 太棒了！大成功！';
            if (temp <= chack) rply.text = 'ccb<=' + chack + ' '  + temp + ' → 成功';
            else rply.text = 'ccb<=' + chack  + ' ' + temp + ' → 失敗' ;
          }
          else
    {
            if (temp == 100) rply.text = 'ccb<=' + chack + ' ' + temp + ' → 啊！大失敗！；' + text;
	    if (temp == 1) rply.text = 'ccb<=' + chack + ' ' + temp + ' → 太棒了！大成功！；' + text;
            if (temp <= chack) rply.text = 'ccb<=' + chack +  ' ' + temp + ' → 成功；' + text;
            else rply.text = 'ccb<=' + chack  + ' ' +  temp + ' → 失敗；' + text;
    }
    
    return rply;
}
////////////////
