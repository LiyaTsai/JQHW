// 用來記錄開獎次數
var times = 0;

//產生6個數字
function sixRandom() {
    let sixNum = [];
    let ranNum = 0;
    while (sixNum.length < 6) {
        ranNum = parseInt(Math.random() * 49 + 1, 10);
        if (sixNum.indexOf(ranNum) === -1) {
            sixNum.push(ranNum);
        }
    }
    sixNum.sort(function (a, b) {
        return a - b;
    });
    return sixNum;
}
// console.log(sixRandom());

// 產生 49 顆按鈕
for (var i = 1; i < 50; i++) {
    $(".lotteryNums").append("<div>" + i + "</div>");
}

// 為數字按鈕加入事件，並限制只能點擊6次
$(".lotteryNums div").on("click", function () {
    if ($(".selected").length < 6) {
        $(this).toggleClass("selected");
    }
});

//電腦選號
$(".btnAutoNum").on("click", function () {
    //先清空
    $(".lotteryNums div").removeClass("highlight selected");
    //產生電腦選號
    let _autoNum = sixRandom();
    for (var i = 0; i < 6; i++) {
        $(".lotteryNums div")
            .eq(_autoNum[i] - 1)
            .addClass("selected");
    }
});

// 重設按鈕，移除全部的按鈕的class
$(".reset").on("click", function () {
    $(".lotteryNums div").removeClass("highlight selected");
});

// 執行開獎
$(".btnLottery").on("click", function () {
    // 先移除開獎的紅色class
    $(".lotteryNums div.highlight").removeClass("highlight");

    // 尋找自己點擊的綠色class數量
    var selected_box = $(".selected").length;

    // 如果綠色class的數量小於6跳出警告視窗，return true後面的程式不會執行
    if (selected_box < 6) {
        alert("請選擇6個數字");
        return true;
    }

    // 樂透1~49 隨機產生6位數字
    var lottery = sixRandom();
    // console.log(lottery);

    //  開出的獎號並在數字上增加紅色的class
    for (i = 0; i < lottery.length; i++) {
        $(".lotteryNums div")
            .eq(lottery[i] - 1)
            .addClass("highlight");
    }

    // 把開獎號碼印到<span>標籤裡
    $("span").text("開獎號碼: " + lottery);

    // 開獎次數+1
    times++;
    // console.log(times);

    // 紀錄開獎資訊並append進去
    $(".record").append("<div>" + "第" + times + "期：" + lottery + "</div>");

    // 找出符合.selected.highlight 有這兩個class代表你中獎
    var bingo = $(".selected.highlight").length;

    // 提示您兌中數量
    alert("您對中" + bingo + "個號碼");
});
