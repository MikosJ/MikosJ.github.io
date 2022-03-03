document.getElementById("upper-case").addEventListener("click", function(){
    let tresc = document.getElementById("text");
    document.getElementById("text").value = tresc.value.toUpperCase();
})

document.getElementById("lower-case").addEventListener("click", function(){
    let tresc = document.getElementById("text");
    document.getElementById("text").value = tresc.value.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click", function(){

    let tresc = document.getElementById("text");
    document.getElementById("text").value = tresc.value.toLowerCase();

    let tablica = tresc.value.split(" ");
    tresc.value = "";

    for (let i = 0; i < tablica.length; i++){
        tablica[i] = tablica[i].charAt(0).toUpperCase() + tablica[i].slice(1);
        tresc.value += tablica[i]+" ";
    }
    tresc.value = tresc.value.trim()
    document.getElementById("text").value = tresc.value;
})

document.getElementById("sentence-case").addEventListener("click", function(){
    let tresc = document.getElementById("text");
    document.getElementById("text").value = tresc.value.toLowerCase();

    let tablica = tresc.value.split(". ");
    tresc.value = "";

    for (let i = 0; i < tablica.length; i++){
        tablica[i] = tablica[i].charAt(0).toUpperCase() + tablica[i].slice(1);
        tresc.value += tablica[i]+". ";
    }
    tresc.value = tresc.value.trim().substring(0,tresc.value.trim().length - 1);
    console.log(tresc.value);
    document.getElementById("text").value = tresc.value;
})

document.getElementById("save-text-file").addEventListener("click", function(){
    let tresc = document.getElementById("text");
    let filename = "text.txt";
    download(filename, tresc.value);

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