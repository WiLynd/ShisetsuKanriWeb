import * as Common from "./common_function.js"
import * as Mess from "./message.js"
import * as StringCS from "./string.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    // document.getElementById("eriaIchiran").onclick = function () {
    //     Common.movePage("/equipment_management_list.html")
    // }
    $('#eriaIchiran').on('click', 'tbody tr', function() {
        Common.movePage("/equipment_management_list.html")
    })
      
}



/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
}

window.onload = onLoadAction;