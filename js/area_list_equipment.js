import * as Common from "./common/common_function.js"

/*****  VIEW VARIABLE  *****/
const areaList = [
    [1, "R01-001", "板金加工エリア", ""],
    [2, "R01-002", "板金加工エリア", ""],
    [3, "R01-003", "組み立て加工エリア", ""]
]

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/menu.html")
    }
    
    $('#eriaIchiran').on('click', 'tbody tr', function() {
        Common.movePage("/equipment_management_list.html")
    })
      
}


/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
    Common.generateTable(areaList,"eriaIchiran")
}

window.onload = onLoadAction;