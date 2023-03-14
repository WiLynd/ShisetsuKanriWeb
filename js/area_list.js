import * as Common from "./common_function.js"
import * as Mess from "./message.js"
import * as StringCS from "./string.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    console.log(document.getElementById("eriaIchiran").value)
    document.getElementById("eriaIchiran").onclick = function () {
        Common.movePage("/equipment_management_list.html")
    }
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
    console.log(document.getElementById("eriaIchiran").value)
}

window.onload = onLoadAction;