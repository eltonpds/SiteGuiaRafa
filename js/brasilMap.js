let info = document.getElementById('info');
let states = document.getElementById('states');
let brasilMap = document.getElementById('brasilMap');
let noStateSelected = this.document.getElementById("no-state-selected");

let coordinates = [{
        "id": 0,
        "name": "Pará",
        "acronym": "PA",
        "url": [{
            "urlFoto": "../videos/BelemPA.mp4",
            "fotoTitle": "Belém",
            "fotoDescription": "Capital",
            "hasVideo": true,
            "width": 50
        }]
    },
    {
        "id": 1,
        "name": "Ceará",
        "acronym": "CE",
        "url": [{
            "urlFoto": "./images/ceara/biblioteca-ceara.jpeg",
            "fotoTitle": "Biblioteca Estadual do Ceará",
            "fotoDescription": "",
            "hasVideo": false,
            "width": 50
        }]
    },
    {
        "id": 2,
        "name": "Rio Grande do Norte",
        "acronym": "RN",
        "url": [{
                "urlFoto": "./images/rio-grande-norte/touros.jpeg",
                "fotoTitle": "Touros - RN",
                "fotoDescription": "BR 101 KM 0",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/rio-grande-norte/shui-brasil.jpeg",
                "fotoTitle": "Shui Brasil - RN",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/rio-grande-norte/shui-brasil2.jpeg",
                "fotoTitle": "Shui Brasil - RN",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 3,
        "name": "Paraíba",
        "acronym": "PB",
        "url": [{
                "urlFoto": "./images/paraiba/paraiba.jpeg",
                "fotoTitle": "João Pessoa - PB",
                "fotoDescription": "Capital",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/paraiba/restaurante-pb.jpeg",
                "fotoTitle": "Restaurante Fascino Medieval",
                "fotoDescription": "Manaíra - PB",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "../videos/AreiaPB.mp4",
                "fotoTitle": "Areia",
                "fotoDescription": "Zona Rural",
                "hasVideo": true,
                "width": 50
            }
        ]
    },
    {
        "id": 4,
        "name": "Pernambuco",
        "acronym": "PE",
        "url": [{
                "urlFoto": "./images/pernambuco/recife.jpeg",
                "fotoTitle": "Recife",
                "fotoDescription": "Capital",
                "hasVideo": false,
                "width": 100
            },
            {
                "urlFoto": "./images/pernambuco/porto-galinhas.jpeg",
                "fotoTitle": "Porto de Galinhas - PE",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/pernambuco/garanhuns.jpeg",
                "fotoTitle": "Garanhuns - PE",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/pernambuco/buique.jpeg",
                "fotoTitle": "Garanhuns - PE",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 5,
        "name": "Alagoas",
        "acronym": "AL",
        "url": [{
                "urlFoto": "./images/alagoas/catamara-canyons-velho-chico.jpeg",
                "fotoTitle": "Canyons do Rio São Francisco",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/alagoas/gruta-talhado.jpeg",
                "fotoTitle": "Gruta do Talhado",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 6,
        "name": "Bahia",
        "acronym": "BA",
        "url": [{
                "urlFoto": "./images/bahia/chapada-diamantina.jpeg",
                "fotoTitle": "Chapada Diamantina",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 100
            },
            {
                "urlFoto": "./images/bahia/chapada-diamantina2.jpeg",
                "fotoTitle": "Chapada Diamantina",
                "fotoTitle": "",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/bahia/salvador.jpeg",
                "fotoTitle": "Salvador",
                "fotoDescription": "Capital",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./images/bahia/salvador2.jpeg",
                "fotoTitle": "Salvador",
                "fotoDescription": "Capital",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 7,
        "name": "Minas Gerais",
        "acronym": "MG",
        "url": [{
                "urlFoto": "./images/minas-gerais/igreja-catolica-bh.jpeg",
                "fotoTitle": "Igreja Católica de Ouro Preto",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 100
            },
            {
                "urlFoto": "./images/minas-gerais/mina-bh.jpeg",
                "fotoTitle": "Mina de Ouro Santa Rita",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/minas-gerais/predios-bh.jpeg",
                "fotoTitle": "Praça Raul Soares",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            }
        ]
    },
    {
        "id": 8,
        "name": "Rio de Janeiro",
        "acronym": "RJ",
        "url": [{
                "urlFoto": "./images/rio-de-janeiro/cristo-redentor.jpeg",
                "fotoTitle": "Cristo Redentor",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/rio-de-janeiro/forte-duque-caxias.jpeg",
                "fotoTitle": "Forte Duque de Caxias",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/rio-de-janeiro/arcos-da-lapa.jpeg",
                "fotoTitle": "Arcos da Lapa",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/rio-de-janeiro/pao-de-acucar.jpeg",
                "fotoTitle": "Pão de Açúcar",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/rio-de-janeiro/pao-de-acucar2.jpeg",
                "fotoTitle": "Pão de Açúcar",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            }
        ]
    },
    {
        "id": 9,
        "name": "Rio Grande do Sul",
        "acronym": "RS",
        "url": [{
                "urlFoto": "./images/rio-grande-sul/rio-grande-sul-campos.jpeg",
                "fotoTitle": "Farroupilha - RS",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/rio-grande-sul/gramado-relogio.jpeg",
                "fotoTitle": "Gramado - RS",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./images/rio-grande-sul/gramado-coracao.jpeg",
                "fotoTitle": "Gramado - RS",
                "fotoDescription": "",
                "hasVideo": false,
                "width": 75
            }
        ]
    }
];

window.onload = function gerarLocal() {
    if (verifyIfDesktop()) {
        noStateSelected.style.display = "block";
    }

    for (var state in coordinates) {
        mountPinDivHtml(coordinates[state], brasilMap);
        let stateByDataId = document.querySelector('[data-id="' + coordinates[state].id + '"]');

        stateByDataId.style.top = coordinates[state].altitude + 'rem';
        stateByDataId.style.left = coordinates[state].longitude + 'rem';
    }

    for (var i in coordinates) {
        imagesEventListener(coordinates[i], states);
    }
}


function mountPinDivHtml(state, htmlState) {

    const isDesktop = verifyIfDesktop();

    let html = '<a id="modal' + state.acronym + '">' +
        '<div title="State: ' + state.name + '" class="pin" data-id="' + state.id + '" id="pin' + state.acronym + '"></div></a>';

    if (isDesktop) {
        htmlState.insertAdjacentHTML("afterend", html);

    } else {
        let pinModal = 'data-toggle="modal" data-target="#modalMapaMobile' + state.acronym + '"';

        let mobileHtml = '<a id="modal' + state.acronym + '" ' + pinModal + '>' +
            '<div title="State: ' + state.name + '" class="pin" data-id="' + state.id + '" id="pin' + state.acronym + '"></div></a>';

        htmlState.insertAdjacentHTML("afterend", mobileHtml);
    }
}

function mountVideoDivHtml(state, index) {
    let divVideo = '';

    divVideo += '<div class="carousel-item' + (index == 0 ? ' active' : '') + '" id="' + state.id + '" alt="Fotos e vídeos sobre ' + state.name + '" style="width: 100%;">' +
        '<video id="video' + state.acronym + '" controls width="60%" class="d-block mx-auto">' +
        '<source src="' + state.url[index].urlFoto + '" type="video/mp4">' +
        'Your browser does not support the video tag. </video>' +
        '</div>';

    return divVideo;
}

function hiddeAll() {
    let imagesState = document.getElementsByClassName("imagesState");

    for (var i in imagesState) {
        if (imagesState[i].style) {
            if (imagesState[i].style.display === "block") {
                imagesState[i].remove();
            }
        }
    }
}

function isPlayingThanPause() {
    let videos = document.getElementsByTagName("video");

    for (var i in videos) {
        if (videos[i].paused === false) {
            videos[i].pause();
        }
    }
}

function isPausedThanPlay(video, state) {
    if (video.paused) {
        video.volume = 0.1;
        video.play();
    }
}

function deactivateAllActivePins() {
    let pins = document.getElementsByClassName('pin');

    for (var i in pins) {
        if (pins[i].className === "pin active")
            pins[i].classList.remove('active');
    }
}

function verifyIfDesktop() {
    if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i))
        return false;
    else
        return true;
}

function imagesEventListener(state, htmlState) {
    let pin = document.getElementById("pin" + state.acronym);
    pin.addEventListener('click', function () {
        noStateSelected.style.display = "none";

        hiddeAll();
        isPlayingThanPause();
        deactivateAllActivePins();

        pin.classList.add('active');

        if (!verifyIfDesktop())
            mountModal(state, htmlState);

        mountCarousel(state, htmlState);
    });
}

function mountModal(state, htmlState) {
    let modal = '<div class="modal fade" id="modalMapaMobile' + state.acronym + '" tabindex="-1"   aria-labelledby="modalMapaMobileLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="modalMapaMobileLabel">State: ' + state.name + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body" id="stateModal' + state.acronym + '"></div>' +
        '</div>' +
        '</div>';

    htmlState.insertAdjacentHTML("afterend", modal);

    $('#modalMapaMobile' + state.acronym + '').on('hide.bs.modal', function () {
        isPlayingThanPause();
    })
}

function mountCarousel(state, htmlState) {
    let stateModal = document.getElementById('stateModal' + state.acronym);
    let ilTemplate = '';
    let divImage = '';
    let hasVideo = false;

    for (var i in state.url) {
        ilTemplate += '<li data-target="#carouselState' + state.acronym + '" data-slide-to="' + i + '"' + (i == 0 ? 'class="active"' : '') + '></li>';
        if (state.url[i].hasVideo === false) {
            divImage += '<div class="carousel-item' +
                (i == 0 ? ' active' : '') + '" style="width: 100%"><img src="' + state.url[i].urlFoto + '" class="d-block w-' + state.url[i].width + ' mx-auto" alt="' + state.url[i].fotoTitle + ' ' + state.url[i].fotoDescription + '" />' +
                '<div class="carousel-caption d-none d-md-block">' +
                '<h5>' + state.url[i].fotoTitle + '</h5>' +
                '<p>' + state.url[i].fotoDescription + '</p>' +
                '</div></div>';
        } else {
            hasVideo = true;
            divImage += mountVideoDivHtml(state, i);
        }
    }
    let divCarousel =
        '<div id="images' + state.acronym + '" class="col-md-6 imagesState">' +
        '<div id="carouselState' + state.acronym + '" class="carousel slide" data-ride="carousel">' +
        '<ol class="carousel-indicators">' +
        ilTemplate +
        '</ol>' +
        '<div class="carousel-inner">' +
        divImage +
        '</div>' +
        '</div>' +
        '<button class="carousel-control-prev" type="button" data-target="#carouselState' + state.acronym + '" data-slide="prev">' +
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
        '</button>' +
        '<button class="carousel-control-next" type="button" data-target="#carouselState' + state.acronym + '" data-slide="next">' +
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
        '</button>' +
        '</div>' +
        '</div>';

    if (verifyIfDesktop()) {
        htmlState.insertAdjacentHTML("beforeend", divCarousel);
        let images = document.getElementById("images" + state.acronym);
        images.style.display = "block";
        images.className += ' d-flex justify-content-md-center ';
    } else
        stateModal.insertAdjacentHTML("beforeend", divCarousel);

    verificarSeCaroucelTemVideoPlay(state.url.length, hasVideo, state);
}

function verificarSeCaroucelTemVideoPlay(itensQuantities, hasVideo, state) {
    if (hasVideo) {
        let video = document.getElementById('video' + state.acronym);

        if (itensQuantities === 1) {
            isPausedThanPlay(video, state);
        }

        $('#carouselState' + state.acronym).on('slid.bs.carousel', function (ev) {
            let fatherElement = video.parentElement;
            if (fatherElement.classList != undefined && fatherElement.classList != "" && fatherElement.classList.contains('active')) {
                isPausedThanPlay(video, state);
            }
        });

        $('#carouselState' + state.acronym).on('slide.bs.carousel', function (ev) {
            if (document.getElementById('3').classList.contains('active'))
                isPlayingThanPause();
        });
    }
}