// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", report);
function report(event) {
    event.preventDefault();
    let img = document.querySelector("#image").value;
    let name = document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = document.querySelector("#dsa").value;
    let skilathon = document.querySelector("#cs").value;
    let coding = document.querySelector("#coding").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let image = document.createElement("img");
    image.src = img;
    td1.append(image);

    let td2 = document.createElement("td");
    td2.innerText = name;
    let td3 = document.createElement("td");
    td3.innerText = batch;
    let td4 = document.createElement("td");
    td4.innerText = dsa;
    let td5 = document.createElement("td");
    td5.innerText = skilathon;
    let td6 = document.createElement("td");
    td6.innerText = coding;
    let td7 = document.createElement("td");
    let total = (Number(coding) + Number(skilathon) + Number(dsa)) / 30 * 100;
    td7.innerText = total.toFixed(2);
    let td8 = document.createElement("td");
    if (total >= 50) {
        td8.innerText = "Regular";
        td8.style.color = "green";
    } else if (total < 50) {
        td8.innerText = "Async";
        td8.style.color = "red"
    }
    let td9 = document.createElement("td");
    td9.innerText = "Delete";

    td9.style.color = "white";
    td9.style.backgroundColor = "red";

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    document.querySelector("tbody").append(tr);
    tr.remove();



} 