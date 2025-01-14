const initialCellState = {
    fontFamily_data: 'monospace',
    fontSize_data: '14',
    isBold: false,
    isItalic: false,
    textAlign: 'start',
    isUnderlined: false,
    color: '#000000',
    backgroundColor: '#ffffff',
    content: ''
}

let sheetsArray = [];

let activeSheetIndex = -1;

let activeSheetObject = false;

let activeCell = false;


// functionality elments
let fontFamilyBtn = document.querySelector('.font-family');
let fontSizeBtn = document.querySelector('.font-size');
let boldBtn = document.querySelector('.bold');
let italicBtn = document.querySelector('.italic');
let underlineBtn = document.querySelector('.underline');
let leftBtn = document.querySelector('.start');
let centerBtn = document.querySelector('.center');
let rightBtn = document.querySelector('.end');
let colorBtn = document.querySelector('#color');
let bgColorBtn = document.querySelector('#bgcolor');
let addressBar = document.querySelector('.address-bar');
let formula = document.querySelector('.formula-bar');
let downloadBtn = document.querySelector(".download");
let openBtn = document.querySelector(".open");

// grid header ro element
let gridHeader = document.querySelector('.grid-header');

// add header column
let bold = document.createElement('div');
bold.className = 'grid-header-col';
bold.innerText = 'SL. NO.';
gridHeader.append(bold);
for(let i = 65; i<=90; i++){
    let bold = document.createElement('div');
    bold.className = 'grid-header-col';
    bold.innerText = String.fromCharCode(i);
    bold.id = String.fromCharCode(i);
    gridHeader.append(bold);
}


for(let i = 1; i<=100; i++){
    let newRow = document.createElement('div')
    newRow.className = 'row';
    document.querySelector('.grid').append(newRow);

    let bold = document.createElement('div');
    bold.className = 'grid-cell';
    bold.innerText = i;
    bold.id = i;
    newRow.append(bold);

    for(let j = 65; j<=90; j++){
        let cell = document.createElement('div');
        cell.className = 'grid-cell cell-focus';
        cell.id = String.fromCharCode(j) + i;
        cell.contentEditable = true;

        cell.addEventListener('click', (event) => {
            event.stopPropagation();
        })
        cell.addEventListener('focus', cellFocus);
        cell.addEventListener('focusout', cellFocusOut);
        cell.addEventListener('input', cellInput);

        newRow.append(cell);
    }
}

function cellFocus(event){
    let key = event.target.id;
    addressBar.innerHTML = event.target.id;
    activeCell = event.target;

    let activeBg = '#c9c8c8';
    let inactiveBg = '#ecf0f1';

    fontFamilyBtn.value = activeSheetObject[key].fontFamily_data;
    fontSizeBtn.value = activeSheetObject[key].fontSize_data;
    boldBtn.style.backgroundColor = activeSheetObject[key].isBold?activeBg:inactiveBg;
    italicBtn.style.backgroundColor = activeSheetObject[key].isItalic?activeBg:inactiveBg;
    underlineBtn.style.backgroundColor = activeSheetObject[key].isUnderlined?activeBg:inactiveBg;
    setAlignmentBg(key, activeBg, inactiveBg);
    colorBtn.value = activeSheetObject[key].color;
    bgColorBtn.value = activeSheetObject[key].backgroundColor;

    formula.value = activeCell.innerText;

    document.getElementById(event.target.id.slice(0, 1)).classList.add('row-col-focus');
    document.getElementById(event.target.id.slice(1)).classList.add('row-col-focus');
}
function cellInput(){
    let key = activeCell.id;
    formula.value = activeCell.innerText;
    activeSheetObject[key].content = activeCell.innerText;
}
function setAlignmentBg(key, activeBg, inactiveBg){
    leftBtn.style.backgroundColor = inactiveBg;
    centerBtn.style.backgroundColor = inactiveBg;
    rightBtn.style.backgroundColor = inactiveBg;
    if(key){
        document.querySelector('.'+ activeSheetObject[key].textAlign).style.backgroundColor = activeBg;
    }
    else{
        leftBtn.style.backgroundColor = activeBg;
    }
}
function cellFocusOut(event){
    document.getElementById(event.target.id.slice(0, 1)).classList.remove('row-col-focus');
    document.getElementById(event.target.id.slice(1)).classList.remove('row-col-focus');
}
// Function to toggle selection of cells
document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('click', () => {
        // Toggle the selected state of the cell
        cell.classList.toggle('selected');
    });
});


// Function to get the selected range of cells
function getSelectedCells() {
    let selectedCells = [];
    const selectedElements = document.querySelectorAll('.grid-cell.selected');

    selectedElements.forEach(cell => {
        const cellValue = parseFloat(cell.innerText);
        if (!isNaN(cellValue)) {
            selectedCells.push(cellValue);
        }
    });

    return selectedCells;
}

// SUM Function
document.getElementById('sum-btn').addEventListener('click', () => {
    const selectedCells = getSelectedCells();
    const sum = selectedCells.reduce((total, num) => total + num, 0);
    alert(`SUM: ${sum}`);
});

// AVERAGE Function
document.getElementById('average-btn').addEventListener('click', () => {
    const selectedCells = getSelectedCells();
    if (selectedCells.length > 0) {
        const average = selectedCells.reduce((total, num) => total + num, 0) / selectedCells.length;
        alert(`AVERAGE: ${average}`);
    } else {
        alert('Please select some cells with numerical values');
    }
});

// MAX Function
document.getElementById('max-btn').addEventListener('click', () => {
    const selectedCells = getSelectedCells();
    if (selectedCells.length > 0) {
        const max = Math.max(...selectedCells);
        alert(`MAX: ${max}`);
    } else {
        alert('Please select some cells with numerical values');
    }
});

// MIN Function
document.getElementById('min-btn').addEventListener('click', () => {
    const selectedCells = getSelectedCells();
    if (selectedCells.length > 0) {
        const min = Math.min(...selectedCells);
        alert(`MIN: ${min}`);
    } else {
        alert('Please select some cells with numerical values');
    }
});

// COUNT Function
document.getElementById('count-btn').addEventListener('click', () => {
    const selectedCells = getSelectedCells();
    const count = selectedCells.length;
    alert(`COUNT: ${count}`);
});


let isMouseDown = false;
let selectedCells = [];

document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('mousedown', () => {
        isMouseDown = true; // Start selecting cells
        cell.classList.add('selected'); // Add selected class to the clicked cell
        selectedCells.push(cell); // Store the selected cell
    });

    cell.addEventListener('mouseover', () => {
        if (isMouseDown) {
            // If mouse is down, select the cell as we hover
            if (!selectedCells.includes(cell)) {
                cell.classList.add('selected');
                selectedCells.push(cell);
            }
        }
    });

    cell.addEventListener('mouseup', () => {
        isMouseDown = false; // Stop selecting cells when mouse is released
    });
});

// Allow single click selection if not dragging
document.querySelectorAll('.grid-cell').forEach(cell => {
    cell.addEventListener('click', () => {
        if (!isMouseDown) {  // If not dragging, toggle cell selection
            cell.classList.toggle('selected');
            // Ensure we don't add duplicate cells
            if (cell.classList.contains('selected') && !selectedCells.includes(cell)) {
                selectedCells.push(cell);
            } else if (!cell.classList.contains('selected') && selectedCells.includes(cell)) {
                selectedCells = selectedCells.filter(item => item !== cell);
            }
        }
    });
});


// Trim: Removes leading and trailing whitespace
document.getElementById('trim-btn').addEventListener('click', () => {
    selectedCells.forEach(cell => {
        let cellValue = cell.textContent.trim();
        cell.textContent = cellValue;
    });
});

// Uppercase: Converts the text to uppercase
document.getElementById('upper-btn').addEventListener('click', () => {
    selectedCells.forEach(cell => {
        let cellValue = cell.textContent.toUpperCase();
        cell.textContent = cellValue;
    });
});

// Lowercase: Converts the text to lowercase
document.getElementById('lower-btn').addEventListener('click', () => {
    selectedCells.forEach(cell => {
        let cellValue = cell.textContent.toLowerCase();
        cell.textContent = cellValue;
    });
});

// Remove Duplicates: Removes duplicate rows from the selected range
document.getElementById('remove-duplicates-btn').addEventListener('click', () => {
    let rowData = [];
    selectedCells.forEach(cell => {
        let row = cell.parentElement;
        let rowKey = Array.from(row.children).map(cell => cell.textContent).join(',');
        if (!rowData.includes(rowKey)) {
            rowData.push(rowKey);
        } else {
            row.remove();
        }
    });
});

// Find and Replace: Allows users to find and replace text within a range
document.getElementById('find-replace-btn').addEventListener('click', () => {
    const findText = prompt('Enter the text to find:');
    const replaceText = prompt('Enter the replacement text:');
    if (findText !== null && replaceText !== null) {
        selectedCells.forEach(cell => {
            let cellValue = cell.textContent;
            if (cellValue.includes(findText)) {
                cell.textContent = cellValue.replace(new RegExp(findText, 'g'), replaceText);
            }
        });
    }
});
