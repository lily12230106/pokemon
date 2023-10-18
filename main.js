'use strict';

const quizData = [
    {pokemon: 'img/003n.png', cry: 'audio/003.wav', name: 'フシギバナ'},
    {pokemon: 'img/006n.png', cry: 'audio/006.wav', name: 'リザードン'},
    {pokemon: 'img/009n.png', cry: 'audio/009.wav', name: 'カメックス'},
    {pokemon: 'img/012n.png', cry: 'audio/012.wav', name: 'バタフリー'},
    {pokemon: 'img/022n.png', cry: 'audio/022.wav', name: 'オニドリル'},
    {pokemon: 'img/025n.png', cry: 'audio/025.wav', name: 'ピカチュウ'},
    {pokemon: 'img/036n.png', cry: 'audio/036.wav', name: 'ピクシー'},
    {pokemon: 'img/038n.png', cry: 'audio/038.wav', name: 'キュウコン'},
    {pokemon: 'img/040n.png', cry: 'audio/040.wav', name: 'プクリン'},
    {pokemon: 'img/047n.png', cry: 'audio/047.wav', name: 'パラセクト'},
    {pokemon: 'img/052n.png', cry: 'audio/052.wav', name: 'ニャース'},
    {pokemon: 'img/065n.png', cry: 'audio/065.wav', name: 'フーディン'},
    {pokemon: 'img/068n.png', cry: 'audio/068.wav', name: 'カイリキー'},
    {pokemon: 'img/080n.png', cry: 'audio/080.wav', name: 'ヤドラン'},
    {pokemon: 'img/085n.png', cry: 'audio/085.wav', name: 'ドードリオ'},
    {pokemon: 'img/094n.png', cry: 'audio/094.wav', name: 'ゲンガー'},
    {pokemon: 'img/099n.png', cry: 'audio/099.wav', name: 'キングラー'},
    {pokemon: 'img/103n.png', cry: 'audio/103.wav', name: 'ナッシー'},
    {pokemon: 'img/122n.png', cry: 'audio/122.wav', name: 'バリヤード'},
    {pokemon: 'img/123n.png', cry: 'audio/123.wav', name: 'ストライク'},
    {pokemon: 'img/124n.png', cry: 'audio/124.wav', name: 'ルージュラ'},
    {pokemon: 'img/125n.png', cry: 'audio/125.wav', name: 'エレブー'},
    {pokemon: 'img/131n.png', cry: 'audio/131.wav', name: 'ラプラス'},
    {pokemon: 'img/143n.png', cry: 'audio/143.wav', name: 'カビゴン'},
    {pokemon: 'img/149n.png', cry: 'audio/149.wav', name: 'カイリュー'},
    {pokemon: 'img/150n.png', cry: 'audio/150.wav', name: 'ミュウツー'},
    {pokemon: 'img/151n.png', cry: 'audio/151.wav', name: 'ミュウ'},
    {pokemon: 'img/166n.png', cry: 'audio/166.wav', name: 'レディアン'},
    {pokemon: 'img/180n.png', cry: 'audio/180.wav', name: 'モココ'},
    {pokemon: 'img/184n.png', cry: 'audio/184.wav', name: 'マリルリ'},
    {pokemon: 'img/185n.png', cry: 'audio/185.wav', name: 'ウソッキー'},
    {pokemon: 'img/196n.png', cry: 'audio/196.wav', name: 'エーフィ'},
    {pokemon: 'img/197n.png', cry: 'audio/197.wav', name: 'ブラッキー'},
    {pokemon: 'img/198n.png', cry: 'audio/198.wav', name: 'ヤミカラス'},
    {pokemon: 'img/212n.png', cry: 'audio/212.wav', name: 'ハッサム'},
    {pokemon: 'img/242n.png', cry: 'audio/242.wav', name: 'ハピナス'},
    {pokemon: 'img/248n.png', cry: 'audio/248.wav', name: 'バンギラス'},
    {pokemon: 'img/257n.png', cry: 'audio/257.wav', name: 'バシャーモ'},
    {pokemon: 'img/279n.png', cry: 'audio/279.wav', name: 'ペリッパー'},
    {pokemon: 'img/282n.png', cry: 'audio/282.wav', name: 'サーナイト'},
    {pokemon: 'img/286n.png', cry: 'audio/286.wav', name: 'キノガッサ'},
    {pokemon: 'img/302n.png', cry: 'audio/302.wav', name: 'ヤミラミ'},
    {pokemon: 'img/306n.png', cry: 'audio/306.wav', name: 'ボスゴドラ'},
    {pokemon: 'img/320n.png', cry: 'audio/320.wav', name: 'ホエルコ'},
    {pokemon: 'img/321n.png', cry: 'audio/321.wav', name: 'ホエルオー'},
    {pokemon: 'img/334n.png', cry: 'audio/334.wav', name: 'チルタリス'},
    {pokemon: 'img/359n.png', cry: 'audio/359.wav', name: 'アブソル'},
    {pokemon: 'img/376n.png', cry: 'audio/376.wav', name: 'メタグロス'},
    {pokemon: 'img/382n.png', cry: 'audio/382.wav', name: 'カイオーガ'},
    {pokemon: 'img/383n.png', cry: 'audio/383.wav', name: 'グラードン'},
    {pokemon: 'img/384n.png', cry: 'audio/384.wav', name: 'レックウザ'},
    {pokemon: 'img/386Nn.png', cry: 'audio/386.wav', name: 'デオキシス'},
    {pokemon: 'img/393n.png', cry: 'audio/393.wav', name: 'ポッチャマ'},
    {pokemon: 'img/396n.png', cry: 'audio/396.wav', name: 'ムックル'},
    {pokemon: 'img/398n.png', cry: 'audio/398.wav', name: 'ムクホーク'},
    {pokemon: 'img/402n.png', cry: 'audio/402.wav', name: 'コロトック'},
    {pokemon: 'img/405n.png', cry: 'audio/405.wav', name: 'レントラー'},
    {pokemon: 'img/445n.png', cry: 'audio/445.wav', name: 'ガブリアス'},
    {pokemon: 'img/448n.png', cry: 'audio/448.wav', name: 'ルカリオ'},
    {pokemon: 'img/449An.png', cry: 'audio/449.wav', name: 'ヒポポタス'},
    {pokemon: 'img/462n.png', cry: 'audio/462.wav', name: 'ジバコイル'},
    {pokemon: 'img/463n.png', cry: 'audio/463.wav', name: 'ベロベルト'},
    {pokemon: 'img/464n.png', cry: 'audio/464.wav', name: 'ドサイドン'},
    {pokemon: 'img/468n.png', cry: 'audio/468.wav', name: 'トゲキッス'},
    {pokemon: 'img/470n.png', cry: 'audio/470.wav', name: 'リーフィア'},
    {pokemon: 'img/471n.png', cry: 'audio/471.wav', name: 'グレイシア'},
    {pokemon: 'img/473n.png', cry: 'audio/473.wav', name: 'マンムー'},
    {pokemon: 'img/483n.png', cry: 'audio/483.wav', name: 'ディアルガ'},
    {pokemon: 'img/484n.png', cry: 'audio/484.wav', name: 'パルキア'},
    {pokemon: 'img/485n.png', cry: 'audio/485.wav', name: 'ヒードラン'},
    {pokemon: 'img/486n.png', cry: 'audio/486.wav', name: 'レジギガス'},
    {pokemon: 'img/487On.png', cry: 'audio/487.wav', name: 'ギラティナ'},
    {pokemon: 'img/488n.png', cry: 'audio/488.wav', name: 'クレセリア'},
    {pokemon: 'img/491n.png', cry: 'audio/491.wav', name: 'ダークライ'},
    {pokemon: 'img/493An.png', cry: 'audio/493.wav', name: 'アルセウス'},
    {pokemon: 'img/508n.png', cry: 'audio/508.wav', name: 'ムーランド'},
    {pokemon: 'img/527n.png', cry: 'audio/527.wav', name: 'コロモリ'},
    {pokemon: 'img/538n.png', cry: 'audio/538.wav', name: 'ナゲキ'},
    {pokemon: 'img/539n.png', cry: 'audio/539.wav', name: 'ダゲキ'},
    {pokemon: 'img/549n.png', cry: 'audio/549.wav', name: 'ドレディア'},
    {pokemon: 'img/558n.png', cry: 'audio/558.wav', name: 'イワパレス'},
    {pokemon: 'img/571n.png', cry: 'audio/571.wav', name: 'ゾロアーク'},
    {pokemon: 'img/580n.png', cry: 'audio/580.wav', name: 'コアルヒー'},
    {pokemon: 'img/591n.png', cry: 'audio/591.wav', name: 'モロバレル'},
    {pokemon: 'img/609n.png', cry: 'audio/609.wav', name: 'シャンデラ'},
    {pokemon: 'img/612n.png', cry: 'audio/612.wav', name: 'オノノクス'},
    {pokemon: 'img/635n.png', cry: 'audio/635.wav', name: 'サザンドラ'},
    {pokemon: 'img/638n.png', cry: 'audio/638.wav', name: 'コバルオン'},
    {pokemon: 'img/639n.png', cry: 'audio/639.wav', name: 'テラキオン'},
    {pokemon: 'img/640n.png', cry: 'audio/640.wav', name: 'ビリジオン'},
    {pokemon: 'img/641Bn.png', cry: 'audio/641.wav', name: 'トルネロス'},
    {pokemon: 'img/642Bn.png', cry: 'audio/642.wav', name: 'ボルトロス'},
    {pokemon: 'img/643n.png', cry: 'audio/643.wav', name: 'レシラム'},
    {pokemon: 'img/644n.png', cry: 'audio/644.wav', name: 'ゼクロム'},
    {pokemon: 'img/645Bn.png', cry: 'audio/645.wav', name: 'ランドロス'},
    {pokemon: 'img/646n.png', cry: 'audio/646.wav', name: 'キュレム'},
    {pokemon: 'img/647An.png', cry: 'audio/647.wav', name: 'ケルディオ'},
    {pokemon: 'img/648Bn.png', cry: 'audio/648.wav', name: 'メロエッタ'},
    {pokemon: 'img/649An.png', cry: 'audio/649.wav', name: 'ゲノセクト'},
    {pokemon: 'img/655n.png', cry: 'audio/655.wav', name: 'マフォクシー'},
    {pokemon: 'img/658n.png', cry: 'audio/658.wav', name: 'ゲッコウガ'},
    {pokemon: 'img/663n.png', cry: 'audio/663.wav', name: 'ファイアロー'},
    {pokemon: 'img/681Sn.png', cry: 'audio/681.wav', name: 'ギルガルド'},
    {pokemon: 'img/700n.png', cry: 'audio/700.wav', name: 'ニンフィア'},
    {pokemon: 'img/701n.png', cry: 'audio/701.wav', name: 'ルチャブル'},
    {pokemon: 'img/706n.png', cry: 'audio/706.wav', name: 'ヌメルゴン'},
    {pokemon: 'img/709n.png', cry: 'audio/709.wav', name: 'オーロット'},
    {pokemon: 'img/710n.png', cry: 'audio/710.wav', name: 'バケッチャ'},
    {pokemon: 'img/711n.png', cry: 'audio/711.wav', name: 'パンプジン'},
    {pokemon: 'img/716An.png', cry: 'audio/716.wav', name: 'ゼルネアス'},
    {pokemon: 'img/717n.png', cry: 'audio/717.wav', name: 'イベルタル'},
    {pokemon: 'img/718_50n.png', cry: 'audio/718.wav', name: 'ジガルデ'},
    {pokemon: 'img/720n.png', cry: 'audio/720.wav', name: 'フーパ'},
    {pokemon: 'img/721n.png', cry: 'audio/721.wav', name: 'ボルケニオン'},
    {pokemon: 'img/724n.png', cry: 'audio/724.wav', name: 'ジュナイパー'},
    {pokemon: 'img/738n.png', cry: 'audio/738.wav', name: 'クワガノン'},
    {pokemon: 'img/758n.png', cry: 'audio/758.wav', name: 'エンニュート'},
    {pokemon: 'img/763n.png', cry: 'audio/763.wav', name: 'アマージョ'},
    {pokemon: 'img/764n.png', cry: 'audio/764.wav', name: 'キュワワー'},
    {pokemon: 'img/778An.png', cry: 'audio/778.wav', name: 'ミミッキュ'},
    {pokemon: 'img/785n.png', cry: 'audio/785.wav', name: 'カプ・コケコ'},
    {pokemon: 'img/786n.png', cry: 'audio/786.wav', name: 'カプ・テテフ'},
    {pokemon: 'img/787n.png', cry: 'audio/787.wav', name: 'カプ・ブルル'},
    {pokemon: 'img/788n.png', cry: 'audio/788.wav', name: 'カプ・レヒレ'},
    {pokemon: 'img/791n.png', cry: 'audio/791.wav', name: 'ソルガレオ'},
    {pokemon: 'img/792n.png', cry: 'audio/792.wav', name: 'ルナアーラ'},
    {pokemon: 'img/793n.png', cry: 'audio/793.wav', name: 'ウツロイド'},
    {pokemon: 'img/794n.png', cry: 'audio/794.wav', name: 'マッシブーン'},
    {pokemon: 'img/795n.png', cry: 'audio/795.wav', name: 'フェローチェ'},
    {pokemon: 'img/796n.png', cry: 'audio/796.wav', name: 'デンジュモク'},
    {pokemon: 'img/797n.png', cry: 'audio/797.wav', name: 'テッカグヤ'},
    {pokemon: 'img/798n.png', cry: 'audio/798.wav', name: 'カミツルギ'},
    {pokemon: 'img/799n.png', cry: 'audio/799.wav', name: 'アクジキング'},
    {pokemon: 'img/800An.png', cry: 'audio/800.wav', name: 'ネクロズマ'},
    {pokemon: 'img/802n.png', cry: 'audio/802.wav', name: 'マーシャードー'},
    {pokemon: 'img/803n.png', cry: 'audio/803.wav', name: 'ベベノム'},
    {pokemon: 'img/804n.png', cry: 'audio/804.wav', name: 'アーゴヨン'},
    {pokemon: 'img/805n.png', cry: 'audio/805.wav', name: 'ツンデツンデ'},
    {pokemon: 'img/806n.png', cry: 'audio/806.wav', name: 'ズガドーン'},
    {pokemon: 'img/807n.png', cry: 'audio/807.wav', name: 'ゼラオラ'}
//  {pokemon: 'img/.png', cry: 'audio/.wav', name: ''},   
];

function audio() {
    document.getElementById('qu-audio').currentTime = 0; //連続クリックに対応
    document.getElementById('qu-audio').play(); //クリックしたら音を再生
    c1img.onclick = function() { clickHandler(this); }
    c2img.onclick = function() { clickHandler(this); }
    c3img.onclick = function() { clickHandler(this); }
}

let quiz;
let choices;
let roundsPlayed = 0;
let score = 0;
let ulIndex = 0;
let c1img = document.getElementById('c1-img');
let c2img = document.getElementById('c2-img');
let c3img = document.getElementById('c3-img');
let qaudio = document.getElementById('qu-audio');
let judge = document.querySelector('.main .judge');
const next = document.getElementById('js-next');
const $ul = document.getElementsByTagName('ul');

// クイズ情報の初期セットアップ
function setupQuiz() {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    quiz = quizData[randomIndex];
    
    // クイズの情報を画面にセット
    qaudio.src = quiz.cry;
    qaudio.volume = 0.1; // 音量を半分に設定
    
    const choices = [quiz.pokemon];
    while (choices.length < 3) {
        const randomChoiceIndex = Math.floor(Math.random() * quizData.length);
        const randomChoice = quizData[randomChoiceIndex].pokemon;
        if (!choices.includes(randomChoice)) {
            choices.push(randomChoice);
        }
    }
    
    // 選択肢をシャッフル
    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    // 選択肢の画像を更新
    c1img.src = choices[0];
    c2img.src = choices[1];
    c3img.src = choices[2];

    //初期選択肢クリック無効
    c1img.onclick = null;
    c2img.onclick = null;
    c3img.onclick = null;

    //回数追加
    roundsPlayed++;
}

setupQuiz();

// 選択肢を押したときの処理
function clickHandler(clickedImage) {
    const clickedImageSrc = clickedImage.getAttribute('src');
    const filename = clickedImageSrc.split('/').pop();
    //リザルト
    var resultName = document.createElement("li");
    resultName.innerHTML = `<img src="${quiz.pokemon}" width="180" height="180">`;
    $ul[ulIndex].appendChild(resultName);
    var resultChoice = document.createElement("li");
    resultChoice.innerHTML = `<img src="img/${filename}" width="180" height="180">`;
    $ul[ulIndex].appendChild(resultChoice);
    //正解かどうか
    if (filename === quiz.pokemon.split('/').pop()) {
        judge.textContent = '◎';
        score ++;
        var resultScore = document.createElement("li");
        resultScore.innerHTML = '◎';
        $ul[ulIndex].appendChild(resultScore);
    } else {
        judge.textContent = '×';
        var resultScore = document.createElement("li");
        resultScore.innerHTML = '×';
        $ul[ulIndex].appendChild(resultScore);
    }
    ulIndex ++;
    //選択肢クリック無効
    c1img.onclick = null;
    c2img.onclick = null;
    c3img.onclick = null;
    document.getElementById("js-next").style.display ="block";
    //つぎへ関連
    if (roundsPlayed < 10) {
        next.textContent = 'つぎへ';
        next.addEventListener('click', () => {
            setupQuiz();
            //つぎへ 初期非表示
            document.getElementById("js-next").style.display ="none";
            judge.textContent = '';
        });
    } else {
        next.textContent = '終了！'
        document.getElementById('result-score').textContent = `${score}0点でした`
        //結果画面表示
        document.getElementById("js-result").style.display ="block";
        next.addEventListener('click', () => {
        location.reload();
    });
    }
};


//つぎへ 初期非表示
document.getElementById("js-next").style.display ="none";
//けっか画面 初期非表示
document.getElementById("js-result").style.display ="none";



