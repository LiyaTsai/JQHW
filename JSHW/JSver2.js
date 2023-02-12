let ansNum = []; //莊家陣列
let player = []; //玩家陣列
let bingo = []; //猜對的陣列

//設定莊家數字(謎底)
function getPowerNum() {
    let n = 0;
    for (i = 0; i < 5; i++) {
        n = Math.floor(Math.random() * 10);
        if (ansNum.indexOf(n) > -1) {
            i -= 1;
            continue;
        } else {
            ansNum.push(n);
            // console.log(ansNum);
        }
    }
    return ansNum.sort();
}
ansNum = getPowerNum();

function hideAnsNum() {
    //紀錄莊家數字
    document.getElementById("ab1").innerHTML = ansNum[0];
    document.getElementById("ab2").innerHTML = ansNum[1];
    document.getElementById("ab3").innerHTML = ansNum[2];
    document.getElementById("ab4").innerHTML = ansNum[3];
    document.getElementById("ab5").innerHTML = ansNum[4];
    //隱藏莊家數字
    document.getElementById("DealerNum").style.display = "none";
}
hideAnsNum();

function next(obj) {
    //檢查並自動轉跳下一格
    //欄位檢查
    let reg = /^[0-9]$/; //正規表示法 只能輸入一個數字
    let userNum = [];
    if (!reg.test(obj.value)) {
        obj.value = "";
        alert(`錯誤輸入:只能輸入數字`);
        return false;
    } else {
        for (let i = 1; i < 6; i++) {
            userNum[i] = document.getElementById("userNum" + i).value;
            for (let j = 1; j < i; j++) {
                //如果欄位沒有填值的話就（continue）跳過
                if (userNum[i] == "") {
                    continue;
                } else if (userNum[i] == userNum[j]) {
                    //如果重複的話 , 該值就清空
                    alert("你的輸入值重複");
                    obj.value = "";
                    document.getElementById("userNum" + i).focus();
                    continue;
                } else {
                    if (i == 5) {
                        document.getElementById("userNum" + i).focus();
                    } else {
                        // 129 - 133行的 id 設定 1 - 5
                        // 如果直接 + 1 console面板會出錯 , 所以才需要此 if else 判斷
                        document.getElementById("userNum" + (i + 1)).focus();
                        // do {
                        //     obj = obj.nextSibling;
                        // } while (obj.nodeName != "INPUT");
                        // obj.focus();
                    }
                }
            }
        }
    }
    //即時檢視數字
    monitor();
}

function monitor() {
    //存取使用者輸入數字
    let un1 = parseInt(document.getElementById("userNum1").value);
    let un2 = parseInt(document.getElementById("userNum2").value);
    let un3 = parseInt(document.getElementById("userNum3").value);
    let un4 = parseInt(document.getElementById("userNum4").value);
    let un5 = parseInt(document.getElementById("userNum5").value);
    let tempUserNum = [un1, un2, un3, un4, un5];

    //避免顯示NaN
    if (tempUserNum.length == 5) {
        // document.getElementById("userNum").innerHTML = 你猜測的結果：${userNum}
        var userNum = [];
        for (let i = 0; i < tempUserNum.length; i++) {
            if (isNaN(tempUserNum[i]) == false) {
                userNum.push(tempUserNum[i]);
            }
        }
        player = userNum.sort();
        document.getElementById("userNum").innerHTML = `你猜測的數字為：${userNum}`;
    }
    return userNum;
}

//BTN_檢視猜測結果
function getUserNum() {
    for (let i = 0; i < ansNum.length; i++) {
        //放莊家陣列
        for (let j = 0; j < ansNum.length; j++) {
            //放玩家陣列
            if (ansNum[i] == player[j]) {
                //對到數字相同
                if (bingo.indexOf(ansNum[i]) == -1) {
                    bingo.push(ansNum[i]);
                    bingo.sort();
                    document.getElementById("bingoNum").innerHTML = `猜中的數字有：${bingo}`;
                }
            }
            if (bingo.length == ansNum.length) {
                alert("恭喜完成遊戲");
                return;
            }
        }
    }
}

//BTN_隱藏莊家數字
function show() {
    var Hide = document.getElementById("Hide");
    var DealerNum = document.getElementById("DealerNum");
    if (DealerNum.style.display == "none") {
        DealerNum.style.display = "flex";
        Hide.innerText = "隱藏莊家數字";
    } else {
        DealerNum.style.display = "none";
        Hide.innerText = "顯示莊家數字";
    }
}

//BTN_reload
function reload() {
    //清空陣列
    ansNum = [];
    player = [];
    bingo = [];

    //清空數值
    for (let i = 0; i < 5; i++) {
        // console.log("userNum" + (i + 1));
        document.getElementById("userNum" + (i + 1)).value = "";
    }
    document.getElementById("userNum").innerHTML = `你猜測的數字為：${player}`;
    document.getElementById("bingoNum").innerHTML = `猜中的數字有：${bingo}`;

    //產生新謎底並隱藏
    ansNum = getPowerNum();
    hideAnsNum();
}
