import * as Common from "./common_function.js"
import * as Mess from "./message.js"
import * as StringCS from "./string.js"

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