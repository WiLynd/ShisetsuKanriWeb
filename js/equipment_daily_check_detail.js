import * as Common from "./common/common_function.js"
import * as Mess from "./common/message.js"
import * as StringCS from "./common/string.js"

/**
   * SET DATA ACTION
*/
function setDataDetail() {
    document.getElementById("controlNumber").value = sessionStorage.getItem("controlNumber");
    document.getElementById("confirm").innerHTML = sessionStorage.getItem("inspectionDetail");
    document.getElementById("comment").value = "溶接機から異音あり";
    document.getElementById("kontentsu").innerHTML = "調整器から小さく「シューシュー」という音が聞こえる <br>" +
        "ここのところガスの減りが速い気がしていた。<br>" +
        "日常点検をした方がよいかもしれない。";
    if (sessionStorage.getItem("status") == "いいえ") {
        document.getElementById("status").setAttribute("checked","");
    }
}

/**
   * UPLOAD PICTURE ACTION
*/
function uploadPicture() {
    var uploader = document.createElement('input'),
        image = document.getElementById('img-result');
 
    uploader.type = 'file';
    uploader.accept = 'image/*';
    uploader.click();
    uploader.onchange = function () {
        var reader = new FileReader();
        reader.onload = function (evt) {
            image.classList.remove('no-image');
            image.style.backgroundImage = 'url(' + evt.target.result + ')';
            var request = {
                itemtype: 'test 1',
                brand: 'test 2',
                images: [{
                    data: evt.target.result
                }]
            };
        }
        reader.readAsDataURL(uploader.files[0]);
    }
 }

/**
   * ONCLICK ACTION
*/
function onClickAction() {
    document.getElementById("logoutOption").onclick = function () {
        Common.movePage('login.html')
    }
    
    document.getElementById("backBtn").onclick = function () {
        Common.movePage("/daily_check_list.html");
    }

    document.getElementById("memoTsuikaBtn").onclick = function () {
        if (document.getElementById("status").hasAttribute("checked")) {
            sessionStorage.setItem("status","いいえ");
        }
        else {
            sessionStorage.setItem("status","はい");
        }
        
        Common.setupModal("success", null, Mess.I00003, null, StringCS.OK, null, false);
        document.getElementById("buttonAreaModal").onclick = function () {
            Common.movePage("/daily_check_list.html");
        }
    }

    document.getElementById("img-result").onclick = function () {
        uploadPicture();
     }
}

/**
   * ONLOAD ACTION
*/
function onLoadAction() {
    onClickAction();
    setDataDetail();
}

window.onload = onLoadAction;