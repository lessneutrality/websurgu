const boxes = [
    {
        width: 100,
        height: 90
    },
    {
        width: 140,
        height: 60
    },
    {
        width: 230,
        height: 75
    }
];

function ObjToHTML(obj) {
    const MainElem = document.createElement("div")
    MainElem.classList.add("box")


    MainElem.style.width = `${obj.width}px`
    MainElem.style.height = `${obj.height}px`

    return MainElem
}

for (let i = 0; i < boxes.length; i++) {
    const CurrBoxHTML = ObjToHTML(boxes[i]);
    main.appendChild(CurrBoxHTML);
}