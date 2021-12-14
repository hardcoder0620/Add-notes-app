let addBtn = document.getElementById("addBtn");
console.log(addBtn);
addBtn.addEventListener("click", snd);
let inote = document.getElementById("inputid");
let inx = 1;
let lodiv = document.getElementById("notes");
var srNo = 0;
function snd() {
  let note = inote.value;
  if (Array.from(note).length > 0) {
    localStorage.setItem("note1", note);
    let add = localStorage.getItem("note1");
    let noteelem = document.createElement("div");
    noteelem.className = "not";
    console.log(noteelem);
    let spanid = `idspan${inx}`;
    let notesdiv = document.getElementById("notes");
    srNo = srNo + 1;
    noteelem.innerHTML = ` <h4> <span class='me-2'> ${srNo} </span> ${add}</h4> <span id='${spanid}' onclick="deleted(this.id)" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
  <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
</svg></i></span>`;
    console.log(noteelem);
    console.log(notesdiv);
    notesdiv.appendChild(noteelem);
    inote.value = "";
    inx = inx + 1;
    console.log(Array.from(note).length);
  }
}
function deleted(idd) {
  let deleteddiv = document.getElementById(idd);
  let actualdel = deleteddiv.parentElement;
  actualdel.style.display = "none";
  console.log(actualdel);
  srNo = srNo - 1;
 
}
function clearall(){
  window.location.reload();
}

