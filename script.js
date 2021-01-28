const knapp = document.querySelector(".add");
const post = document.querySelector(".container");

knapp.addEventListener("click", function(){

    const container = document.createElement("container")
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p");

    const titleText = document.createTextNode("Blog title here...");
    const paragraphText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae rem ipsum dolor quod, a repellendus aspernatur, ad vero incidunt dicta dolores eveniet officia esse laboriosam nisi magnam obcaecati quidem?")

    title.appendChild(titleText);
    paragraph.appendChild(paragraphText);

    innerDiv.classList.add("blogframe");
    innerDiv.classList.add("h3");
    innerDiv.classList.add("p");

    title.contentEditable = 'true'
    paragraph.contentEditable = 'true'

    innerDiv.appendChild(title);
    innerDiv.appendChild(paragraph);
    outerDiv.appendChild(innerDiv);
    container.appendChild(outerDiv);

    outerDiv.classList.add("flex-container");

    post.append(container);
})

// 'addClick' function, to add a number to the "counter" when the user click on the plus button to add another blogpost.
// Had a bug in the beginning. I could only add up to number "1", but that was because the "var clickPlus = 0;"
// was inside the function, and that made the function add the value "0" when the function was running.
// const counter = document.getElementById("counter");
    
var clickPlus = 0;
function addClick() {
    clickPlus += 1;
    document.getElementById("counter").innerHTML = clickPlus;
}

function removeClick() {
    clickMinus = clickPlus -1;
    document.getElementById("counter").innerHTML = clickMinus;
}