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

		 rply.text = '【重要】 更新 \
  				\n 這是本次更新內容，請至本文確認\
				\n https://docs.google.com/document/d/1NhRwvDQ3Jz9no-rW2f4O4m_nYad_IAA1kY64Lbc4Fqk/edit?usp=sharing\
				\n 以上更新將於 3/31 00:00 生效';

	}else if(InformationN == 2){
		 rply.text = '【活動】劇情活動-路卡與梅里歐斯的回憶(前篇) \
				   \n\
				   \n 開催時間:3/15 00:00~5/31 23:59\
				   \n 說明: 以類似於主線任務的形式進行，通過關卡後就能取得特別獎勵！\
				   \n 詳細請輸入 活動 進行確認';
	}else if(InformationN == 3){

		 rply.text = '【補償】【緊急】 招募內容物錯誤相關補償 \
  				\n 由於本次「緊急招募」中忘記設定夥伴，導致無法取得限定夥伴，將給予全體玩家「奇蹟石x41」作為補償\
				\n\
				\n 同時強制結束本招募，造成不便請見諒...\
				\n ...\
				\n ...\
				\n 開玩笑的啦！其實一開始就沒有讓各位抽的意思\
				\n 以此僅祝各位愚人節快樂\
				\n 放心補償還是會有的\
				\n 以上補償將於 4/2 00:00 開始發放，至4/15日截止';

	}else if(InformationN == null){

		 rply.text = '【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【重要】 更新(NEW)\
				\n  2 【活動】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n  3 【補償】【緊急】 招募內容物錯誤相關補償\
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';
	}else{

		 rply.text = '找不到公告編號['+ InformationN + ']的公告喔\
				\n\
				\n【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【重要】 更新(NEW)\
				\n  2 【活動】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n  3 【補償】【緊急】 招募內容物錯誤相關補償\
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
