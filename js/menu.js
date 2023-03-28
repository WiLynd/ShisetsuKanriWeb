import * as Common from "./common/common_function.js"

/**
   * ONCLICK ACTION
*/
function onclickAction() {
    document.getElementById("logoutOption").onclick = function () {
        Common.movePage('login.html')
    }

    document.getElementById("zumenKakuninBtn").onclick = function () { 
        Common.movePage('/drawing_search.html') 
    };

    document.getElementById("setsubiKanriBtn").onclick = function () { 
        Common.movePage('/area_list_equipment.html') 
    };

    document.getElementById("nichijoTenkenBtn").onclick = function () { 
        Common.movePage('/area_list_check.html') 
    };
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onclickAction();
}

window.onload = onLoadAction;