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
			    \n先行測試二的開始時間為: 2018/1/28 00:00\
			    \n先行測試二招募文發布時間為: 2018/1/28 12:00\
			    \n 接下來的冒險，還請各位多關照\
			    \n        GM團';
	}else if(InformationN == 1){

		 rply.text = '【重要】 超級大更新 \
  				\n 本次更新內容極為大量，請至本文確認\
				\n https://docs.google.com/document/d/18rghjUE_q25fQUXhyy68DOfJb5Uuyvw97kE7m95IJnY/edit?usp=sharing\
				\n 以上更新將於 3/14 00:00 生效';

	}else if(InformationN == 2){

		 rply.text = '【預告】 三月系列活動 \
  			      \n 詳細請確認:https://docs.google.com/document/d/1vxUMTrVXpnYK7_My9aO8Ih2tA-aEDc3UHMLBbjkLVlE/edit?usp=sharing';

	}else if(InformationN == 3){
		 rply.text = '【更新】 本次更新介紹 \
				   \n 1.BOT維護:\
				   \n   (1)增加「公會專區」';

	}else if(InformationN == 4){
		 rply.text = '【補償】 超級大補償 \
				    \n\
				    \n1.超多技能更改補償:\
				    \n  由於過多技能進行變更，將贈予全體玩家「奇蹟石x30」的賠償\
				    \n\
				    \n2.素質系統重置補償:\
				    \n  由於tp系統大改，將贈與全體玩家「奇蹟石x20」「基本能力重置卷x1」作為補償\
				    \n\
				    \n3.設施變動補償:\
				    \n 將贈與全體玩家「奇蹟石x15」作為補償\
				    \n\
				    \n 以上補償將在2018/3/10 00:00 開始發放';

	}else if(InformationN == 5){
		 rply.text = '【活動】劇情活動-路卡與梅里歐斯的回憶(前篇) \
				   \n\
				   \n 開催時間:3/15 00:00~3/31 23:59\
				   \n 說明: 以類似於主線任務的形式進行，通過關卡後就能取得特別獎勵！\
				   \n 詳細請輸入 活動 進行確認';
	}else if(InformationN == null){

		 rply.text = '【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【重要】 超級大更新(NEW)\
				\n  2 【預告】 三月系列活動\
				\n  3 【更新】 本次更新介紹(NEW)\
				\n  4 【補償】 超級大補償(NEW)\
				\n  5 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				   \n\
				   \n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';
	}else{

		 rply.text = '找不到公告編號['+ InformationN + ']的公告喔\
				\n\
				\n【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【重要】 超級大更新(NEW)\
				\n  2 【預告】 三月系列活動\
				\n  3 【更新】 本次更新介紹(NEW)\
				\n  4 【補償】 超級大補償(NEW)\
				\n  5 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
