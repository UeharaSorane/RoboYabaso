var express = require('express');
var bodyParser = require('body-parser');
var https = require('https');  
var app = express();

var jsonParser = bodyParser.json();

var options = {
  host: 'api.line.me',
  port: 443,
  path: '/v2/bot/message/reply',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
   'Authorization': 'Bearer lYdwsRWARZdugT38hv++gKdZ6EehgBUzEGUXTamr0VdLbB4bo7+peHbcD7P0ej/VwQk60J1yNoCZCEVuX7/UAkaIyOKKmMJ8rurN7qfSw7kE36draUEhu92NLxFForyyjWveCa8CS97/nWZzLgLCbAdB04t89/1O/w1cDnyilFU='
  }
}
app.set('port', (process.env.PORT || 5000));

// views is directory for all template files

app.get('/', function(req, res) {
//  res.send(parseInput(req.query.input));
  res.send('看來系統沒有出錯呢...(攤');
});

app.post('/', jsonParser, function(req, res) {
  let event = req.body.events[0];
  let type = event.type;
  let msgType = event.message.type;
  let msg = event.message.text;
  let rplyToken = event.replyToken;

  let rplyVal = null;
  //console.log(msg);
  if (type == 'message' && msgType == 'text') {
    try {
      rplyVal = parseInput(rplyToken, msg); 
    } 
    catch(e) {
      console.log('catch error');
    }
  }

  if (rplyVal) {
    replyMsgToLine(rplyToken, rplyVal); 
  } else {
  //  console.log('Do not trigger'); 
  }

  res.send('ok');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function replyMsgToLine(rplyToken, rplyVal) {
	let rplyObj = {
    replyToken: rplyToken,
    messages: [
      {
        type: "text",
        text: rplyVal
      }
    ]
  }

  let rplyJson = JSON.stringify(rplyObj); 
  
  var request = https.request(options, function(response) {
    console.log('Status: ' + response.statusCode);
    console.log('Headers: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');
    response.on('data', function(body) {
    //  console.log(body); 
    });
  });
  request.on('error', function(e) {
    console.log('Request error: ' + e.message);
  })
  request.end(rplyJson);
}

////////////////////////////////////////
//////////////// 分析開始
////////////////////////////////////////
function parseInput(rplyToken, inputStr) {
          
	//	console.log('InputStr: ' + inputStr);
	_isNaN = function(obj) {
		return isNaN(parseInt(obj));
        }
		
        let msgSplitor = (/\S+/ig);	
	let mainMsg = inputStr.match(msgSplitor); //定義輸入字串
	let trigger = mainMsg[0].toString().toLowerCase(); //指定啟動詞在第一個詞&把大階強制轉成細階
	
	////////////////////////////情報相關
	
	
	////////////////////////////戰鬥相關
	//ccb指令
	if (trigger.match(/^ccb$/)!= null && mainMsg[1]<=1000 ){
		if (trigger == 'ccb'&& mainMsg[1]<=99) return ccb(mainMsg[1],mainMsg[2]);
        }
	//xBy>A 指令開始於此
	if (trigger.match(/^(\d+)(b)(\d+)$/i)!= null)
	{        
		return xBy(trigger,mainMsg[1],mainMsg[2]);
	}
	//xUy 指令開始於此	
	if (trigger.match(/^(\d+)(u)(\d+)$/i)!= null && isNaN(mainMsg[1])== false)
	{        
		return xUy(trigger,mainMsg[1],mainMsg[2],mainMsg[3]);
	}
	
	        //普通ROLL擲骰判定在此        
        if (inputStr.match(/\w/)!=null && inputStr.toLowerCase().match(/\d+d+\d/)!=null) {
          return nomalDiceRoller(inputStr,mainMsg[0],mainMsg[1],mainMsg[2]);
        }
	
	////////////////////////////服務相關
	if (trigger.match(/^寶箱$|^開寶箱$/) != null) return BoxOpen() ;//寶箱狩獵指令
	if (trigger.match(/^help$|^幫助$/)!= null ) return Help();//幫助頁面
	if (trigger.match(/^招募$/) != null) return gacha(mainMsg[1],mainMsg[2]);	//角色招募指令
	
	////////////////////////////娛樂相關
        if (trigger.match(/空音/) != null) return randomReply() ;//空音閒談指令
	if (trigger.match(/空空/) != null) return randomReplyShin() ;//空音閒談指令(裏)
	if (trigger.match(/運氣|運勢/) != null) return randomLuck(mainMsg) ; //占卜運氣        
        if (trigger.match(/flag/) != null) return BStyleFlagSCRIPTS() ;//插旗用指令
	//塔羅牌
	if (trigger.match(/tarot|塔羅牌|塔羅/) != null) {
			if (trigger.match(/每日|daily/)!= null) {
				return NomalDrawTarot(mainMsg[1], mainMsg[2]);
			}
			if (trigger.match(/時間|time/)!= null) {
				return MultiDrawTarot(mainMsg[1], mainMsg[2], 1);
			}
			if (trigger.match(/大十字|cross/)!= null) {
				return MultiDrawTarot(mainMsg[1], mainMsg[2], 2);
			}
			return MultiDrawTarot(mainMsg[1], mainMsg[2], 3); //預設抽 79 張
	}
	//猜拳
	if (trigger.match(/猜拳/) != null) {
			return RockPaperScissors(inputStr, mainMsg[1]);
		}


}
////////////////////////////////////////
//////////////// 骰組開始
////////////////////////////////////////      

//////////////// ccb功能   
function ccb(chack,text){
          let temp = Dice(100);
          if (text == null ) {
            if (temp == 100) return 'ccb<=' + chack  + ' ' + temp + ' → 啊！大失敗！';
            if (temp <= chack) return 'ccb<=' + chack + ' '  + temp + ' → 成功';
            else return 'ccb<=' + chack  + ' ' + temp + ' → 失敗' ;
          }
          else
    {
            if (temp == 100) return 'ccb<=' + chack + ' ' + temp + ' → 啊！大失敗！；' + text;
            if (temp <= chack) return 'ccb<=' + chack +  ' ' + temp + ' → 成功；' + text;
            else return 'ccb<=' + chack  + ' ' +  temp + ' → 失敗；' + text;
    }
}
////////////////
        
function ArrMax (Arr){
  var max = this[0];
  this.forEach (function(ele,index,arr){
    if(ele > max) {
      max = ele;
    }
  })
  return max;
}

//////////////// 普通ROLL
 function nomalDiceRoller(inputStr,text0,text1,text2){
  
  //首先判斷是否是誤啟動（檢查是否有符合骰子格式）
 // if (inputStr.toLowerCase().match(/\d+d\d+/) == null) return undefined;
  
  //再來先把第一個分段拆出來，待會判斷是否是複數擲骰
  let mutiOrNot = text0.toLowerCase();
  
  //排除小數點
  if (mutiOrNot.toString().match(/\./)!=null)return undefined;

  //先定義要輸出的Str
  let finalStr = '' ;  
  
  
  //是複數擲骰喔
  if(mutiOrNot.toString().match(/\D/)==null ) {
	  if(text2 != null){
	  finalStr= text0 + '次擲骰：\n' + text1 +' ' + text2 + '\n';
    	  }
		  else{
		  finalStr= text0 + '次擲骰：\n' + text1 +'\n';
    		  }
    if(mutiOrNot>30) return '不支援30次以上的複數擲骰。';
    
    for (i=1 ; i<=mutiOrNot ;i++){
    let DiceToRoll = text1.toLowerCase();
    if (DiceToRoll.match('d') == null) return undefined;

    //寫出算式
    let equation = DiceToRoll;
    while(equation.match(/\d+d\d+/)!=null) {
      let tempMatch = equation.match(/\d+d\d+/);
      equation = equation.replace(/\d+d\d+/, RollDice(tempMatch));
    }

    //計算算式
    let aaa = equation;
	aaa = aaa.replace(/\d+[[]/ig, '(' );
	aaa = aaa.replace(/]/ig, ')' );
	//aaa = aaa.replace(/[[]\d+|]/ig, "");
	let answer = eval(aaa.toString());
	
    finalStr = finalStr + i + '# ' + equation + ' = ' + answer + '\n';
    }
        
  }
  
  else
  {
  //一般單次擲骰
  let DiceToRoll = mutiOrNot.toString().toLowerCase();
  DiceToRoll = DiceToRoll.toLowerCase();
  if (DiceToRoll.match('d') == null) return undefined;
  
  //寫出算式
  let equation = DiceToRoll;
  while(equation.match(/\d+d\d+/)!=null) {
	let totally = 0;
    let tempMatch = equation.match(/\d+d\d+/);    
    if (tempMatch.toString().split('d')[0]>300) return undefined;
    if (tempMatch.toString().split('d')[1]==1 || tempMatch.toString().split('d')[1]>1000000) return undefined;
    equation = equation.replace(/\d+d\d+/, RollDice(tempMatch));
	
  }
  
  //計算算式
	let aaa = equation;
	aaa = aaa.replace(/\d+[[]/ig, '(' );
	aaa = aaa.replace(/]/ig, ')' );
	let answer = eval(aaa.toString());
      
  if(text1 != null){
	  finalStr= text0 + '：' + text1 + '\n' + equation + ' = ' + answer;
    	  }
		  else{
		  finalStr= text0 + '：\n' + equation + ' = ' + answer;
    		  }

  }
  
  return finalStr;


}
////////////////

//////////////// 擲骰子運算
function sortNumber(a,b)
{
return a - b
}
////////////////

//////////////// 取隨機值專用
function Dice(diceSided){
	return Math.floor((Math.random() * diceSided) + 1)
}
////////////////
		
	function RollDice(inputStr){
  //先把inputStr變成字串（不知道為什麼非這樣不可）
  let comStr=inputStr.toString();
  let finalStr = '[';
  let temp = 0;
  var totally = 0;
  for (let i = 1; i <= comStr.split('d')[0]; i++) {
	temp = Dice(comStr.split('d')[1]);
	totally +=temp;
    finalStr = finalStr + temp + '+';
     }

  finalStr = finalStr.substring(0, finalStr.length - 1) + ']';
  finalStr = finalStr.replace('[', totally +'[');
  return finalStr;
}

function FunnyDice(diceSided) {
	return Math.floor((Math.random() * diceSided)) //猜拳，從0開始
}

function BuildDiceCal(inputStr){
  
  //首先判斷是否是誤啟動（檢查是否有符合骰子格式）
  if (inputStr.toLowerCase().match(/\d+d\d+/) == null) return undefined;
    
  //排除小數點
  if (inputStr.toString().match(/\./)!=null)return undefined;

  //先定義要輸出的Str
  let finalStr = '' ;  
  
  //一般單次擲骰
  let DiceToRoll = inputStr.toString().toLowerCase();  
  if (DiceToRoll.match('d') == null) return undefined;
  
  //寫出算式
  let equation = DiceToRoll;
  while(equation.match(/\d+d\d+/)!=null) {
    let tempMatch = equation.match(/\d+d\d+/);    
    if (tempMatch.toString().split('d')[0]>200) return '欸欸，不支援200D以上擲骰；哪個時候會骰到兩百次以上？想被淨灘嗎？';
    if (tempMatch.toString().split('d')[1]==1 || tempMatch.toString().split('d')[1]>500) return '不支援D1和超過D500的擲骰；想被淨灘嗎？';
    equation = equation.replace(/\d+d\d+/, BuildRollDice(tempMatch));
  }
  
  //計算算式
  let answer = eval(equation.toString());
    finalStr= equation + ' = ' + answer;
  
  return finalStr;

}        

function BuildRollDice(inputStr){
  //先把inputStr變成字串（不知道為什麼非這樣不可）
  let comStr=inputStr.toString().toLowerCase();
  let finalStr = '(';

  for (let i = 1; i <= comStr.split('d')[0]; i++) {
    finalStr = finalStr + Dice(comStr.split('d')[1]) + '+';
     }

  finalStr = finalStr.substring(0, finalStr.length - 1) + ')';
  return finalStr;
}


////////////////////////////////////////
//////////////// xBy
////////////////////////////////////////
function xBy(triggermsg ,text01, text02) {

let returnStr = '(' + triggermsg +')';
let match = /^(\d+)(B)(\d+)$/i.exec(triggermsg);  //判斷式  [0]3B8,[1]3,[2]B,[3]8
let varcou =  new Array();
let varsu = 0;
for (var i = 0; i < Number(match[1]); i++)	
	{
             varcou[i] =  Dice(match[3]);
	}
varcou.sort(sortNumber);
//(5B7>6) → 7,5,6,4,4 → 成功数1

if(isNaN(text01) ==false &&Number(text01) <= Number(match[3]))
{
for (let i = 0; i < Number(match[1]); i++)	
	{
             if(Number(varcou[i])>=Number(text01)) varsu++;        
	}
	if (text02 ==undefined) text02 ='';

    returnStr+= ' → ' + varcou + ' → 成功數'+varsu + ' ' +text02 ;
	
}
else{
	if (text01 ==undefined) text01 ='';
	returnStr+=  ' → ' + varcou + ' ' +text01 ;

	}
	

return returnStr;
}

////////////////////////////////////////
//////////////// xUy
////////////////  (5U10[8]) → 17[10,7],4,5,7,4 → 17/37(最大/合計)
////////////////  (5U10[8]>8) → 1,30[9,8,8,5],1,3,4 → 成功数1
////////////////////////////////////////

function xUy(triggermsg ,text01, text02, text03) {
	var match = /^(\d+)(u)(\d+)/i.exec(triggermsg);   //判斷式  5u19,5,u,19, 
	var returnStr = '('+triggermsg+'['+text01+']';
	if(Number(text02) <= Number(match[3]) && text02 != undefined) 
	{
		returnStr+= '>'+text02+ ') → ';
		if(text03!=undefined) returnStr += text03 +' → ';
	}
	else{
	returnStr+= ') → ';
		if(text02!=undefined) returnStr += text02 +' → ';	
	}	
	let varcou =  new Array();
	let varcouloop =  new Array();
	let varcoufanl =  new Array();
	let varcounew =  new Array();
	var varsu = 0;
	if (text01<=2) { return  '加骰最少比2高'; }

for (var i = 0; i < Number(match[1]); i++)	
	{
			varcou[i] =  Dice(match[3]);
			varcounew[i] = varcou[i];
			varcouloop[i] = varcounew[i];
			for(;varcounew[i]>=text01;)
			{
				varcounew[i] =Dice(match[3]);
				varcouloop[i] += ', ' +varcounew[i];
				varcou[i] += varcounew[i];
			}

	}

    for(var i = 0; i < varcouloop.length; i++)	
  {
	if(varcouloop[i]==varcou[i])   {returnStr += varcou[i]+', ';}
    else     returnStr += varcou[i]+'['+varcouloop[i]+ '], '; 
    
  }
		returnStr = returnStr.replace(/, $/ig,'');
 
 
 
 if(Number(text02) <= Number(match[3]) ){
let suc =0;

////////////////  (5U10[8]>8) → 1,30[9,8,8,5],1,3,4 → 成功数1
for(var i=0;i<varcou.length;i++)
{
if(Number(varcou[i])>=Number(text02)) suc++;
}

returnStr  += ' → 成功数' +suc;

 }
 else
  ////////////////  (5U10[8]) → 17[10,7],4,5,7,4 → 17/37(最大/合計)

	 {
 returnStr  +=' → ' + Math.max.apply(null, varcou)
returnStr  += '/' + varcou.reduce(function(previousValue,currentValue){
        return previousValue + currentValue;} ) +'(最大/合計)';

	}
	return returnStr;
	
	}



////////////////////////////////////////
//////////////// 占卜&其他
////////////////////////////////////////

//////////////// 插旗
	function BStyleFlagSCRIPTS() {
		let rplyArr = ['\
		「打完這仗我就回老家結婚（この戦いが終わったら、故郷に帰って結婚するんだ）」', '\
		「打完這一仗後我請你喝酒」', '\
		「你、你要錢嗎！要什麼我都能給你！/我可以給你更多的錢！」', '\
		「做完這次任務，我就要結婚了。」', '\
		「幹完這一票我就金盆洗手了。」', '\
		「好想再XXX啊……」', '\
		「已經沒什麼好害怕的了（もう何も恐くない）」', '\
		「我一定會回來的（必ず帰る！）」', '\
		「差不多該走了」', '\
		「我只是希望你永遠不要忘記我。」', '\
		「我只是希望能永遠和你在一起。」', '\
		「啊啊…為什麼會在這種時候、想起了那些無聊的事呢？」', '\
		「能遇見你真是太好了。」', '\
		「我終於…為你們報仇了！」', '\
		「等到一切結束後，我有些話想跟妳說！」', '\
		「這段時間我過的很開心啊。」', '\
		把自己的寶物借給其他人，然後說「待一切結束後記得還給我。」', '\
		「真希望這份幸福可以永遠持續下去。」', '\
		「我們三個人要永永遠遠在一起！」', '\
		「這是我女兒的照片，很可愛吧？」', '\
		「請告訴他/她，我永遠愛他/她」', '\
		「聽好，在我回來之前絕不要亂走動哦（いいか、俺が帰ってくるまでここを動くんじゃないぞ）」', '\
		「要像一個乖孩子一樣等著我回來」', '\
		「我去去就來（先に行って、すぐ戻るから）」', '\
		「快逃！(逃げろう！/早く逃げろう！)」', '\
		「對方只有一個人，大家一起上啊」', '\
		「我就不信，這麼多人還殺不了他一個！」', '\
		「幹，幹掉了嗎？（やったのか？）」', '\
		「身體好輕」', '\
		「可惡！你給我看著！（逃跑）」', '\
		「躲在這裡就應該不會被發現了吧。」', '\
		「我不會讓任何人死的。」', '\
		「可惡！原來是這麼回事！」', '\
		「跑這麼遠應該就行了。」', '\
		「我已經甚麼都不怕了（もう何も恐くない）」', '\
		「這XXX是什麼，怎麼之前沒見過（なんだこのXXX、見たことないな）」', '\
		「什麽聲音……？就去看一下吧（:「何の音だ？ちょっと見てくる」', '\
		「是我的錯覺嗎？/果然是錯覺/錯覺吧/可能是我（看/聽）錯了」', '\
		「二十年後又是一條好漢！」', '\
		「大人/將軍武運昌隆」', '\
		「這次工作的報酬是以前無法比較的（:「今度の仕事でまとまったカネが入るんだ」', '\）」', '\
		「我才不要和罪犯呆在一起，我回自己的房間去了！（この中に殺人者がいるかもしれないのに、一緒に居られるか!俺は自分の部屋に戻るぞ!）」', '\
		「其實我知道事情的真相…（各種廢話）…犯人就是……」', '\
		「我已經天下無敵了~~」', '\
		「大人！這邊就交給小的吧，請快離開這邊吧」', '\
		「XX，這就是我們流派的最終奧義。這一招我只會演示一次，你看好了！」', '\
		「誰敢殺我？」', '\
		「從來沒有人能越過我的劍圍。」', '\
		「就算殺死也沒問題吧？」', '\
		「看我塔下強殺！」', '\
		「騙人的吧，我們不是朋友嗎？」', '\
		「我老爸是....你有種就....」', '\
		「我可以好好利用這件事」'];
		return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
////////////////

//////////////// 空音閒談
        function randomReply() {
        	let rplyArr = [
		  
		 	'\有什麼事嗎？', 
		 	'\如果沒有需要，我回去打街機喔。', 
		  	'\嗯....(專心打太鼓達人中)', 
		  	'\如果有不會的指令的話，輸入help吧！',
		  	'\Wryyyyyyyyyyyyyyyyyy!!!!!(DIO臉)。',
		  	'\攤',
		  	'\儘管我只是一個bot，也是有遊戲要玩的。',
		  	'\想要確認自己的手氣的話，試試輸入"運氣"如何？',
		  	'\不知道這裡有沒有單手接幽玄之亂的人呢？',
		  	'\除了音樂街機外，我也蠻喜歡玩甲蟲王者的...',
		  	'\我是擔當bot而不是教機率學的，如果妳臉黑，我只會叫你儲值(被巴。',
		  	'\痾...不予置評。',
			'\！',
		  	'\剛認識就直接叫名子，感覺好像有點奇怪？',
		  	'\我的喜好嗎...？當然是音樂遊戲啊！',
		  	'\我的製作人，施彥任內心有點脆弱，拜托沒事不要傷他的心喔。',
		  	'\比起一直找我聊天，不如試著找其他事做吧。',
		  	'\我最喜歡的角色嗎...？應該是露吧。不論何時都很可愛',
		  	'\稍微...讓我休息一下吧(攤'];
        	return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
////////////////

//////////////// 空音閒談(裏)
        function randomReplyShin() {
        	let rplyArr = [
		  
		 	'\在抽獎之前，先把火力燒成灰吧', 
		 	'\FYK=Fuck You Komnami', 
		  	'\NicoNico=垃圾', 
		  	'\海外太鼓沒廣場',
		  	'\海外maimia沒人權曲',
		  	'\海外GC沒日文語音',
		  	'\我不當一般的Bot了!JOJO!!!!!',
		  	'\你什麼時候產生了你有妹妹的錯覺？',
		  	'\乖，帽子戴正，都歪了',
		  	'\私',
		  	'\幫我撐十秒',
		  	'\整天妄想稱呼我暱稱？真是有夠噁心的'];
        	return rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
////////////////

//////////////// 寶箱狩獵
	function BoxOpen() {
	  let temp = Dice(100);
		
	  if (temp >= 68) return '\恭喜，是普通獎勵。';
	  if (temp <=67 && temp >= 39) return '\恭喜，是中等獎勵。';
	  if (temp <=38 && temp >= 16) return '\喔喔！是高等獎勵诶，恭喜！';
	  if (temp <=15) return '\太棒了！！！是頂級獎勵！恭喜！';
	}
////////////////

//////////////// 角色招募
	function gacha(DrawPool,GachaTimes) {
		
		///基本變數
		let GachaResult = ['\n','\n','\n','\n','\n','\n','\n','\n','\n','\n','\n'];
		let CharacterList = [];
 
		var times = 0;
		var characterChance = 0;
		///
		
		///確定抽獎狀態
		if(DrawPool == 1){
			let Character = ['義熊','克雷特','尤克特','路卡','露'];
			CharacterList.length = Character.length;
			CharacterList = Character;
			
			var NumberOfCharacter = 5;
			if(GachaTimes =='單抽'){
				times = 1;
				characterChance = 20;
			}
			if(GachaTimes =='十連加一'){
				times = 10;
				characterChance = 10;
				GachaResult[10] = '\[保底]夥伴:' + CharacterList[Math.floor((Math.random() * (CharacterList.length)) + 0)];
			}
			var CharacterShard = 10; 
		}else{
			
			return '\【招募目錄】目前的招募一覽表 \
				\n  0 【新手招募(首抽)】 \
				\n  1 【通常奇蹟石招募】 \
				\n  2 【特殊招募-「事前登錄卷限定招募」】 \
				\n 如果想看詳細招募內容，請輸入 招募 招募編號 \
				';
			
		}
		
		///
		
		///抽獎
		for(var i=0; i<times;i++){
			let temp = Dice(100);
			let Shard = Dice(CharacterShard);
			if (temp > characterChance) GachaResult[i] = '\夥伴碎片X' +  Shard + '片\n';
			if (temp <= characterChance) GachaResult[i] = '\夥伴:' +  CharacterList[Math.floor((Math.random() * (CharacterList.length)) + 0)] + '\n';
		}
		///
		let GResult ='招募結果:\n'
		for(i = 0;i<11;i++){
			GResult = GResult + GachaResult[i];
		}
		
		
		return GResult;
	}
////////////////
		
		
		
       function randomLuck(TEXT) {
           let rplyArr = ['超吉','超級上吉','大吉','吉','中吉','小吉','吉','小吉','吉','吉','中吉','吉','中吉','吉','中吉','小吉','末吉','吉','中吉','小吉','末吉','中吉','小吉','小吉','吉','小吉','末吉','中吉','小吉','凶','小凶','沒凶','大凶','很凶'];
           return TEXT[0] + ' ： ' + rplyArr[Math.floor((Math.random() * (rplyArr.length)) + 0)];
        }
		
		
////////////////////////////////////////
//////////////// Funny
////////////////////////////////////////
/* 猜拳功能 */
	function RockPaperScissors(HandToCal, text) {
	let returnStr = '';
	if (HandToCal.match(/石頭|布|剪刀|1|2|3/) != null) {
		let aHand = ['石頭','布','剪刀'];
           HandToCal = aHand[Math.floor((Math.random() * (aHand.length)) + 0)];
	}
	var hand = FunnyDice(3); // 0:石頭 1:布 2:剪刀

	switch (hand) {
		case 0: //石頭
			returnStr = '我出石頭！\n';

			if (HandToCal.match(/剪刀|1/) != null) returnStr += '哼哼你輸惹';
			else if (HandToCal.match(/石頭|2/) != null) returnStr += '看來我們不相上下阿';
			else if (HandToCal.match(/布|3/) != null) returnStr += '你好像有點強！';
			else returnStr += '欸不對喔你亂出！';

			break;

		case 1: //布
			returnStr = '我出布！\n';

			if (HandToCal.match(/剪刀|1/) != null) returnStr += '讓你一次而已啦！';
			else if (HandToCal.match(/布|2/) != null) returnStr += '原來平手...沒什麼嘛！';
			else if (HandToCal.match(/石頭|3/) != null) returnStr += '哈哈你看看你！';
			else returnStr += '別亂出阿會壞掉的';

			break;

		case 2: //剪刀
			returnStr = '我出剪刀！\n';

			if (HandToCal.match(/剪刀|1/) != null) returnStr += '平手 (  艸)';
			else if (HandToCal.match(/布|2/) != null) returnStr += '贏了 (｀・ω・´)b';
			else if (HandToCal.match(/石頭|3/) != null) returnStr += '輸惹 ゜。。゜(ノД‵)ノ・゜';
			else returnStr += '亂出打你喔 (｀・ω・´)凸';

			break;

		default:
			returnStr = '我出的是...欸不對你沒出喔！\n';
			break;
	}

	return returnStr;
}



////////////////////////////////////////
//////////////// Tarot塔羅牌
////////////////////////////////////////
function MultiDrawTarot(CardToCal, text, type) {
	let returnStr = '';
	var tmpcard = 0;
	var cards = [];
	var revs = [];
	var i = 0;

	if (type == 1) //時間之流
	{
		cards[0] = FunnyDice(79); //先抽第0張
		revs[0] = FunnyDice(2);

		for (i = 1; i < 3; i++) {
			for (;;) {
				tmpcard = FunnyDice(79);
				if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
				{
					cards.push(tmpcard);
					revs[i] = FunnyDice(2);
					break;
				}
			}
		}

		if (text != null)
			returnStr += text + ': \n';

		for (i = 0; i < 3; i++) {
			if (i == 0) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 1) returnStr += '現在: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 2) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);
		}

	} else if (type == 2) //塞爾特大十字
	{
		cards[0] = FunnyDice(79); //先抽第0張
		revs[0] = FunnyDice(2);

		for (i = 1; i < 10; i++) {
			for (;;) {
				tmpcard = FunnyDice(79);
				if (cards.indexOf(tmpcard) === -1) //沒有重複，就這張了
				{
					cards.push(tmpcard);
					revs[i] = FunnyDice(2);
					break;
				}
			}
		}

		if (text != null)
			returnStr += text + ': \n';

		for (i = 0; i < 10; i++) {
			if (i == 0) returnStr += '現況: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 1) {
				if (revs[i] == 0) //正位
					returnStr += '助力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
				else
					returnStr += '阻力: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			}
			if (i == 2) returnStr += '目標: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 3) returnStr += '基礎: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 4) returnStr += '過去: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 5) returnStr += '未來: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 6) returnStr += '自我: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 7) returnStr += '環境: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			if (i == 8) {
				if (revs[i] == 0) //正位
					returnStr += '希望: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
				else
					returnStr += '恐懼: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]) + '\n';
			}
			if (i == 9) returnStr += '結論: ' + tarotCardReply(cards[i]) + ' ' + tarotRevReply(revs[i]);

		}

	} else {

		if (text == null)
			returnStr = tarotCardReply(FunnyDice(79)) + ' ' + tarotRevReply(FunnyDice(2));
		else
			returnStr = tarotCardReply(FunnyDice(79)) + ' ' + tarotRevReply(FunnyDice(2)) + ' ; ' + text;
	}


	return returnStr;
}

function NomalDrawTarot(CardToCal, text) {
	let returnStr = '';

	if (text == null)
		returnStr = tarotCardReply(FunnyDice(22)) + ' ' + tarotRevReply(FunnyDice(2));
	else
		returnStr = tarotCardReply(FunnyDice(22)) + ' ' + tarotRevReply(FunnyDice(2)) + ' ; ' + text;
	return returnStr;
}


function tarotRevReply(count) {
	let returnStr = '';

	if (count == 0) returnStr = '＋';
	if (count == 1) returnStr = '－';

	return returnStr;
}

function choice(input,str) {
	let a = input.replace(str[0], '').match(/\S+/ig);
	return str[0] + '['+ a + '] → ' + a[Dice(a.length)-1];
}

function tarotCardReply(count) {
	let returnStr = '';
	// returnStr = count + '愚者';
	if (count == 0) returnStr = '愚者';
	if (count == 1) returnStr = '魔術師';
	if (count == 2) returnStr = '女祭司';
	if (count == 3) returnStr = '女皇';
	if (count == 4) returnStr = '皇帝';
	if (count == 5) returnStr = '教皇';
	if (count == 6) returnStr = '戀人';
	if (count == 7) returnStr = '戰車';
	if (count == 8) returnStr = '力量';
	if (count == 9) returnStr = '隱者';
	if (count == 10) returnStr = '命運之輪';
	if (count == 11) returnStr = '正義';
	if (count == 12) returnStr = '吊人';
	if (count == 13) returnStr = '死神';
	if (count == 14) returnStr = '節制';
	if (count == 15) returnStr = '惡魔';
	if (count == 16) returnStr = '高塔';
	if (count == 17) returnStr = '星星';
	if (count == 18) returnStr = '月亮';
	if (count == 19) returnStr = '太陽';
	if (count == 20) returnStr = '審判';
	if (count == 21) returnStr = '世界';
	if (count == 22) returnStr = '權杖一';
	if (count == 23) returnStr = '權杖二';
	if (count == 24) returnStr = '權杖三';
	if (count == 25) returnStr = '權杖四';
	if (count == 26) returnStr = '權杖五';
	if (count == 27) returnStr = '權杖六';
	if (count == 28) returnStr = '權杖七';
	if (count == 29) returnStr = '權杖八';
	if (count == 30) returnStr = '權杖九';
	if (count == 31) returnStr = '權杖十';
	if (count == 32) returnStr = '權杖侍者';
	if (count == 33) returnStr = '權杖騎士';
	if (count == 34) returnStr = '權杖皇后';
	if (count == 35) returnStr = '權杖國王';
	if (count == 36) returnStr = '聖杯一';
	if (count == 37) returnStr = '聖杯二';
	if (count == 38) returnStr = '聖杯三';
	if (count == 39) returnStr = '聖杯四';
	if (count == 40) returnStr = '聖杯五';
	if (count == 41) returnStr = '聖杯六';
	if (count == 42) returnStr = '聖杯七';
	if (count == 43) returnStr = '聖杯八';
	if (count == 44) returnStr = '聖杯九';
	if (count == 45) returnStr = '聖杯十';
	if (count == 46) returnStr = '聖杯侍者';
	if (count == 47) returnStr = '聖杯騎士';
	if (count == 48) returnStr = '聖杯皇后';
	if (count == 49) returnStr = '聖杯國王';
	if (count == 50) returnStr = '寶劍一';
	if (count == 51) returnStr = '寶劍二';
	if (count == 52) returnStr = '寶劍三';
	if (count == 53) returnStr = '寶劍四';
	if (count == 54) returnStr = '寶劍五';
	if (count == 55) returnStr = '寶劍六';
	if (count == 56) returnStr = '寶劍七';
	if (count == 57) returnStr = '寶劍八';
	if (count == 58) returnStr = '寶劍九';
	if (count == 59) returnStr = '寶劍十';
	if (count == 60) returnStr = '寶劍侍者';
	if (count == 61) returnStr = '寶劍騎士';
	if (count == 62) returnStr = '寶劍皇后';
	if (count == 63) returnStr = '寶劍國王';
	if (count == 64) returnStr = '錢幣一';
	if (count == 65) returnStr = '錢幣二';
	if (count == 66) returnStr = '錢幣三';
	if (count == 67) returnStr = '錢幣四';
	if (count == 68) returnStr = '錢幣五';
	if (count == 69) returnStr = '錢幣六';
	if (count == 70) returnStr = '錢幣七';
	if (count == 71) returnStr = '錢幣八';
	if (count == 72) returnStr = '錢幣九';
	if (count == 73) returnStr = '錢幣十';
	if (count == 74) returnStr = '錢幣侍者';
	if (count == 75) returnStr = '錢幣騎士';
	if (count == 76) returnStr = '錢幣皇后';
	if (count == 77) returnStr = '錢幣國王';
	if (count == 78) returnStr = '空白牌';

	return returnStr;

}
  

		function Help() {
			return randomReply() + '\n' + '\
【擲骰BOT】v1.26 \
\n 例如輸入2d6+1　攻撃！\
\n 會輸出）2d6+1：攻撃  9[6+3]+1 = 10\
\n 如上面一樣,在骰子數字後方隔空白位打字,可以進行發言。\
\n 以下還有其他例子\
\n 5 3D6 	：分別骰出5次3d6\
\n D66 D66s ：骰出D66 s小者固定在前\
\n 5B10：不加總的擲骰 會進行小至大排序 \
\n 5B10 9：如上,另外計算其中有多少粒大過9 \
\n 5U10 8：進行5D10 每骰出一粒8會有一粒獎勵骰 \
\n 5U10 8 9：如上,另外計算其中有多少粒大過9 \
\n Choice：啓動語choice/隨機/選項/選1\
\n (問題)(啓動語)(問題)  (選項1) (選項2) \
\n 例子 隨機收到聖誕禮物數 1 2 3 >4  \
\n  \
\n 隨機排序：啓動語　排序\
\n (問題)(啓動語)(問題)  (選項1) (選項2)(選項3) \
\n 例子 交換禮物排序 A君 C君 F君 G君\
\n \
\n ・COC六版判定　CCb （目標値）：做出成功或失敗的判定\
\n例）CCb 30　CCb 80\
\n ・COC七版判定　CCx（目標値）\
\n　x：獎勵骰/懲罰骰 (2～n2)。沒有的話可以省略。\
\n  \
\n ・cc六版創角\
\n ・cc七版創角 （年齡）\
\n 	依戀  NM (問題) \
\n  例子 NM NM 我的依戀\
\n  \
\n・WOD 黑暗世界擲骰\
\n (骰數)WOD/Wd(加骰)(+成功數) (問題)\
\n  例子 2wod 3wd8 15wd9+2\
\n  \
\n・占卜運氣功能 字句中包括運氣即可\
\n・塔羅牌占卜 塔羅/大十字塔羅/每日塔羅牌\
\n  時間tarot 等關键字可啓動\
\n  死亡FLAG：啓動語 立Flag/死亡flag\
';		
		}
