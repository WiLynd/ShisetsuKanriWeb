import * as Common from "./common_function.js"

/**
   * ONCLICK ACTION
*/
function onclickAction() {
    document.getElementById("zumenKakuninBtn").onclick = function () { 
        Common.movePage('/drawing_search.html') 
    };

    document.getElementById("setsubiKanriBtn").onclick = function () { 
        Common.movePage('/area_list_equipment_management.html') 
    };

    document.getElementById("nichijoTenkenBtn").onclick = function () { 
        Common.movePage('/.html') 
    };
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onclickAction();
}

window.onload = onLoadAction;