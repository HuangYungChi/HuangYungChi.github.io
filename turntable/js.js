//控制轉盤旋轉
function drawPrize(){
    var rnd = Math.floor(Math.random()*50+50)
    var turntable = document.getElementById('turntable')
    turntable.style.transform = 'rotate('+rnd*60+'deg)'
}
let btn=document.querySelector("#btn");
let okbtn=document.querySelector("#okBtn");
let modal=document.querySelector("#modal");
let prizeContent = document.getElementById("dialog_content");
btn.addEventListener("click", function(){
    setTimeout(function(){modal.showModal();}, 1500);
});
okbtn.addEventListener("click", function(){
    modal.close();
});
//.fan-blade設定尺寸
let $ = function(selector){
    return document.querySelectorAll(selector)
}

let num = 6
let diameter = 300

let width = 0
let deg = 360 / num

width = diameter * Math.tan((deg/2) * Math.PI/180)

$('.fan-blade').forEach(e=>{
    e.style.width = width + 'px'
})

//隨機取得一個獎項
function Prize(){
    const prizes = ['一等獎','二等獎','三等獎','再接再厲']
    var probability = [0.02, 0.05, 0.07, 0.86]
    var final = Math.floor(Math.random()*100)
    console.log("顯示modal")
    if(final <= 2)
    {
        prizeContent.textContent = "恭喜獲得" + prizes[0]
        //alert(prizes[0])
    }
    else if(final <= 5)
    {
        prizeContent.textContent = "恭喜獲得" + prizes[1]
        //alert(prizes[1])
    }
    else if(final <= 7)
    {
        prizeContent.textContent = "恭喜獲得" + prizes[2]
        //alert(prizes[2])
    }
    else
    {
        prizeContent.textContent = prizes[3]
        //alert(prizes[3])
    }
}
