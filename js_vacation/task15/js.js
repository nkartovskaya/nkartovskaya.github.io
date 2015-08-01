/**
 * Created by ProFi on 27.07.2015.
 */
function createTable() {
    var newElement = document.createElement("table");
    newElement.border = 1;
    var i;
    for (i = 0; i < 10; i++) {
        var newRow = newElement.insertRow(i);
        var newCell = newRow.insertCell(0);
        newCell.width = "200";
        newCell.align = "center";
        newCell.innerHTML = 10-i;
        document.body.appendChild(newElement);
    }
}