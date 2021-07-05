const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const h2 = document.querySelector("h2");
const th = document.querySelectorAll("th");
const table = document.querySelector("table");


// text content
h1.innerHTML = "JavaScript Keyboard Events";
h2.innerHTML = "Press any Key";
h3.innerHTML = "&#9888; This demo works only with the physical Keyboard &#9000;";
const headingTable = ["Key Code", "Key", "Caps Lock", "Ctrl Key", "Shift Key", "Meta Key"];
for(let i = 0; i < headingTable.length; i++){
    th[i].innerHTML = headingTable[i];
}

window.addEventListener("keydown", (event) => {
  const row = table.insertRow(1);
        let cell0 = row.insertCell(0);
        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        let cell3 = row.insertCell(3);
        let cell4 = row.insertCell(4);
        let cell5 = row.insertCell(5);
        let cell6 = row.insertCell(6);

        // content
        cell0.innerHTML = event.keyCode;
        cell1.innerHTML = event.key;

        if(cell0.innerHTML == 32){
          cell1.innerHTML = "Spacebar";
        };
        if(event.getModifierState("CapsLock")){
          cell2.innerHTML = true;
        };
        if(event.ctrlKey){
          cell3.innerHTML = true;
        };
        if(event.shiftKey){
          cell4.innerHTML = true;
        };
        if(event.metaKey){
          cell5.innerHTML = true;
        };
});

