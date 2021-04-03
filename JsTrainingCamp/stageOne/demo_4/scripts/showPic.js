function showPic(whichPic) {
    let source = whichPic.getAttribute("href"), text = whichPic.getAttribute("title");
    var placeholder = document.getElementById("placeholder"),
        description = document.getElementById("description");

    placeholder.setAttribute("src", source);
    description.firstChild.nodeValue = text;
}

function countBodyChildren(){
    let bodyElement = document.getElementsByTagName("body")[0];
    console.log(bodyElement.childNodes)
    for(let i = 0; i < bodyElement.childNodes.length; i++){
        console.log(i, bodyElement.childNodes[i].nodeName, bodyElement.childNodes[i].nodeType)
    }
}
window.onload = countBodyChildren;