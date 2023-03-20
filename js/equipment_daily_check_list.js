import * as Common from "./common/common_function.js"

/*****  VIEW VARIABLE  *****/
const equipmentDailyCheckList = [
    [1, "WP1-01", "ガス溶接機", ""],
    [2, "WP1-02", "アーク溶接機", ""],
    [3, "WP1-03", "ティグ溶接機", ""],
    [4, "WP1-04", "ガス溶接機", ""],
    [5, "WP1-05", "アーク溶接機", ""],
    [6, "WP1-06", "ティグ溶接機", ""],
    [7, "WP1-07", "ガス溶接機", ""],
    [8, "WP1-08", "アーク溶接機", ""],
    [9, "WP1-09", "ティグ溶接機", ""],
    [10, "WP1-10", "ガス溶接機", ""],
]

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
    Common.generateTable(equipmentDailyCheckList,"setsubiIchiran")
}

window.onload = onLoadAction;