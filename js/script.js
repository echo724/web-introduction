

function displayMSG() {

    let name = document.getElementById("inputName").value;
    if (name == "") {
        alert("이름을 입력해주세요!");
    } else {
        let msg = "";
        let checkBoxArray = ["flexSwitchCheckDefault-1", "flexSwitchCheckDefault-2", "flexSwitchCheckDefault-3", "flexSwitchCheckDefault-4", "flexSwitchCheckDefault-5"]
        let label = "label-"
        let count = 0;
        checkBoxArray.forEach((element, indx) => {
            if (document.getElementById(element).checked) {
                count += 1;
            }
        });
        //delete last comma in msg
        msg = msg.substring(0, msg.length - 2);
        alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!")
    }
}

function clickSubmit() {
    displayMSG();
}