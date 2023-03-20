import * as Common from "./common/common_function.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/area_list_equipment.html")
    }

    document.getElementById("bankinKakoEria").onclick = function () {
        Common.movePage("/equipment_detail.html")
    }
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
}

window.onload = onLoadAction;