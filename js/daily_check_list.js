import * as Common from "./common/common_function.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/equipment_daily_check_list.html")
    }

    $('#setsubiIchiran').on('click', 'tbody tr td button', function() {
        Common.movePage("/equipment_daily_check_detail.html")
    })
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
}

window.onload = onLoadAction;