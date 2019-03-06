// 朝と夜で景色が変わる
var time = new Date().getHours() // 現在時刻を取得
if(time <= 4 || time >= 18){ // 夜 18時00分〜4時59分
  document.body.background = 'img/night.jpg' // 背景を夜空に
}else{ // 朝 5時〜17時59分
  document.body.background = 'img/sky.jpg' // 背景を青空に
}