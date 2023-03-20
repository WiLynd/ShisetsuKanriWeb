import * as Common from "./common/common_function.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/menu.html")
    }

    $('#eriaIchiran').on('click', 'tbody tr', function() {
        Common.movePage("/equipment_daily_check_list.html");
    })
      
}



/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
}

window.onload = onLoadAction;