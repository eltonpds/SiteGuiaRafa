let info = document.getElementById('info');
let estados = document.getElementById('estados');
let mapaBrasil = document.getElementById('mapaBrasil');

let coordenadas = [{
        "id": 0,
        "nome": "Pará",
        "sigla": "PA",
        "altitude": 70,
        "longitude": 360,
        "url": "../videos/BelemPA.mp4"
    },
    {
        "id": 1,
        "nome": "Pernambuco",
        "sigla": "PE",
        "altitude": 165,
        "longitude": 500,
        "url": ""
    },
    {
        "id": 2,
        "nome": "Paraíba",
        "sigla": "PB",
        "altitude": 145,
        "longitude": 530,
        "url": "../videos/AreiaPB.mp4"
    },
    {
        "id": 3,
        "nome": "Rio Grande do Norte",
        "sigla": "RN",
        "altitude": 125,
        "longitude": 510,
        "url": ""
    },
    {
        "id": 4,
        "nome": "Alagoas",
        "sigla": "AL",
        "altitude": 180,
        "longitude": 525,
        "url": ""
    }
];

window.onload = function gerarLocal() {
    for (var state in coordenadas) {
        mountPinDivHtml(coordenadas[state], mapaBrasil);
        mountVideoDivHtml(coordenadas[state], estados);

        let videoEstadoPorId = document.getElementById(coordenadas[state].id);
        let estadoPorDataId = document.querySelector('[data-id="' + coordenadas[state].id + '"]');

        estadoPorDataId.style.top = coordenadas[state].altitude + 'px';
        estadoPorDataId.style.left = coordenadas[state].longitude + 'px';
    };
    playVideoPara(coordenadas[0].id);
    playVideoPB(coordenadas[2].id);

}


function mountPinDivHtml(state, htmlEstado) {

    htmlEstado.insertAdjacentHTML("afterend", '<a alt="Estado: ' + state.nome + '">' +
        '<div class="pin" data-id="' + state.id + '"></div></a>');
}

function mountVideoDivHtml(state, htmlEstado) {

    htmlEstado.insertAdjacentHTML("beforeend", '<div class="col-md-6 conteudoVideo" id="' + state.id + '" alt="Vídeo sobre ' + state.nome + '"style="display:none">' +
        '<video id="video' + state.sigla + '" controls width="50%">' +
        '<source src="' + state.url + '" type="video/mp4">' +
        'Your browser does not support the video tag. </video>' +
        '</div>');
}

function hiddeAll() {
    let videos = document.getElementsByClassName("conteudoVideo");
    for (var i in videos) {
        if (videos[i].style) {
            if (videos[i].style.display === "block")
                videos[i].style.display = "none";
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

function playVideoPara(id) {

    let estadoPara = document.querySelector('[data-id="0"]');
    let isVideoPaused = document.getElementById('videoPA');

    estadoPara.addEventListener('click', function () {
        isPlayingThanPause();
        hiddeAll();

        let videoPara = document.getElementById(id);
        if (videoPara) {
            if (videoPara.style.display === "block") {
                estadoPara.style.display = "none";
            } else {
                isPausedThanPlay(isVideoPaused);
                videoPara.style.display = "block";
            }
        }
    });
}

function playVideoPB(id) {

    let estadoPB = document.querySelector('[data-id="2"]');
    let isVideoPaused = document.getElementById('videoPB');

    estadoPB.addEventListener('click', function () {
        isPlayingThanPause();
        hiddeAll();

        let videoPB = document.getElementById(id);
        if (videoPB) {
            if (videoPB.style.display === "block") {
                estadoPara.style.display = "none";
            } else {
                isPausedThanPlay(isVideoPaused);
                videoPB.style.display = "block";
            }
        };
    });
}