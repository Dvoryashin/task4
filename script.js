function windowHref(){
    var textWindow = prompt("Вводите текст, чтобы изменялся текст ссылки");
    document.querySelector('#href').innerHTML = textWindow;
}
