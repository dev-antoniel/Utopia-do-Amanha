function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.left === "-13vw" || menu.style.left === '') {
        menu.style.left = "0";
    } else {
        menu.style.left = "-13vw";
    }
}

let drops = {
    1: "off",
    2: "off",
    3: "off",
    4: "off",
    5: "off",
    6: "off",
    7: "off",
    8: "off",
};

function toggleDrop(id) {
    let header = document.getElementById("p" + id);
    let content = document.getElementById("top" + id);

    if (drops[id] === "off") {
        header.style.display = "block";
        content.style.borderRadius = "15px 15px 0 0";
        drops[id] = "on";
    } else {
        header.style.display = "none";
        content.style.borderRadius = "15px";
        drops[id] = "off";
    }
}

function home() {
    window.location.href = "../index.html";
}

function nomeArquivo(input) {
    if (input.files && input.files.length > 0) {
        document.querySelector('.fa-check').style.display = 'block';
    }
}