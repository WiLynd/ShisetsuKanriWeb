import * as Common from "./common/common_function.js"

/*
   * ONCLICK ACTION
*/
function onClickAction () {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/menu.html")
    }
    
    $('#eriaIchiran').on('click', 'tbody tr', function() {

            var row = $(this).closest("tr");
            // var rowId = row.attr("id");
             console.log(row[0].innerText);

        // Common.movePage("/equipment_management_list.html")
    })
      
}


/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
}

window.onload = onLoadAction;