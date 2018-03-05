var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲公告
function main(InformationN) {
		
	///確定公告狀態

	if(InformationN == 0){

	      rply = {
			"altText":"\【重要】先行測試2(公開測試) 正式開始! \
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
				    \n        GM團\"

		};
	}else if(InformationN == 1){

		rply = {

			"altText":"\【預告】 三月系列活動 \
				   \n 詳細請確認:https://docs.google.com/document/d/1vxUMTrVXpnYK7_My9aO8Ih2tA-aEDc3UHMLBbjkLVlE/edit?usp=sharing\"
		};

	}else if(InformationN == 2){
		rply = {
			"altText":"\【更新】 本次更新介紹 \
				   \n 1.BOT維護:\
				   \n   (1)刪除「賀歲抽籤」\
				   \n   (2)改善招募系統\
				   \n   (3)重要資訊處追加「人物介紹」\"

			}
	}else if(InformationN == 3){
		rply = {
			"altText":"\【補償】 眾多補償 \
				    \n\
				    \n1.更新延遲補償:\
				    \n  因個人生病，導致更新遲緩，將贈與全體玩家「奇蹟石x5」作為補償\
				    \n\
				    \n2.技能書配送錯誤補償:\
				    \n  因個人生病，導致2/26號的周一技能書配送成周二技能書，將贈與全體玩家「星期一頂級寶箱(道具)」作為補償\
				    \n\
				    \n 以上補償將在2018/3/3 02:00 開始發放\"
			 };

	}else if(InformationN == 4){
		rply = {
			"altText":"\【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇) \
				   \n\
				   \n 開催時間:3/15 00:00~3/31 23:59\
				   \n 說明: 以類似於主線任務的形式進行，通過關卡後就能取得特別獎勵！\
				   \n 詳細請輸入 活動 進行確認\"

			 };

	}else if(InformationN == null){

		rply = {
			"altText":"\【公告目錄】目前遊戲中的公告一覽表 \
				   \n\
				   \n  0 【重要】 先行測試2(公開測試) 正式開始!\
				   \n  1 【預告】 三月系列活動(NEW)\
				   \n  2 【更新】 本次更新介紹(NEW)\
				   \n  3 【補償】 眾多補償(NEW)\
				   \n  4 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)(NEW)\
				   \n\
				   \n 如果想看詳細公告內容，請輸入 [公告 公告編號] \"
			};

	}else{

		rply = {
			"altText":"\找不到公告編號['+ InformationN + ']的公告喔\
				\n\
				\n【公告目錄】目前遊戲中的公告一覽表 \
				\n\
				\n  0 【重要】 先行測試2(公開測試) 正式開始!\
				\n  1 【預告】 三月系列活動(NEW)\
				\n  2 【更新】 本次更新介紹(NEW)\
				\n  3 【補償】 眾多補償(NEW)\
				\n  4 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)(NEW)\
				\n\
				\n 如果想看詳細公告內容，請輸入 [公告 公告編號] \"
			};

	};
		
	return rply;
	
}
////////////////



module.exports = {
	GameInformation:main
};
