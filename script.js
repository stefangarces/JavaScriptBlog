/*
Jag fick börja debugga direkt när jag försökte köra min JS-kod, ingenting hände och jag bantade ner koden till så simpel kod som möjligt, inget hände fortfarande.
Jag använde mig av chrome's debugger (inspect>source), så när jag inte lyckades få JS-koden att köra, så satte jag ut breakpoints och körde om sidan. Då upptäckte jag
efter ett tag att jag hade missat att sätta länken till JS koden <script src="script.js"></script>, sist på HTML sidan, precis innan </body> & </html>. JS-koden hann antaligen
försöka köra sin kod innan html koden hade körts, så då blev det en bugg.

Jag trodde i början att jag kunde "kopiera" av min första blogpost rakt av genom att ta hela .container och duplikera den, men märkte snabbt att så funkar det inte. Behövdes ingen
debugg för att komma fram till det, så jag började lägga till element efter element som är i .container, och då fick jag det att fungera. Men även om alla element var på plats så var
det ingen CSS-style kopplat till elementen. CSS-style:en fick jag när jag la till det via ".classList.add(...)".

Användaren kan skriva blogginlägg på sidan, med hjälp av "contenteditable" på texterna i blogposten. Användaren kan även välja att lägga till inlägg via "add post" (buttonAdd.addEventListener),
och ta bort via "remove post" ett inlägg i taget (buttonRemove.addEventListener).
*/

// variables for add and remove ID's.
const buttonAdd = document.querySelector("#add");
const buttonRemove = document.querySelector("#remove");
// variable for the "big container", where the blogpost's will be added to.
const post = document.querySelector(".container");

// event listener, "click" for the "Add post" button.
buttonAdd.addEventListener("click", function() {

    // creates all the elements for the blogpost.
    const container = document.createElement("div")
    const outerDiv = document.createElement("div");
    const innerDiv = document.createElement("div");
    const title = document.createElement("h3");
    const paragraph = document.createElement("p")

    // random lorem text created as variable.
    const titleText = document.createTextNode("Blog title here...");
    const paragraphText = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae rem ipsum dolor quod, a repellendus aspernatur, ad vero incidunt dicta dolores eveniet officia esse laboriosam nisi magnam obcaecati quidem?")

    // add's the random lorem variable to the title and paragraph.
    title.appendChild(titleText);
    paragraph.appendChild(paragraphText);

    // add's the style to the blogpost's.
    innerDiv.classList.add("blogframe");
    innerDiv.classList.add("h3");
    innerDiv.classList.add("p");

    // makes the content editable.
    title.contentEditable = 'true'
    paragraph.contentEditable = 'true'

    // add's the title, paragraph, innerdiv and outerdiv in the right place.
    innerDiv.appendChild(title);
    innerDiv.appendChild(paragraph);
    outerDiv.appendChild(innerDiv);
    container.appendChild(outerDiv);

    // put's the content in the "flex-container", and makes the blogpost's place straight under eachother.
    outerDiv.classList.add("flex-container"); 

    // the code where the blogpost's finally get posted.
    post.append(container);

})
// event listener, "click" for the "remove post" button.
buttonRemove.addEventListener("click", function() {

    // removes everything inside ".flex-container", outerDiv, innerDiv, title and paragraph.
    let container = document.querySelector(".flex-container")
    container.remove();
})