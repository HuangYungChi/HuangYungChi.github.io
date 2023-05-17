let okbtn=document.querySelector("#okBtn");//取得關閉視窗按鈕
let modal=document.querySelector("#modal");//設定灰色遮罩
let dialog=document.getElementById("dialog");//設定彈跳視窗
let prizeImg=document.getElementById("dialog_img");//設定彈跳視窗
let prizeContent = document.getElementById("dialog_content");//設定得獎文字

let prizes = ['一等獎','二等獎','三等獎','再接再厲'];//獎項名稱
let probability = [0.1, 0.15, 0.2, 0.55];//獎項機率
let prizeImgSrc = ['https://huangyungchi.github.io/Jiugongge/gift1.svg', 'https://huangyungchi.github.io/Jiugongge/gift2.svg', 'https://huangyungchi.github.io/Jiugongge/gift3.svg', 'https://huangyungchi.github.io/Jiugongge/cryingface.svg'];//獎項圖片路徑

function Show(){
    setTimeout(modal.showModal(), 1500);//顯示灰色遮罩
    setTimeout(dialog.style.opacity = 100, 1500);//彈跳視窗淡入
}
okbtn.addEventListener("click", function(){
    modal.close();//灰色遮罩關閉
    dialog.style.opacity = 0;//彈跳視窗淡出
});

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
    console.log(final + " " + index);
}
