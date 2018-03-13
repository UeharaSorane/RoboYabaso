var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 重要資訊處
function ImportantInformation() {
	rply.text =  '【重要資訊處】\
	\n 這裡是讓玩家迅速連結到許多重要文件的地方\
	\n 開始冒險吧！角色創造教學:\
	\n https://docs.google.com/document/d/1zSe_SLiGM07VhmC8m3vzy8RBu-gXV3wUK7wBhcdxhY8/edit?usp=drivesdk\
	\n\
	\n 遊戲規範及使用說明書:\
	\n https://docs.google.com/document/d/1J1cqWi7zhqalflyLZR-Ns2WRq0XMZ2t1mHS4xjh_gPE/edit?usp=drivesdk\
	\n\
	\n 遊戲圖鑑:\
	\n https://docs.google.com/spreadsheets/d/1YDM6zyP1Ht536HC-gg8mv54Yxe8Gdhdm-2SkTOdahas/edit?usp=drivesdk\
	\n\
	\n 異常狀態一覽表:\
	\n https://docs.google.com/document/d/1d01JETNej2X806eHojfkQCU-GmQ7IDztxgKVSLXVVI4/edit?usp=drivesdk\
	\n\
	\n 寶箱狩獵！對戰獎勵說明:\
	\n https://docs.google.com/document/d/1t9lGvqW5dZvgK54RZZ66xRfVQABvI0MYkSoe70mTtIk/edit?usp=sharing\
	\n\
	\n 特殊商店-夥伴商城:\
	\n https://docs.google.com/document/d/1pR0_PBwf-k6WtNJnpvIZBgrjKvMoTpHu1SH3PsuUYXk/edit?usp=sharing\
	\n\
	\n 武器特效一覽表:\
	\n https://docs.google.com/document/d/1_oUPgsk_bbkqVaYqARYdQ5pmSDYRvb4FTypZkjotJJY/edit?usp=sharing\
	\n\
	\n 人物介紹:\
	\n https://docs.google.com/document/d/1rpmnsQz8q7-IS3YoYigVf9aF6ZLzC9jIR71Qen7G4mA/edit?usp=sharing\
	\n 以上內容皆能在 文章區確認';
  
  return rply;
  
}

//////////////// 

//////////////// 遊戲存檔
function GameSave() {
	rply.text =  '【遊戲存檔】\
	\n 這裡是確認玩家遊戲紀錄及公會資料的地方\
	\n\
	\n 玩家存檔1區:\
	\n https://docs.google.com/spreadsheets/d/1svWEwU2C7_DF80-x6gacD2QDfGsUVCA67t3T1eXPNGQ/edit?usp=drivesdk\
	\n\
	\n 公會一覽表1區:\
	\n https://docs.google.com/spreadsheets/d/1KNAHWzYI3CpfA4o9Cw88xxFeNkWMfgYVFmIM_nF2Afg/edit?usp=drivesdk\
	\n\
	\n 以上內容皆能在 文章區確認';
  
    return rply;
  
}


//////////////// 

//////////////// 公會專區
function Guild() {
	rply.text =  '【公會專區】\
	\n 這裡是確認公會各項的地方\
	\n\
	\n 公會一覽表1區:\
	\n https://docs.google.com/spreadsheets/d/1KNAHWzYI3CpfA4o9Cw88xxFeNkWMfgYVFmIM_nF2Afg/edit?usp=drivesdk\
	\n\
	\n 公會設施說明及武器進化說明:\
	\n https://docs.google.com/document/d/1NAB984kqHs8ED-9ehfq8Zz7WQprDMkOLpEIqklhIe-E/edit?usp=drivesdk\
	\n\
	\n 公會申請/加入方法:\
	\n https://docs.google.com/document/d/1YuFLeoQIB7LJH8ikjkihVb1P_O3xIouVIBfKpba-bYU/edit?usp=drivesdk\
	\n\
	\n 公會設施目錄:\
	\n https://docs.google.com/spreadsheets/d/1SJXxFnVEx7kSDXy8uVEdlW63Dnqxb1EoHR9S53uy-EM/edit?usp=drivesdk\
	\n\
	\n 以上內容皆能在 文章區確認';
  
    return rply;
  
}


////////////////

module.exports = {
	ImportantInformation,
	GameSave,
	Gulid
};
