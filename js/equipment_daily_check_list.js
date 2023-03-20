import * as Common from "./common/common_function.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/area_list_check.html")
    }

    document.getElementById("setsubiIchiran").onclick = function () {
        Common.movePage("/daily_check_list.html")
    }
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
}

window.onload = onLoadAction;