// いろんなことを書くJavaScriptファイル


// 朝と夜で景色が変わる
var time = new Date().getHours() // 現在時刻を取得

if(time <= 4 || time >= 18){ // 夜 18時00分〜4時59分
  document.body.background = 'img/night.jpg' // 背景を夜空に
}else{ // 朝 5時〜17時59分
  document.body.background = 'img/sky.jpg' // 背景を青空に
}



// どこかをクリックすると説明文は消える
document.onclick = function(){
	var	div = document.getElementById('only_once') // 説明文のdiv
	if(div){ // #only_onceがあった場合のみ
		div.classList.add('feedout') // フェードアウトさせるクラスを付ける
		//Uncaught TypeError: Cannot read property 'classList' of null at HTMLDocument.document.onclick

	  setTimeout(function(){ // 1秒後に
		  var	container = document.getElementById('only_once').parentElement // その親のcontainer
		  container.removeChild(div) // conteinterからdivを削除
		},1000)
	}
}
