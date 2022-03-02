document.getElementById("upper-case").addEventListener("click", function(){
    let text = document.getElementById("text");
    document.getElementById("text").value = text.value.toUpperCase();
})

document.getElementById("lower-case").addEventListener("click", function(){
    let text = document.getElementById("text");
    document.getElementById("text").value = text.value.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click", function(){

    let text = document.getElementById("text");
    document.getElementById("text").value = text.value.toLowerCase();

    let arr = text.value.split(" ");
    text.value = "";

    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        text.value += arr[i]+" ";
    }
    text.value = text.value.trim()
    document.getElementById("text").value = text.value;
})

document.getElementById("sentence-case").addEventListener("click", function(){
    let text = document.getElementById("text");
    document.getElementById("text").value = text.value.toLowerCase();

    let arr = text.value.split(". ");
    text.value = "";

    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        text.value += arr[i]+". ";
    }
    text.value = text.value.trim().substring(0,text.value.trim().length - 1);
    document.getElementById("text").value = text.value;
})

document.getElementById("save-text-file").addEventListener("click", function(){
    let text = document.getElementById("text");
    let filename = "text.txt";
    download(filename, text.value);

})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}