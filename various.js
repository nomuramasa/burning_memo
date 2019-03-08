// いろんなことを書くJavaScriptファイル


// 朝と夜で景色が変わる
var time = new Date().getHours() // 現在時刻を取得

if(time <= 4 || time >= 18){ // 夜 18時00分〜4時59分
  document.body.background = 'img/night.jpg' // 背景を夜空に
}else{ // 朝 5時〜17時59分
  document.body.background = 'img/sky.jpg' // 背景を青空に
}



// 最初にどこかをクリックすると説明文は消える
var first_balloon = 1 // 説明文フラグ　最初はある=1
document.onclick = function(){
	var	div = document.getElementById('only_once') // 説明文のdiv
	if(first_balloon == 1){ // 説明文がある場合のみ
		first_balloon = 0 // 説明文フラグをなくす=0  もしこれを下の方に記述すると消えてる途中にクリックでエラー
		div.classList.add('feedout') // スゥッと消すためのクラスを付ける

	  setTimeout(function(){ // 1秒後に
		  var	container = document.getElementById('only_once').parentElement // その親のcontainer
		  container.removeChild(div) // conteinterからdivを削除
		},1000)
	}
}
