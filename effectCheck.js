let elCheckButton = document.querySelector('#checkButton');
let elInPutA = document.querySelector('#inPutA');
let elInPutB = document.querySelector('#inPutB');


elCheckButton.onclick = handleClick;
function handleClick () {
    if (elInPutA.value === elInPutB.value) {
        alert("일치 합니다.")
    }
    else {
        alert("불일치 합니다.")
    }
}