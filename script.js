let head = document.getElementById("header");
let body = document.getElementById("body");
let activeCell = null;
const defaultOptionState = {
  
  isBoldSelected: false,
  isItalicSelected: false,
  isUnderlinedSelected: false,
  textAlign: "left",
  textColor: "#000",
  backgroundColor: "#fff",
  fontSize: 14,
};

let activeOptionState = {...defaultOptionState};
let activeCellElement = document.getElementById("active-cell");
let computedStyleOfActiveCell;
for (let i = 65; i <= 90; i++) {
  let alpha = String.fromCharCode(i);
  let bold = document.createElement("b");
  bold.innerText = alpha;
  bold.setAttribute("id", "alpha");
  head.appendChild(bold);
}

// Now we have to insert all columns 26+1 columns in one row.

// For that we have to implement loop

function appendRow(rowNumber) {
  const row = document.createElement("div");
  row.className = "row";
  for (let i = 64; i <= 90; i++) {
    if (i === 64) {
      //
      let b = document.createElement("b");
      b.innerText = rowNumber;
      row.appendChild(b);
    } else {
      //
      let cell = document.createElement("div");
      cell.setAttribute("id", `${String.fromCharCode(i)}${rowNumber}`);
      cell.setAttribute("class", "input-cell");
      cell.contentEditable = true;
      cell.addEventListener("focus", onCellFocus);
      //   cell.style.overflowY = "scroll";
      row.appendChild(cell);
    }
  }
  body.appendChild(row);
}

for (let i = 1; i <= 100; i++) {
  appendRow(i);
}

function onCellFocus(e) {
  activeCell = e.target;
  
  activeCellElement.innerText = e.target.id;
   computedStyleOfActiveCell = getComputedStyle(activeCell);
   console.log(computedStyleOfActiveCell);

   activeOptionState = {
  
    isBoldSelected: computedStyleOfActiveCell.fontWeight === "600",
    isItalicSelected: computedStyleOfActiveCell.fontStyle === "italic",
    isUnderlinedSelected: computedStyleOfActiveCell.textDecoration === "underlined",
    textAlign: computedStyleOfActiveCell.textAlign,
    textColor: computedStyleOfActiveCell.color,
    backgroundColor: computedStyleOfActiveCell.backgroundColor,
    fontSize: computedStyleOfActiveCell.fontSize,
  };
}





 

function makeTextBold(boldBtn) {
  boldBtn.classList.toggle("active-option");
  if (activeCell) {
    activeOptionState;
    console.log(activeCell);
    //const fontWeight = getComputedStyle(activeCell).fontWeight;
    if (activeOptionState.isBoldSelected === false) {
      activeCell.style.fontWeight = "600";
      
    } else {
      activeCell.style.fontWeight = "300";
      
    }
    activeOptionState.isBoldSelected = !activeOptionState.isBoldSelected
  }
}

function makeTextItalic(italicBtn) {
  italicBtn.classList.toggle("active-option");
  if (activeCell) {
    activeOptionState;
    console.log(activeCell);
    //const fontWeight = getComputedStyle(activeCell).fontWeight;
    if (activeOptionState.isItalicSelected) {
      activeCell.style.fontStyle = "normal";
      
    } else {
      activeCell.style.fontStyle = "italic";
      
    }
    activeOptionState.isItalicSelected = !activeOptionState.isItalicSelected;
  }
}

function makeTextUnderlined(underlineBtn) {
  underlineBtn.classList.toggle("active-option");
  if (activeCell) {
    activeOptionState;
    console.log(activeCell);
    //const fontWeight = getComputedStyle(activeCell).fontWeight;
    if (activeOptionState.isUnderlinedSelected) {
      activeCell.style.textDecoration = "auto";
      
    } else {
      activeCell.style.textDecoration = "underline";
      
    }
    activeOptionState.isUnderlinedSelected = !activeOptionState.isUnderlinedSelected;
  }
}
