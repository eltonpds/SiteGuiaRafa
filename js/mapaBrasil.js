let info = document.getElementById('info');
let estados = document.getElementById('estados');
let mapaBrasil = document.getElementById('mapaBrasil');

let coordenadas = [{
        "id": 0,
        "nome": "Pará",
        "sigla": "PA",
        "url": "../videos/BelemPA.mp4"
    },
    {
        "id": 1,
        "nome": "Pernambuco",
        "sigla": "PE",
        "url": ""
    },
    {
        "id": 2,
        "nome": "Paraíba",
        "sigla": "PB",
        "url": "../videos/AreiaPB.mp4"
    },
    {
        "id": 3,
        "nome": "Rio Grande do Norte",
        "sigla": "RN",
        "url": ""
    },
    {
        "id": 4,
        "nome": "Alagoas",
        "sigla": "AL",
        "url": ""
    },
    {
        "id": 5,
        "nome": "Minas Gerais",
        "sigla": "MG",
        "url": ""
    },
    {
        "id": 6,
        "nome": "Ceará",
        "sigla": "CE",
        "url": ""
    },
    {
        "id": 7,
        "nome": "Bahia",
        "sigla": "BA",
        "url": ""
    },
    {
        "id": 8,
        "nome": "Rio de Janeiro",
        "sigla": "RJ",
        "url": ""
    }
];

window.onload = function gerarLocal() {
    for (var state in coordenadas) {
        mountPinDivHtml(coordenadas[state], mapaBrasil);
        mountVideoDivHtml(coordenadas[state], estados);

        let videoEstadoPorId = document.getElementById(coordenadas[state].id);
        let estadoPorDataId = document.querySelector('[data-id="' + coordenadas[state].id + '"]');

        estadoPorDataId.style.top = coordenadas[state].altitude + 'rem';
        estadoPorDataId.style.left = coordenadas[state].longitude + 'rem';
    };
    playVideoPara(coordenadas[0].id, coordenadas[0].sigla);
    playVideoPB(coordenadas[2].id, coordenadas[2].sigla);

}


function mountPinDivHtml(state, htmlEstado) {

    htmlEstado.insertAdjacentHTML("afterend", '<a>' +
        '<div title="Estado: ' + state.nome + '" class="pin" data-id="' + state.id + '" id="pin' + state.sigla + '"></div></a>');
}

function mountVideoDivHtml(state, htmlEstado) {

    htmlEstado.insertAdjacentHTML("beforeend", '<div class="col-md-6 conteudoVideo" id="' + state.id + '" alt="Vídeo sobre ' + state.nome + '"style="display:none">' +
        '<video id="video' + state.sigla + '" controls width="55%">' +
        '<source src="' + state.url + '" type="video/mp4">' +
        'Your browser does not support the video tag. </video>' +
        '</div>');
}

function hiddeAll() {
    let videos = document.getElementsByClassName("conteudoVideo");
    for (var i in videos) {
        if (videos[i].style) {
            if (videos[i].style.display === "block") {
                videos[i].style.display = "none";
                videos[i].classList.remove('d-flex');
                videos[i].classList.remove('justify-content-md-center');
            }
        }

    }
}

function isPlayingThanPause() {
    let videos = document.getElementsByTagName("video");
    for (var i in videos) {
        if (videos[i].paused === false)
            videos[i].pause();
    }
}

function isPausedThanPlay(video) {
    if (video.paused) {
        video.play();
        video.volume = 0.2;
    }
}

function deactivateAllActivePins(pinPaaDesativar) {
    let pins = document.getElementsByClassName('pin');

    for (var i in pins) {
        if (pins[i].className === "pin active")
            pins[i].className = "pin";
    }
}

function playVideoPara(estadoId, estadoSigla) {

    let estadoPara = document.querySelector('[data-id="0"]');
    let isVideoPaused = document.getElementById('videoPA');

    estadoPara.addEventListener('click', function () {
        isPlayingThanPause();
        hiddeAll();
        deactivateAllActivePins();
        this.classList.toggle('active');

        let videoPara = document.getElementById(estadoId);
        if (videoPara) {
            if (videoPara.style.display === "block") {
                videoPara.style.display = "none";
                videoPara.classList.remove('d-flex justify-content-md-center');
            } else {
                isPausedThanPlay(isVideoPaused);
                videoPara.style.display = "block";
                videoPara.className += ' d-flex justify-content-md-center ';
            }
        }
    });
}

function playVideoPB(estadoId, estadoSigla) {

    let estadoPB = document.querySelector('[data-id="2"]');
    let isVideoPaused = document.getElementById('videoPB');

    estadoPB.addEventListener('click', function () {
        isPlayingThanPause();
        hiddeAll();
        deactivateAllActivePins();
        this.classList.toggle('active');

        let videoPB = document.getElementById(estadoId);
        if (videoPB) {
            if (videoPB.style.display === "block") {
                videoPB.style.display = "none";
            } else {
                isPausedThanPlay(isVideoPaused);
                videoPB.style.display = "block";
                videoPB.className += ' d-flex justify-content-md-center ';
            }
        };
    });
}