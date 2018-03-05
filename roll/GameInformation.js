var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲公告
function main(InformationN) {
	///確定公告狀態
	if(InformationN == 0){
		rply.text = '\【重要】先行測試2(公開測試) 正式開始!\ ';
	}
}
////////////////



module.exports = {
	GameInformation:main
};
