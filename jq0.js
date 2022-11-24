// 用來記錄開獎次數
var times = 0;

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
        alert("注意！您尚未選取六位數");
        return true;
    }

    // 樂透1~49 隨機產生6位數字
    var lottery = [],
        number;

    while (lottery.length < 6) {
        number = parseInt(Math.random() * 49 + 1, 10);

        if (lottery.indexOf(number) === -1) {
            lottery.push(number);
        }
    }

    console.log(lottery);

    //  開出的獎號並在數字上增加紅色的class
    for (i = 0; i < lottery.length; i++) {
        $(".lotteryNums div")
            .eq(lottery[i] - 1)
            .addClass("highlight");
    }

    // 用來存開獎出來的樂透號碼
    var new_numbers = "";

    // 撈出開獎號碼並加上逗號讓數字分開
    for (var n = 0; n < lottery.length; n++) {
        new_numbers += lottery[n];
        if (n < 5) {
            new_numbers += ",";
        }
    }

    // 把開獎號碼印到<span>標籤裡
    $("span").text(new_numbers);

    // 開獎次數+1
    times++;
    console.log(times);

    // 紀錄開獎資訊並append進去
    $(".record").append("<div>" + "第" + times + "次：" + new_numbers + "</div>");

    // 找出符合.selected.highlight 有這兩個class代表你中獎
    var bingo = $(".selected.highlight").length;

    // 提示您兌中數量
    alert("您兌中" + bingo + "位數");
});
