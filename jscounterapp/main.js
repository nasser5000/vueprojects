let count = 0
const addbutton = document.getElementById('addbutton');
const subbutton = document.getElementById('subbutton');
const countHeader = document.getElementById('countheader');

countHeader.innerText = count


addbutton.addEventListener('click',() => {
    count++;
    countHeader.innerText = count
});

subbutton.addEventListener('click',() => {
    count--;
    if(count < 0 ){
        count = 0
    }
    countHeader.innerText = count

});