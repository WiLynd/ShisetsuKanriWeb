import * as Common from "./common_function.js"

/**
   * SET DATA ACTION
*/
function setDataDetail() {
    document.getElementById("controlNumber").value = "WP1CK01";
    document.getElementById("confirm").value = "バルブなどに損傷はないか？";
    document.getElementById("comment").value = "溶接機から異音あり";
    document.getElementById("kontentsu").value = "調整器から小さく「シューシュー」という音が聞こえる" +
        "ここのところガスの減りが速い気がしていた。" +
        "日常点検をした方がよいかもしれない。";
}

/**
   * ONCLICK ACTION
*/
function onClickAction() {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/daily_check_list.html")
    }

    document.getElementById("torokuBtn").onclick = function () {
        Common.movePage("/menu.html")
    }
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
    setDataDetail();
}

window.onload = onLoadAction;