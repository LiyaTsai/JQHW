// let arrAns = [];
let ansNum = [];
let player = [];
window.onload = f1();

// var el = document.querySelector(".num");
// el.addEventListener('keyup', function(){
//     alert('1234');
// },false)

function next(obj) {
    //檢查並自動轉跳下一格
    //欄位檢查
    let reg = /^[0-9]$/; //正規表示法 只能輸入一個數字
    let userNum = [];

    //如果輸入的值不符合正規表示法的話
    if (!reg.test(obj.value)) {
        obj.value = "";
        alert(`錯誤輸入:只能輸入數字`);
        return false;
    } else {
        for (i = 1; i < 6; i++) {
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
                    }
                }
            }
        }
    }

    if (obj.value.length == obj.maxLength) {
        let un1 = parseInt(document.getElementById("userNum1").value);
        let un2 = parseInt(document.getElementById("userNum2").value);
        let un3 = parseInt(document.getElementById("userNum3").value);
        let un4 = parseInt(document.getElementById("userNum4").value);
        let un5 = parseInt(document.getElementById("userNum5").value);
        let tempUserNum = [un1, un2, un3, un4, un5];
        userNum = [];
        for (i = 0; i < 5; i++) {
            var n = tempUserNum[i];
            if (userNum.indexOf(n) > -1) {
                continue;
            } else {
                userNum.push(n);
            }
            // console.log(`userNum=${userNum}`);
        }

        if (userNum.length == 5) {
            // document.getElementById("userNum").innerHTML = 你猜測的結果：${userNum}
            var TempNum = [];
            for (let i = 0; i < userNum.length; i++) {
                if (isNaN(userNum[i]) == false) {
                    TempNum.push(userNum[i]);
                }
            }
            TempNum.sort();
            document.getElementById("userNum").innerHTML = `你猜測的結果：${TempNum}`;
        } else {
            alert("數字重複囉!");
        }
        do {
            obj = obj.nextSibling;
        } while (obj.nodeName != "INPUT");
        obj.focus();

    //     //顯示輸入的數字;
    // monitor();
    return userNum;
    // }
}

// //     //即時顯示玩家輸入的數字
// player = monitor();
// console.log("player " +player);
function monitor() {
    if (obj.value.length == obj.maxLength) {
        let un1 = parseInt(document.getElementById("userNum1").value);
        let un2 = parseInt(document.getElementById("userNum2").value);
        let un3 = parseInt(document.getElementById("userNum3").value);
        let un4 = parseInt(document.getElementById("userNum4").value);
        let un5 = parseInt(document.getElementById("userNum5").value);
        let tempUserNum = [un1, un2, un3, un4, un5];
        userNum = [];
        for (i = 0; i < 5; i++) {
            var n = tempUserNum[i];
            if (userNum.indexOf(n) > -1) {
                continue;
            } else {
                userNum.push(n);
            }
            // console.log(`userNum=${userNum}`);
        }

        if (userNum.length == 5) { 
            // document.getElementById("userNum").innerHTML = 你猜測的結果：${userNum}
            var TempNum = [];
            for (let i = 0; i < userNum.length; i++) {
                if (isNaN(userNum[i]) == false) {
                    TempNum.push(userNum[i]);
                }
            }
            TempNum.sort();
            document.getElementById("userNum").innerHTML = `你猜測的結果：${TempNum}`;
        } else {
            alert("數字重複囉!");
        }
        do {
            obj = obj.nextSibling;
        } while (obj.nodeName != "INPUT");
        obj.focus();

        //顯示輸入的數字;
        return userNum;
    }
}

//產生莊家數字
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

//BTN_RELOAD
function f1() {
    // a = getPowerNum().sort(function (a, b) {
    //     return a - b;
    // });
    let ansNum = []; //確定不重複的陣列
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
    ansNum.sort(function (a, b) {
        return a - b;
    });

    //不用compareNumbers的寫法(匿名函數)
    // document.getElementById("ansNum").innerHTML = arrAns;
    document.getElementById("ab1").innerHTML = ansNum[0];
    document.getElementById("ab2").innerHTML = ansNum[1];
    document.getElementById("ab3").innerHTML = ansNum[2];
    document.getElementById("ab4").innerHTML = ansNum[3];
    document.getElementById("ab5").innerHTML = ansNum[4];
    //
    document.getElementById("DealerNum").style.display = "none";
}
//userNum要清空，莊家數字要隱藏
//bingo要清空

//BTN check
//抓userNumber
function getUserNum() {
    let un1 = parseInt(document.getElementById("userNum1").value);
    let un2 = parseInt(document.getElementById("userNum2").value);
    let un3 = parseInt(document.getElementById("userNum3").value);
    let un4 = parseInt(document.getElementById("userNum4").value);
    let un5 = parseInt(document.getElementById("userNum5").value);
    let tempUserNum = [un1, un2, un3, un4, un5];
    var userNum = [];
    console.log(`userNum=${userNum}`);

    for (i = 0; i < 5; i++) {
        n = tempUserNum[i];
        if (userNum.indexOf(n) == -1) {
            userNum.push(n);
        } else {
            continue;
        }
    }
    if (userNum.length == 5) {
        document.getElementById("userNum").innerHTML = `你猜測的結果：${userNum}`;
    } else {
        console.log(userNum.length);
        alert("ERROR");
        //tempUserNum=[];
        //userNum=[];
    }
    document.getElementById("bingoNum").innerHTML = `你猜中的數字有：${f2()}`;
}

//核對玩家userNum 與莊家數字arrAns
function f2() {
    console.log("f2");
    console.log(ansNum[0]);
    var bingoNum = [];
    console.log(ansNum);
    let _bingoCount = bingoNum.length;
    console.log("_bingoCount: " + _bingoCount);
    let bingoCount = 0;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (ansNum[i] == userNum[j]) {
                bingoNum.push(userNum[j]);
                bingoCount = bingoNum.length;
            }
            if (bingoCount == _bingoCount) {
                bingoCount = 200;
                alert("沒猜對");
                break;
            }
        }
    }
    return bingoNum.sort();
}
//隱藏莊家數字
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
