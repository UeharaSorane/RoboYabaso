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

		 rply.text = '【重要】 TP系統變更、新系統「詠唱系統」追加、武器適性變更 \
  				\n 1.TP系統變更\
				\n由於遊戲戰鬥速度比預期的快，將調整Tp要求數\
				\n Tp上限及夥伴技能需求量:10->5\
				\n\
				\n2.新系統 詠唱系統 追加\
				\n 詳細請參本文章:\
				\n https://docs.google.com/document/d/1qBIHA_OVyo_StotVyUxzJdsvwoh7rC2PDiuCcsagUd0/edit?usp=sharing\
				\n\
				\n 3.武器適性變更:\
				\n(1)武器獨立適性將與武器適性分開，改為「武器特效」，效果跟觸發方式不變\
				\n(2)書的特效與長杖的特效互換';

	}else if(InformationN == 2){

		 rply.text = '【重要】 超級大更新 \
  				\n 本次更新內容極為大量，請至本文確認\
				\n https://docs.google.com/document/d/1P_h7_26TmzJrHGh4H9qaiur1toeJYYidDxJpy1_DlCY/edit?usp=sharing\
				\n 以上更新將於 3/10 00:00 生效';

	}else if(InformationN == 3){

		 rply.text = '【預告】 三月系列活動 \
  			      \n 詳細請確認:https://docs.google.com/document/d/1vxUMTrVXpnYK7_My9aO8Ih2tA-aEDc3UHMLBbjkLVlE/edit?usp=sharing';

	}else if(InformationN == 4){
		 rply.text = '【更新】 本次更新介紹 \
				   \n 1.BOT維護:\
				   \n   (1)改良「寶箱功能」，現在會自動幫玩家確認寶箱內容\
				   \n   (2)追加新功能「速度判定」，使用更直觀的判定系統代替原先判定方法\
				   \n   (3)開放每日祈願功能\
				   \n   (4)改良教學系統內容';

	}else if(InformationN == 5){
		 rply.text = '【補償】 超級大補償 \
				    \n\
				    \n1.技能大修改補償:\
				    \n  由於過多技能進行變更，將贈予全體玩家「奇蹟石x30」的賠償\
				    \n\
				    \n2.Tp系統變更補償:\
				    \n  由於tp系統大改，將贈予全體玩家「奇蹟石x5」作為補償\
				    \n\
				    \n3.超級大更新補償:\
				    \n 為了慶祝新系統登場，將贈予全體玩家「奇蹟石x20」的獎勵\
				    \n\
				    \n4.武器特校變更補償:\
				    \n 武器特效變更，將贈予全體玩家「奇蹟石x5」作為補償\
				    \n\
				    \n 以上補償將在2018/3/10 00:00 開始發放';

	}else if(InformationN == 6){
		 rply.text = '【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇) \
				   \n\
				   \n 開催時間:3/15 00:00~3/31 23:59\
				   \n 說明: 以類似於主線任務的形式進行，通過關卡後就能取得特別獎勵！\
				   \n 詳細請輸入 活動 進行確認';

	}else if(InformationN == 7){
		 rply.text = '【技能】治癒技能緊急變動 \
				   \n\
				   \n 強化技能倍率變成1d3+1/8\
				   \n 全體持有技能「治癒」的玩家，將給予「奇蹟石x5」作為補償\
				   \n 以上補償將於2018/3/11/00:00 開始發放';

	}else if(InformationN == null){

		 rply.text = '【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【重要】 TP系統變更、新系統「詠唱系統」追加、武器適性變更(NEW)\
				\n  2 【重要】 超級大更新(NEW)\
				\n  3 【預告】 三月系列活動\
				\n  4 【更新】 本次更新介紹(NEW)\
				\n  5 【補償】 超級大補償(NEW)\
				\n  6 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n  7 【技能】治癒技能緊急變動\
				   \n\
				   \n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';
	}else{

		 rply.text = '找不到公告編號['+ InformationN + ']的公告喔\
				\n\
				\n【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【重要】 TP系統變更、新系統「詠唱系統」追加、武器適性變更(NEW)\
				\n  2 【重要】 超級大更新(NEW)\
				\n  3 【預告】 三月系列活動\
				\n  4 【更新】 本次更新介紹(NEW)\
				\n  5 【補償】 超級大補償(NEW)\
				\n  6 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n  7 【技能】治癒技能緊急變動\
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
