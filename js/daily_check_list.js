import * as Common from "./common/common_function.js"
import * as StringCS from "./common/string.js"

/*****  VIEW VARIABLE  *****/
const dailyCheckList = [
    [1, "WP1CK01", "外観検査", "ホース継手台およびパイプにひび割れや腐食はないか？", "はい", ""],
    [2, "WP1CK02", "外観検査", "バルブなどに損傷はないか？", "はい", ""],
    [3, "WP1CK03", "火炎の状態", "切断酸素気流は正常か？", "いいえ", ""],
];

/**
   * GENERATE TABLE
*/
function generateTable(listItem) {
    const table = document.getElementById("setsubiIchiran");
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let i = 0; i < listItem.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < listItem[i].length; j++) {
            const cell = document.createElement("td");
            var span = document.createElement("span");
            var div = document.createElement("div");
            var input = document.createElement("input");
            var label = document.createElement("label");
            var button = document.createElement("button");
            if (j < listItem[i].length - 2) {    
                if ( j == listItem[i].length-3) {
                    cell.onclick = function () {
                        Common.setupModal("info", null,listItem[i][j], null, StringCS.OK, null, false);
                    }
                } 
                span.textContent = listItem[i][j];
                cell.appendChild(span);
                cell.classList.add("text-center");
                cell.classList.add("text");
                row.appendChild(cell);
            }
            else {
                if (j == listItem[i].length - 2) {
                    var divLabel = document.createElement("div");
                    divLabel.classList.add("can-toggle__switch");
                    divLabel.setAttribute("data-checked","はい");
                    divLabel.setAttribute("data-unchecked","いいえ");
                    if (listItem[i][j] == "はい") {
                        label.appendChild(divLabel);
                    }
                    else {
                        input.setAttribute("checked","");
                        label.appendChild(divLabel);
                    }
                    label.setAttribute("for",listItem[i][0])
                    input.setAttribute("id",listItem[i][0]);
                    input.setAttribute("type","checkbox");
                    div.classList.add("can-toggle");
                    div.classList.add("can-toggle--size-large");
                    cell.appendChild(div);
                    div.appendChild(input);
                    div.appendChild(label);
                    row.appendChild(cell);
                }       
                else {
                    button.id = i;
                    button.append("詳細");
                    button.classList.add("btn");
                    button.classList.add("btn-default");
                    button.classList.add("detail-btn");
                    cell.appendChild(button);
                    row.appendChild(cell);
                }         
            }
        }
        row.id = i;
        tbody.appendChild(row);
    }
}

/*
   * ONCLICK ACTION
*/
function onClickAction() {
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/equipment_daily_check_list.html")
    }

    document.getElementById("torokuBtn").onclick = function () {
        Common.movePage("/menu.html")
    }

    $('#setsubiIchiran').on('click', 'tbody tr td button', function () {
        sessionStorage.setItem("inspectionDetail",dailyCheckList[this.id][3]);
        sessionStorage.setItem("controlNumber",dailyCheckList[this.id][1]);
        Common.movePage("/equipment_daily_check_detail.html");
    })
}

/*
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
    generateTable(dailyCheckList);
    document.getElementById("title").innerHTML = sessionStorage.getItem("area") + "　＞　" + sessionStorage.getItem("item");
}

window.onload = onLoadAction;