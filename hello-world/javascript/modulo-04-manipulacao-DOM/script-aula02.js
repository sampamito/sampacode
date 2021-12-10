var p = document.getElementsByTagName('p');

// p - paragrafo html

p[0].innerHTML = p[0].innerHTML + ' já consigo manipular o HTML via Javascript. =)'

for(var i = 0;i < p.length; i++){
    p[i].innerHTML = p[i].innerHTML + ' Manipulado via JS via for! ' + i
}