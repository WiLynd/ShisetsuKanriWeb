import * as Common from "./common/common_function.js"

/*****  VIEW VARIABLE  *****/
const equipmentList = [
    [1, "SP1-01", "折り曲げ機", ""],
    [2, "SP1-02", "レーザー加工機", ""],
    [3, "SP1-03", "卓上ボール盤", ""],
    [4, "SP1-04", "折り曲げ機", ""],
    [5, "SP1-05", "レーザー加工機", ""],
    [6, "SP1-06", "卓上ボール盤", ""],
    [7, "SP1-07", "折り曲げ機", ""],
    [8, "SP1-08", "レーザー加工機", ""],
    [9, "SP1-09", "卓上ボール盤", ""],
    [10, "SP1-10", "折り曲げ機", ""],
]

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/area_list_equipment.html")
    }
    
    $('#bankinKakoEria').on('click', 'tbody tr', function() {
        sessionStorage.setItem("equipmentName",equipmentList[this.id][1]);
        sessionStorage.setItem("item",equipmentList[this.id][2]);
        Common.movePage("/equipment_detail.html")
    })
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
    Common.generateTable(equipmentList,"bankinKakoEria");
    document.getElementById("title").innerHTML = sessionStorage.getItem("area");
}

window.onload = onLoadAction;