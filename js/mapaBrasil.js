let info = document.getElementById('info');
let estados = document.getElementById('estados');
let mapaBrasil = document.getElementById('mapaBrasil');
let noStateSelected = this.document.getElementById("no-state-selected");
let audio = document.getElementById('audioFundo');

let coordenadas = [{
        "id": 0,
        "nome": "Pará",
        "sigla": "PA",
        "url": [{
            "urlFoto": "../videos/BelemPA.mp4",
            "fotoTitulo": "Belém",
            "fotoDescricao": "Capital",
            "hasVideo": true,
            "width": 50
        }]
    },
    {
        "id": 1,
        "nome": "Ceará",
        "sigla": "CE",
        "url": [{
            "urlFoto": "./imagens/ceara/biblioteca-ceara.jpeg",
            "fotoTitulo": "Biblioteca Estadual do Ceará",
            "fotoDescricao": "",
            "hasVideo": false,
            "width": 50
        }]
    },
    {
        "id": 2,
        "nome": "Rio Grande do Norte",
        "sigla": "RN",
        "url": [{
                "urlFoto": "./imagens/rio-grande-norte/touros.jpeg",
                "fotoTitulo": "Touros - RN",
                "fotoDescricao": "BR 101 KM 0",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/rio-grande-norte/shui-brasil.jpeg",
                "fotoTitulo": "Shui Brasil - RN",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/rio-grande-norte/shui-brasil2.jpeg",
                "fotoTitulo": "Shui Brasil - RN",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 3,
        "nome": "Paraíba",
        "sigla": "PB",
        "url": [{
                "urlFoto": "./imagens/paraiba/paraiba.jpeg",
                "fotoTitulo": "João Pessoa - PB",
                "fotoDescricao": "Capital",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/paraiba/restaurante-pb.jpeg",
                "fotoTitulo": "Restaurante Fascino Medieval",
                "fotoDescricao": "Manaíra - PB",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "../videos/AreiaPB.mp4",
                "fotoTitulo": "Areia",
                "fotoDescricao": "Zona Rural",
                "hasVideo": true,
                "width": 50
            }
        ]
    },
    {
        "id": 4,
        "nome": "Pernambuco",
        "sigla": "PE",
        "url": [{
                "urlFoto": "./imagens/pernambuco/recife.jpeg",
                "fotoTitulo": "Recife",
                "fotoDescricao": "Capital",
                "hasVideo": false,
                "width": 100
            },
            {
                "urlFoto": "./imagens/pernambuco/porto-galinhas.jpeg",
                "fotoTitulo": "Porto de Galinhas - PE",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/pernambuco/garanhuns.jpeg",
                "fotoTitulo": "Garanhuns - PE",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/pernambuco/buique.jpeg",
                "fotoTitulo": "Garanhuns - PE",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 5,
        "nome": "Alagoas",
        "sigla": "AL",
        "url": [{
                "urlFoto": "./imagens/alagoas/catamara-canyons-velho-chico.jpeg",
                "fotoTitulo": "Canyons do Rio São Francisco",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/alagoas/gruta-talhado.jpeg",
                "fotoTitulo": "Gruta do Talhado",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 6,
        "nome": "Bahia",
        "sigla": "BA",
        "url": [{
                "urlFoto": "./imagens/bahia/chapada-diamantina.jpeg",
                "fotoTitulo": "Chapada Diamantina",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 100
            },
            {
                "urlFoto": "./imagens/bahia/chapada-diamantina2.jpeg",
                "fotoTitulo": "Chapada Diamantina",
                "fotoTitulo": "",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/bahia/salvador.jpeg",
                "fotoTitulo": "Salvador",
                "fotoDescricao": "Capital",
                "hasVideo": false,
                "width": 50
            },
            {
                "urlFoto": "./imagens/bahia/salvador2.jpeg",
                "fotoTitulo": "Salvador",
                "fotoDescricao": "Capital",
                "hasVideo": false,
                "width": 50
            }
        ]
    },
    {
        "id": 7,
        "nome": "Minas Gerais",
        "sigla": "MG",
        "url": [{
                "urlFoto": "./imagens/minas-gerais/igreja-catolica-bh.jpeg",
                "fotoTitulo": "Igreja Católica de Ouro Preto",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 100
            },
            {
                "urlFoto": "./imagens/minas-gerais/mina-bh.jpeg",
                "fotoTitulo": "Mina de Ouro Santa Rita",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/minas-gerais/predios-bh.jpeg",
                "fotoTitulo": "Praça Raul Soares",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            }
        ]
    },
    {
        "id": 8,
        "nome": "Rio de Janeiro",
        "sigla": "RJ",
        "url": [{
                "urlFoto": "./imagens/rio-de-janeiro/cristo-redentor.jpeg",
                "fotoTitulo": "Cristo Redentor",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/rio-de-janeiro/forte-duque-caxias.jpeg",
                "fotoTitulo": "Forte Duque de Caxias",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/rio-de-janeiro/arcos-da-lapa.jpeg",
                "fotoTitulo": "Arcos da Lapa",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/rio-de-janeiro/pao-de-acucar.jpeg",
                "fotoTitulo": "Pão de Açúcar",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/rio-de-janeiro/pao-de-acucar2.jpeg",
                "fotoTitulo": "Pão de Açúcar",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            }
        ]
    },
    {
        "id": 9,
        "nome": "Rio Grande do Sul",
        "sigla": "RS",
        "url": [{
                "urlFoto": "./imagens/rio-grande-sul/rio-grande-sul-campos.jpeg",
                "fotoTitulo": "Farroupilha - RS",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/rio-grande-sul/gramado-relogio.jpeg",
                "fotoTitulo": "Gramado - RS",
                "fotoDescricao": "",
                "hasVideo": false,
                "width": 75
            },
            {
                "urlFoto": "./imagens/rio-grande-sul/gramado-coracao.jpeg",
                "fotoTitulo": "Gramado - RS",
                "fotoDescricao": "",
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

    for (var state in coordenadas) {
        mountPinDivHtml(coordenadas[state], mapaBrasil);
        let estadoPorDataId = document.querySelector('[data-id="' + coordenadas[state].id + '"]');

        estadoPorDataId.style.top = coordenadas[state].altitude + 'rem';
        estadoPorDataId.style.left = coordenadas[state].longitude + 'rem';
    }

    for (var i in coordenadas) {
        imagensEventListener(coordenadas[i], estados);
    }
}


function mountPinDivHtml(state, htmlEstado) {

    const isDesktop = verifyIfDesktop();

    let html = '<a id="modal' + state.sigla + '">' +
        '<div title="Estado: ' + state.nome + '" class="pin" data-id="' + state.id + '" id="pin' + state.sigla + '"></div></a>';

    if (isDesktop) {
        htmlEstado.insertAdjacentHTML("afterend", html);

    } else {
        let pinModal = 'data-toggle="modal" data-target="#modalMapaMobile' + state.sigla + '"';

        let mobileHtml = '<a id="modal' + state.sigla + '" ' + pinModal + '>' +
            '<div title="Estado: ' + state.nome + '" class="pin" data-id="' + state.id + '" id="pin' + state.sigla + '"></div></a>';

        htmlEstado.insertAdjacentHTML("afterend", mobileHtml);
    }
}

function mountVideoDivHtml(state, index) {
    let divVideo = '';

    divVideo += '<div class="carousel-item' + (index == 0 ? ' active' : '') + '" id="' + state.id + '" alt="Fotos e vídeos sobre ' + state.nome + '" style="width: 100%;">' +
        '<video id="video' + state.sigla + '" controls width="60%" class="d-block mx-auto">' +
        '<source src="' + state.url[index].urlFoto + '" type="video/mp4">' +
        'Your browser does not support the video tag. </video>' +
        '</div>';

    return divVideo;
}

function hiddeAll() {
    let imagensEstado = document.getElementsByClassName("imagensEstado");

    for (var i in imagensEstado) {
        if (imagensEstado[i].style) {
            if (imagensEstado[i].style.display === "block") {
                imagensEstado[i].remove();
            }
        }
    }
}

function isPlayingThanPause() {
    let videos = document.getElementsByTagName("video");

    if (audio.paused === false)
        audio.pause();

    for (var i in videos) {
        if (videos[i].paused === false) {
            videos[i].pause();
        }
    }
}

function isPausedThanPlay(video, state) {
    if (video.paused) {
        audio.pause();
        video.volume = 0.1;
        video.play();
    }
}

function deactivateAllActivePins() {
    let pins = document.getElementsByClassName('pin');

    for (var i in pins) {
        if (pins[i].className === "pin active")
            pins[i].className = "pin";
    }
}

function verifyIfDesktop() {
    if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i))
        return false;
    else
        return true;
}

function imagensEventListener(state, htmlEstado) {
    let pin = document.getElementById("pin" + state.sigla);
    pin.addEventListener('click', function () {
        noStateSelected.style.display = "none";

        hiddeAll();
        isPlayingThanPause();
        verifyAnyVideoInCarrocelToPlayMusic(state.url);
        deactivateAllActivePins();

        if (!verifyIfDesktop())
            mountModal(state, htmlEstado);

        mountCarousel(state, htmlEstado);
    });
}

function mountModal(state, htmlEstado) {
    let modal = '<div class="modal fade" id="modalMapaMobile' + state.sigla + '" tabindex="-1"   aria-labelledby="modalMapaMobileLabel" aria-hidden="true">' +
        '<div class="modal-dialog">' +
        '<div class="modal-content">' +
        '<div class="modal-header">' +
        '<h5 class="modal-title" id="modalMapaMobileLabel">Estado: ' + state.nome + '</h5>' +
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>' +
        '<div class="modal-body" id="modalEstado' + state.sigla + '"></div>' +
        '</div>' +
        '</div>';

    htmlEstado.insertAdjacentHTML("afterend", modal);

    $('#modalMapaMobile' + state.sigla + '').on('hide.bs.modal', function () {
        isPlayingThanPause();
    })
}

function mountCarousel(state, htmlEstado) {
    let modalEstado = document.getElementById('modalEstado' + state.sigla);
    let ilTemplate = '';
    let divImagem = '';
    let temVideo = false;

    for (var i in state.url) {
        ilTemplate += '<li data-target="#carouselEstado' + state.sigla + '" data-slide-to="' + i + '"' + (i == 0 ? 'class="active"' : '') + '></li>';
        if (state.url[i].hasVideo === false) {
            divImagem += '<div class="carousel-item' +
                (i == 0 ? ' active' : '') + '" style="width: 100%"><img src="' + state.url[i].urlFoto + '" class="d-block w-' + state.url[i].width + ' mx-auto" alt="' + state.url[i].fotoTitulo + ' ' + state.url[i].fotoDescricao + '" />' +
                '<div class="carousel-caption d-none d-md-block">' +
                '<h5>' + state.url[i].fotoTitulo + '</h5>' +
                '<p>' + state.url[i].fotoDescricao + '</p>' +
                '</div></div>';
        } else {
            temVideo = true;
            divImagem += mountVideoDivHtml(state, i);
        }
    }
    let divCarousel =
        '<div id="imagens' + state.sigla + '" class="col-md-6 imagensEstado">' +
        '<div id="carouselEstado' + state.sigla + '" class="carousel slide" data-ride="carousel">' +
        '<ol class="carousel-indicators">' +
        ilTemplate +
        '</ol>' +
        '<div class="carousel-inner">' +
        divImagem +
        '</div>' +
        '</div>' +
        '<button class="carousel-control-prev" type="button" data-target="#carouselEstado' + state.sigla + '" data-slide="prev">' +
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Previous</span>' +
        '</button>' +
        '<button class="carousel-control-next" type="button" data-target="#carouselEstado' + state.sigla + '" data-slide="next">' +
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '<span class="sr-only">Next</span>' +
        '</button>' +
        '</div>' +
        '</div>';

    if (verifyIfDesktop()) {
        htmlEstado.insertAdjacentHTML("beforeend", divCarousel);
        let imagens = document.getElementById("imagens" + state.sigla);
        imagens.style.display = "block";
        imagens.className += ' d-flex justify-content-md-center ';
    } else
        modalEstado.insertAdjacentHTML("beforeend", divCarousel);

    verificarSeCaroucelTemVideoPlay(state.url.length, temVideo, state);
}

function verificarSeCaroucelTemVideoPlay(quantidadeItens, temVideo, state) {
    if (temVideo) {
        let video = document.getElementById('video' + state.sigla);

        if (quantidadeItens === 1) {
            isPausedThanPlay(video, state);
        }

        $('#carouselEstado' + state.sigla).on('slid.bs.carousel', function (ev) {
            let pai = video.parentElement;
            if (pai.classList != undefined && pai.classList != "" && pai.classList.contains('active')) {
                isPausedThanPlay(video, state);
            }
        });

        $('#carouselEstado' + state.sigla).on('slide.bs.carousel', function (ev) {
            if (document.getElementById('3').classList.contains('active'))
                isPlayingThanPause();
        });
    }
}

function verifyAnyVideoInCarrocelToPlayMusic(conteudos) {
    let contemVideo = false;
    for (let index = 0; index < conteudos.length; index++) {
        const element = conteudos[index];

        if (element.hasVideo === true)
            contemVideo = true;
        else
            setTimeout(() => {
                audio.play()
            }, 1500)
    }
}