let origin = 0;//設定轉盤角度
let btn=document.querySelector("#btn");//取得抽獎按鈕
let okbtn=document.querySelector("#okBtn");//取得關閉視窗按鈕
let modal=document.querySelector("#modal");//設定灰色遮罩
let dialog=document.getElementById("dialog");//設定彈跳視窗
let prizeImg=document.getElementById("dialog_img");//設定彈跳視窗
let prizeContent = document.getElementById("dialog_content");//設定得獎文字

let prizes = ['一等獎','二等獎','三等獎','再接再厲'];//獎項名稱
let probability = [0.1, 0.15, 0.2, 0.55];//獎項機率
let prizeImgSrc = ['/gift1.svg', '/gift2.svg', '/gift3.svg', '/cryingface.svg'];//獎項圖片路徑

let num = 6;//設定轉盤禮物盒數量
let diameter = 300;
let width = 0;
let deg = 360 / num;//依禮物盒數量計算角度
width = diameter * Math.tan((deg/2) * Math.PI/180);//計算扇形長度


btn.addEventListener("click", function(){
    setTimeout(function(){modal.showModal();}, 1500);//顯示灰色遮罩
    setTimeout(function(){dialog.style.opacity = 100;}, 1500);//彈跳視窗淡入
});
okbtn.addEventListener("click", function(){
    modal.close();//灰色遮罩關閉
    dialog.style.opacity = 0;//彈跳視窗淡出
});
//.fan-blade設定尺寸
let $ = function(selector){
    return document.querySelectorAll(selector)
}

$('.fan-blade').forEach(e=>{
    e.style.width = width + 'px'
})

//控制轉盤旋轉
function drawPrize(){
    let rnd = Math.floor(Math.random()*30+30);
    let turntable = document.getElementById('turntable');
    origin = origin+rnd*60;
    turntable.style.transform = 'rotate('+origin+'deg)';
}

//隨機取得一個獎項
function Prize(){
    let final = Math.floor(Math.random()*100);
    let lickbox = [];
    // 放入籤筒
    for (let i = 0; i < prizes.length; i++)
    {
        for(let j = 0; j < probability[i]*100; j++)
        {
            lickbox.push(prizes[i]);
        }
    }

    prizeContent.textContent = lickbox[final];
    let index = prizes.indexOf(lickbox[final]);//以獎項名稱取得prizes的index
    prizeImg.src = prizeImgSrc[index];//用index取的對應圖片路徑
}
