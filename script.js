// ------------------------------
// わにゃぴからの「いいこと」メッセージ
// ------------------------------

const goodMessages = [
    "えらい！！✨",
    "すごい！今日も頑張ったね🌸",
    "それはとってもえらい！🐼",
    "よくできました！💮",
    "わにゃぴから花丸です！🌸",
    "そんなあなたを応援しています！✨"
];


// ------------------------------
// わにゃぴからの「うーん……」メッセージ
// ------------------------------

const badMessages = [
    "うーん……次は頑張ろう！🌀",
    "それはちょっと残念……！",
    "まあ、そういう日もあるよ🌱",
    "反省したなら次はきっと大丈夫！",
    "うーん……わにゃぴは見ていますよ👀",
    "今日は仕方ない！明日から頑張ろう！"
];


// ------------------------------
// HTMLの部品を取得する
// ------------------------------

const report = document.getElementById("report");

const goodButton = document.getElementById("goodButton");

const badButton = document.getElementById("badButton");

const result = document.getElementById("result");

const resultIcon = document.getElementById("resultIcon");

const resultMessage = document.getElementById("resultMessage");

const resetButton = document.getElementById("resetButton");


// ------------------------------
// ランダムにメッセージを選ぶ関数
// ------------------------------

function getRandomMessage(messages) {

    // 0～配列の最後までのランダムな数字を作る
    const randomNumber =
        Math.floor(Math.random() * messages.length);

    // 選ばれたメッセージを返す
    return messages[randomNumber];
}


// ------------------------------
// 「いいこと！」を押したとき
// ------------------------------

goodButton.addEventListener("click", function () {

    // 入力された報告を取得
    const reportText = report.value;

    // 報告が空っぽだったら注意する
    if (reportText.trim() === "") {

        alert("まずは今日の報告を書いてみてね！");

        return;
    }


    // 結果のアイコン
    resultIcon.textContent = "🌸";

    // ランダムな「いいこと」メッセージを表示
    resultMessage.textContent =
        getRandomMessage(goodMessages);


    // 結果を表示する
    result.classList.remove("hidden");

});


// ------------------------------
// 「うーん……」を押したとき
// ------------------------------

badButton.addEventListener("click", function () {

    // 入力された報告を取得
    const reportText = report.value;

    // 報告が空っぽだったら注意する
    if (reportText.trim() === "") {

        alert("まずは今日の報告を書いてみてね！");

        return;
    }


    // 結果のアイコン
    resultIcon.textContent = "🌀";

    // ランダムな「うーん」メッセージを表示
    resultMessage.textContent =
        getRandomMessage(badMessages);


    // 結果を表示する
    result.classList.remove("hidden");

});


// ------------------------------
// 「もう一度報告する」を押したとき
// ------------------------------

resetButton.addEventListener("click", function () {

    // 入力欄を空にする
    report.value = "";

    // 結果を隠す
    result.classList.add("hidden");

});