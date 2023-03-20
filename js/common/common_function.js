import * as StringCS from "./string.js";
import * as Mess from "./message.js"

/**
   * GENERATE TABLE
*/
function generateTable(listItem, tableName) {
    const table = document.getElementById(tableName);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let i = 0; i < listItem.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < listItem[i].length; j++) {
            const cell = document.createElement("td");
            var span = document.createElement("span");
            span.textContent = listItem[i][j];
            cell.appendChild(span);
            cell.classList.add("text");
            cell.classList.add("text-center");
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
}


/** 
   * BACK ACTION
*/
function backAction() {
    history.back();
}

/**
   * INITIALIZE MODAL
   *
   * @param status     [STRING]
   * @param title     [STRING]
   * @param message     [STRING]
   * @param textButton0     [STRING]
   * @param textButton1     [STRING]
   * @param textButton2     [STRING]
   * @param isClose     [BOOL]
*/

function setupModal(status, title, message, textButton0, textButton1, textButton2, isClose) {
    // init view
    var modal = document.getElementById("myModal");
    var imageModal = document.getElementsByClassName("modal-image")[0];
    var titleModal = document.getElementsByClassName("title-modal")[0];
    var messageModal = document.getElementsByClassName("modal-message-detail")[0];
    var button0 = document.getElementsByClassName("button-0")[0];
    var button1 = document.getElementsByClassName("button-1")[0];
    var button2 = document.getElementsByClassName("button-2")[0];
    var closeButton = document.getElementsByClassName("modal-close-button")[0];

    // title and message
    if (title != null) {
        titleModal.innerHTML = title;
    }
    if (message != null) {
        messageModal.innerHTML = message;
    }

    // status
    if (status == "load") {
        titleModal.style.display = "none";
        imageModal.src = "./imgs/gif/gif_loading_data.gif";
    } else if (status == "success") {
        titleModal.style.display = "none";
        imageModal.src = "./imgs/gif/gif_success.gif";
    } else if (status == "error") {
        titleModal.style.display = "none";
        imageModal.src = "./imgs/gif/gif_fail.gif";
    } else if (status == "question") {
        titleModal.style.display = "none";
        imageModal.src = "./imgs/gif/gif_question.gif";
    } else if (status == "info") {
        titleModal.style.display = "none";
        imageModal.src = "./imgs/gif/gif_info.gif";
    }

    // button
    if (textButton0 != null) {
        button0.style.display = "block";
        button0.innerHTML = textButton0;
        button0.onclick = function () {
            modal.style.display = "none";
        }
    } else {
        button0.style.display = "none";
    }

    if (textButton1 != null) {
        button1.style.display = "block";
        button1.innerHTML = textButton1;
        button1.onclick = function () {
            modal.style.display = "none";
        }
    } else {
        button1.style.display = "none";
    }

    if (textButton2 != null) {
        button2.style.display = "block";
        button2.innerHTML = textButton2;
        button2.onclick = function () {
            modal.style.display = "none";
        }
    } else {
        button2.style.display = "none";
    }

    if (isClose == true) {
        closeButton.style.display = "block";
        closeButton.onclick = function () {
            modal.style.display = "none";
        }
    } else {
        closeButton.style.display = "none";
    }

    modal.style.display = "block";
}

/**
   * MOVING TO ANOTHER PAGE
   *
   * @param page     [STRING]
*/
function movePage(page) {
    window.location.href = page;
}

function setupDatePicker(nameDatePicker) {
    var dpk = document.getElementById(nameDatePicker);
    dpk.setAttribute("readOnly", "true");
    dpk.style.backgroundColor = "White";
}

export {
    backAction, setupModal, movePage, setupDatePicker, generateTable
}