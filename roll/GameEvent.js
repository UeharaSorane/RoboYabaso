var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲活動
function main(EventN,EventStoryN) {
	///確定活動狀態
	if(EventN == 0){
		rply.text = '【重要】 先行測試二 不刪擋公測中 \
				\n\
				\n感謝各位參加 Line文遊-梅里歐斯的冒現者 的先行測試 \
				\n還沒完成教學的測試玩家請盡速找GM進行教學\
				\n\
				\n        GM團祝各位遊玩愉快';
	}else if(EventN == 1){
		///第一章
		if(EventStoryN == '序章'){

			rply.text = '序章-現在與過去\
			\n\
			\跟GM對話以觀看劇情';

		}else if(EventStoryN == '1'||EventStoryN == '第一話'){

			rply.text = '第一話 怪物村(上)\
			\n\
			\n 對手:盜賊\
			\n 通關獎勵:(10d2)G金幣\
			\n 初次通關獎勵:奇蹟石x5\
			\n 故事:\
			\n 作為尋找黃金之泉的冒險者-路卡在休息途中背包被搶走了\
			\n 必須搶回來才行!';

		}else if(EventStoryN == '2'||EventStoryN == '第二話'){

			rply.text = '第二話 怪物村(下)\
			\n\
			\n 對手:牛頭人\
			\n 通關獎勵:(10d3)G金幣\
			\n 初次通關獎勵:奇蹟石x5\
			\n 故事:\
			\n 知道偷走自己背包的怪物們其實是有苦衷之後，路卡決定要去勸說他們';

		}else if(EventStoryN == '3'||EventStoryN == '第三話'){

			rply.text = '第三話 奇異都市(上)\
			\n\
			\n 對手:艾希\
			\n 通關獎勵:(10d3)G金幣\
			\n 初次通關獎勵:奇蹟石x10\
			\n 故事:\
			\n 在大都市「艾利菲爾」準備登記出境證明的路卡等人，被強迫推銷的業務員纏上\
			\n 結果尤克特被綁走了！必須救他出來才行！';

		}else if(EventStoryN == '4'||EventStoryN == '第四話'){

			rply.text = '第四話 奇異都市(下)\
			\n\
			\n 對手:蘭斯洛特\
			\n 通關獎勵:(10d4)G金幣\
			\n 初次通關獎勵:奇蹟石x10\
			\n 故事:\
			\n 在辦理出境證明時，遇上正在代班的圓桌騎士「蘭斯洛特」\
			\n 蘭斯洛特邀請路卡跟他一戰，用盡全力獲勝吧！';

		}else if(EventStoryN == '5'||EventStoryN == '第五話'){

			rply.text = '第五話 碧綠獵手(上)\
			\n\
			\n 對手:巨大捕蠅草\
			\n 通關獎勵:(10d4)G金幣\
			\n 初次通關獎勵:奇蹟石x10\
			\n 故事:\
			\n 路卡等人前往旅途必經的「湖之森」時被守護森林的獵人「哈因」勸阻，但是不得不通過森林的路卡以消滅隱藏在森林的「食人植物」為條件終於進入森林\
			\n 但是在分散尋找的途中，遇上了巨大的捕蠅草！？';

		}else if(EventStoryN == '6'||EventStoryN == '第六話'){

			rply.text = '第六話 碧綠獵手(下)\
			\n\
			\n 對手:人口販修斯\
			\n 通關獎勵:(10d5)G金幣\
			\n 初次通關獎勵:奇蹟石x10\
			\n 故事:\
			\n 在路卡等人尋找食人植物的第二天，克雷特發現有人綁走了蘿莉妖精，他通知大家後二話不說地衝去營救\
			\n 路卡和其他人也決定要一起幫忙';

		}else if(EventStoryN == 'Sp'){

			rply.text = '最終話 碧綠獵手(裏)\
			\n\
			\n 對手:食人植物 花\
			\n 初次通關獎勵:武器「樺木棍(R)」\
			\n 故事:\
			\n 目睹修斯被食人植物斯成碎片的恐怖模樣，路卡一行人眼睜睜的看著食人植物跑走\
			\n 隔一天，食人植物竟然來到了營地並展開攻擊！？';

		}else if(EventStoryN == '關卡'){

			rply.text = '劇情活動-路卡與梅里歐斯的回憶(前篇)\
			\n\
			\n 故事:\
			\n     這是三年前，路卡曾經為了找到能實現任何願望的「黃金之泉」，所發生的故事\
			\n\
			\n     對路卡而言，那是與「她」第一次相遇的，十分重要的故事\
			\n\
			\n\
			\n 關卡情報:\
			\n 序章(觀賞完後會贈送1顆奇蹟石)[向GM確認]\
			\n 第一話 怪物村(上)\
			\n 第二話 怪物村(下)\
			\n 第三話 奇異都市(上)\
			\n 第四話 奇異都市(下)\
			\n 第五話 碧綠獵手(上)\
			\n 第六話 碧綠獵手(下)\
			\n\
			\n 如果想看詳細內容，請輸入 活動 1 話數 進行確認';

		}else if(EventStoryN == null){

			rply.text = '【活動】劇情活動-路卡與梅里歐斯的回憶(前篇) \
				\n\
				\n 開催時間:3/15 00:00~5/31 23:59\
				\n 故事:\
				\n     這是三年前，路卡曾經為了找到能實現任何願望的「黃金之泉」，所發生的故事\
				\n\
				\n     對路卡而言，那是與「她」第一次相遇的，十分重要的故事\
				\n\
				\n 活動方式:\
				\n     以類似於主線任務的形式進行，輸入 活動 確認劇情關卡進度，之後向GM申請挑戰劇情任務，過關後就能取得特別獎勵！\
				\n\
				\n     一共六個關卡，全部完成的話，總計可以獲得50顆奇蹟石的獎勵！\
				\n\
				\n 想要確認關卡狀況，請輸入 活動 1 關卡 進行確認\
				';

		}else{
			rply.text = '找不到關卡['+ EventStoryN + ']的關卡喔';
		}
		///



	}else if(EventN == null){

		 rply.text = '【活動目錄】目前開催中的活動一覽表 \
				\n\
				\n  0 【重要】 先行測試二 不刪擋公測中\
				\n  1 【活動】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n\
				\n 如果想看詳細活動內容，請輸入 [活動 活動編號] ';
	}else{

		 rply.text = '找不到活動編號['+ EventN + ']的活動喔\
				\n\
				\n【活動目錄】目前開催中的活動一覽表 \
				\n\
				\n  0 【重要】 先行測試二 不刪擋公測中\
				\n  1 【活動】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n\
				\n 如果想看詳細活動內容，請輸入 [活動 活動編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
