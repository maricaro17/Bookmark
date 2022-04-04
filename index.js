const tabs = Array.prototype.slice.apply(document.querySelectorAll('.tab-item'));
const tabContainer = document.getElementById('tabs');
const tabHighlighter = document.getElementById('highlighter');
const tabsWidth = tabContainer.offsetWidth;



document.documentElement.style.setProperty('--num-tabs', tabs.length);

tabContainer.addEventListener('click', e => {
    if (e.target.classList.contains('tab-item')) {
        let item = tabs.indexOf(e.target);
        tabs.map(tab => tab.classList.remove('active'));
        tabs[item].classList.add('active');

        tabHighlighter.style.transform = `translateX(${(tabsWidth / tabs.length) * item }px)`;
    }
});

function openTab(e, tabName) {

    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += " active";
}

const formContact = document.getElementById("form-contact");
const submitFormContact = (e) => {
    e.preventDefault()
    if (formContact.checkValidity()) {
        console.log("HOLA");
    } else {
        formulario.classList.add("was-validated");
    }
}
formContact.addEventListener("submit", (e) => submitFormContact(e), false)