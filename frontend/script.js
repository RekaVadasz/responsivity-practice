const headerComponent = function(title){
    return `
    <header>${title}</header>
    `
}

const sectionComponent = function(id, buttonText, h2Text){
    return `
    <section id="${id}">
        <h2>${h2Text} <span>Hello</span></h2>
        <button>${buttonText}</button>
    </section>
    `
}

const footerComponent = function (){
    return `
    <footer></footer>
    `
}


const loadEvent = function (){
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity practice")); //hozzáadjuk a header-t, a "root" id-jű div ELÉ

    let sections = ""
    for (let i = 1; i < 5; i++) { //csinálunk 4 gombot, mindegyik egy section-ben lesz
        sections += sectionComponent(`id-${i}`, `Button ${i}`, `Subtitle${i}`)
    }

    rootElement.insertAdjacentHTML("beforeend", sections); //hozzáadjuk a fent kreált sections-t a "rot" div zárótagke elé
    rootElement.insertAdjacentHTML("afterend", footerComponent()); //hozzáadjuk a footert a "root" div után, egyelőre üres
}

window.addEventListener("load", loadEvent)