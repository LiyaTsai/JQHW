window.onload = f1();
window.onload = function () {
    document.getElementById("DealerNum").style.display = "none";
};
//ao6u.3m/4

// var el = document.querySelector(".num");
// el.addEventListener('keyup', function(){
//     alert('1234');
// },false)

//檢查並自動轉跳下一格
function next(obj) {
    if (obj.value.length == obj.maxLength) {
        let un1 = parseInt(document.getElementById("userNum1").value);
        let un2 = parseInt(document.getElementById("userNum2").value);
        let un3 = parseInt(document.getElementById("userNum3").value);
        let un4 = parseInt(document.getElementById("userNum4").value);
        let un5 = parseInt(document.getElementById("userNum5").value);
        let tempUserNum = [un1, un2, un3, un4, un5];
        let userNum = [];

        for (i = 0; i < 5; i++) {
            n = tempUserNum[i];
            if (userNum.indexOf(n) > -1) {
                continue;
            } else {
                userNum.push(n);
                //console.log(userNum);
            }
        }
        if (userNum.length == 5) {
            document.getElementById("userNum").innerHTML = `你猜測的結果：${userNum}`;
        } else {
            alert("數字重複囉!");
        }
        do {
            obj = obj.nextSibling;
        } while (obj.nodeName != "INPUT");
        obj.focus();
    }
}

//產生莊家數字
function getRandom(x) {
    return Math.floor(Math.random() * x);
}
//準備給比大小用的方法
function compareNumbers(a, b) {
    return a - b;
}
function getPowerNum() {
    let n = 0;
    let ansNum = []; //確定不重複的陣列
    for (i = 0; i < 5; i++) {
        n = getRandom(10);
        if (ansNum.indexOf(n) > -1) {
            i -= 1;
            continue;
        } else {
            ansNum.push(n);
            // console.log(ansNum);
        }
    }
    return ansNum.sort(compareNumbers);
}

//BTN_RELOAD
function f1() {
    let arrAns = getPowerNum().sort(function (a, b) {
        return a - b;
    });
    //不用compareNumbers的寫法(匿名函數)
    // document.getElementById("ansNum").innerHTML = arrAns;
    document.getElementById("ab1").innerHTML = arrAns[0];
    document.getElementById("ab2").innerHTML = arrAns[1];
    document.getElementById("ab3").innerHTML = arrAns[2];
    document.getElementById("ab4").innerHTML = arrAns[3];
    document.getElementById("ab5").innerHTML = arrAns[4];

    //userNum要清空，莊家數字要隱藏
    //bingo要清空
}
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
        tempUserNum = [];
        userNum = [];
    }

    document.getElementById("bingoNum").innerHTML = `你猜測的結果：${f2()}`;
}

//核對玩家userNum 與莊家數字arrAns
function f2() {
    console.log("f2");
    console.log(arrAns);
    var bingoNum = [];

    let _bingoCount = bingoNum.length;
    let bingoCount = 0;
    for (i = 0; i < 5; i++) {
        for (j = 0; j < 5; j++) {
            if (arrAns[i] == userNum[j]) {
                bingoNum.push(userNum[j]);
                bingoCount = bingo.length;
            }
            if (bingoCount == _bingoCount) {
                bingoCount = 200;
                alert("沒猜對");
                break;
            }
        }
    }
    return bingoNum.sort(compareNumbers);
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
