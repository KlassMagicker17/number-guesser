function helpScreen() {
    alert('Think of a number between 1 and 60. If the number you are thinking of is being displayed on screen, then press present. Otherwise, press absent. Repeat for 6 times. the program will attempt to guess your number.');
}
function binaryCounter(placeVal) {
    let arr = [];
    let gap = false;
    for (i = 1; i <= 61; i++) {
        if (i % placeVal === 0) {
            gap = gap ? false : true;
        }
        if (gap) {
            arr.push(i);
        }
    }
    return arr;
}
var CurrentScreen = 0;
var binaryArr = [
    binaryCounter(1),
    binaryCounter(2),
    binaryCounter(4),
    binaryCounter(8),
    binaryCounter(16),
    binaryCounter(32)
]
var presentBoolArr = [];
function tableCreate() {
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 6; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            const randNum = Math.floor(Math.random() * binaryArr[CurrentScreen].length);
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(binaryArr[CurrentScreen][0]));
            binaryArr[CurrentScreen].splice(0, 1);
            tr.appendChild(td)
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)
}
function moveNextScreen(presentBool) {
    var table = document.getElementsByTagName('table')[0];
    table.remove();
    CurrentScreen++;
    presentBoolArr.push(presentBool);
    if (presentBoolArr.length === 6) {
        let FinalAnswer = 0;
        for (i = 0; i < 6; i++) {
            if (presentBoolArr[i]) {
                FinalAnswer += 2 ** (i);
            }
        }
        var body = document.getElementsByTagName('body')[0];

        var bottomHeading = document.createElement('h1');
        bottomHeading.innerHTML = 'Your number is...'
        body.appendChild(bottomHeading);

        var heading = document.createElement('marquee');
        heading.innerHTML = FinalAnswer;
        heading.scrollAmount = '30';
        heading.behavior = 'slide';
        body.appendChild(heading);

        var resetButton = document.createElement('button');
        resetButton.innerHTML = 'Reset...';
        resetButton.classList.add('reseter');
        resetButton.onclick = () => {
            location = location;
        }
        body.appendChild(resetButton);
    } else {
        tableCreate();
    }
}