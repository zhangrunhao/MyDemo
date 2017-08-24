var money = 18480
var rote = 0.008
for(var i = 0 ; i < 8; i++){
  money = money * (1+rote)
}
console.log(money)