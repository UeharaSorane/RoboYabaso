var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲公告
function main(InformationN) {
	///確定公告狀態
	if(InformationN == 0){
		rply.text = '【重要】先行測試2(公開測試) 正式開始! \
			    \n\
			    \n 感謝各位遊玩本遊戲\
			    \n 目前本遊戲終於來到正式向外發布的階段了\
			    \n 儘管目前只是公開測試，但仍開放了許多功能\
			    \n 目前開放使用的功能:\
			    \n 1.新手教學\
			    \n 3.單人公式對戰(可獲得寶箱)\
			    \n先行測試二的開始時間為: 2018/1/28 00:00\
			    \n先行測試二招募文發布時間為: 2018/1/28 12:00\
			    \n 接下來的冒險，還請各位多關照\
			    \n        GM團';
	}
}
////////////////



module.exports = {
	GameInformation:main
};
