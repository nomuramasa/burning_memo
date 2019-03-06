// いろんなことを書くJavaScriptファイル


// 朝と夜で景色が変わる
var time = new Date().getHours() // 現在時刻を取得

if(time <= 4 || time >= 18){ // 夜 18時00分〜4時59分
  document.body.background = 'img/night.jpg' // 背景を夜空に
}else{ // 朝 5時〜17時59分
  document.body.background = 'img/sky.jpg' // 背景を青空に
}


// 最初の説明文
document.addEventListener('DOMContentLoaded', function(event) { 
  if (sessionStorage.getItem('visited') == null) { // sessionにvisitedがまだ無いとき（つまりこのタブで最初のアクセスのとき）
    document.getElementById('only_once').classList.add('d-block'); // 表示クラスを付ける
    // document.getElementById('only_once').classList.remove('d-none'); //消すクラスをなくす
    sessionStorage.setItem('visited', 1) // フラグを立てる
  }
});

// どこかをクリックすると説明文は消える
// document.onclick=function(){
//   var	div = document.getElementById('only_once') // 説明文のdiv
// 	div.classList.add('feedout') // フェードアウトさせるクラスを付ける
// 	//Uncaught TypeError: Cannot read property 'classList' of null at HTMLDocument.document.onclick
//   var	container = document.getElementById('only_once').parentElement // その親のcontainer
//   setTimeout(function(){ // 1秒後に
// 	  container.removeChild(div) // conteinterからdivを削除
// 	  // $('#only_once').slideUp(1000)
// 	},1000)
// }

document.onclick=function(){

var box = document.getElementById('only_once') ;  
     
// #box のコピーを作る
var copyBox = box.cloneNode(true);
// #box の親ノードに挿入
box.parentNode.appendChild(copyBox);
// ひとまずみえなくする
copyBox.style.cssText = "display:block; height:auto; visibility:hidden; " ;
// コピーの高さを調べる
var copyBoxH = copyBox.offsetHeight;
// コピーした要素を削除する
box.parentNode.removeChild(copyBox);
 
// ボタンをクリックした時の処理
// btn.onclick = function(){
    var boxH = box.offsetHeight;
    // if(boxH < 1){
        // box.style.display = "block";
        slideUp(boxH);
    // } else {

// スライドアップのアニメーション
// console.log(boxH)
var slideUp_timer;
function slideUp(boxH){
    if (boxH > 1) {
        var boxH = boxH - 3;
        box.style.height = boxH + "px";
        slideUp_timer = setTimeout(function(){slideUp(boxH)}, 5);
    } else {
        clearTimeout(slideUp_timer);
        box.style.height = 0;
        box.style.display = "none";
    }       
}

}