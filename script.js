//======================================================
// CONVITE SAMUEL - 2 ANINHOS
// SCRIPT.JS
// SISTEMA COMPLETO DE ANIMAÇÕES E INTERAÇÕES
//======================================================


//======================================================
// CONFIGURAÇÕES PRINCIPAIS
//======================================================

const CONFIG = {

    musicaAbertura: "audio/aniversario.mp3",
    musicaFesta: "audio/circo.mp3",

    whatsapp:
    "https://wa.me/55SEUNUMERO?text=Olá! Confirmo minha presença no aniversário do Samuel 🎉",

    localizacao:
    "https://maps.google.com/?q=Restaurante+Skillus+Classic",

    presentes:
    "https://www.google.com",

    particulas: 80,
    estrelas: 120

};


//======================================================
// ELEMENTOS DA PÁGINA
//======================================================

const loading = document.getElementById("loading");
const entrada = document.getElementById("entrada");
const convite = document.getElementById("convite");

const varinha = document.getElementById("varinha");
const luzVarinha = document.getElementById("luzVarinha");

const musica = document.getElementById("musica");

const btnWhatsapp = document.getElementById("btnWhatsapp");
const btnLocalizacao = document.getElementById("btnLocalizacao");
const btnPresentes = document.getElementById("btnPresentes");
const btnConfirmar = document.getElementById("btnConfirmar");


//======================================================
// PRELOAD DE IMAGENS
//======================================================

const imagens = [
    "img/imagem1.png",
    "img/imagem2.png",
    "img/whatsapp.png",
    "img/localizacao.png",
    "img/presente.png"
];


function carregarImagens(){

    let carregadas = 0;


    imagens.forEach(src=>{

        const img = new Image();

        img.onload = ()=>{

            carregadas++;

            if(carregadas === imagens.length){

                iniciarSistema();

            }

        };


        img.src = src;

    });

}



//======================================================
// INICIALIZAÇÃO
//======================================================

function iniciarSistema(){


    setTimeout(()=>{

        if(loading){

            loading.classList.add("hidden");

        }


    },1200);



    criarEstrelas();

    criarParticulas();


}



//======================================================
// ABERTURA DO CONVITE
//======================================================


function abrirConvite(){


    if(entrada){

        entrada.classList.add("abrindo");

    }



    criarMagia();



    setTimeout(()=>{


        if(entrada){

            entrada.style.display="none";

        }


        if(convite){

            convite.classList.add("mostrar");

        }



        tocarMusicaFesta();



        criarFogos();

        criarConfetes();



    },2200);



}



//======================================================
// CLIQUE NA VARINHA
//======================================================


if(luzVarinha){


    luzVarinha.addEventListener(
        "click",
        abrirConvite
    );


}



//======================================================
// EFEITO DE MAGIA DA VARINHA
//======================================================


function criarMagia(){


    for(let i=0;i<60;i++){


        const particula=document.createElement("span");


        particula.className="magia";


        const x=Math.random()*200-100;

        const y=Math.random()*200-100;


        particula.style.setProperty(
            "--x",
            x+"px"
        );


        particula.style.setProperty(
            "--y",
            y+"px"
        );



        if(varinha){

            varinha.appendChild(particula);

        }



        setTimeout(()=>{

            particula.remove();

        },2000);



    }


}




//======================================================
// MÚSICAS
//======================================================


function tocarMusicaFesta(){


    if(!musica)
    return;



    musica.src =
    CONFIG.musicaFesta;


    musica.volume = 0.5;


    musica.play()
    .catch(()=>{});


}




//======================================================
// ESTRELAS DO FUNDO
//======================================================


function criarEstrelas(){


    const fundo =
    document.body;



    for(let i=0;i<CONFIG.estrelas;i++){


        const estrela =
        document.createElement("div");



        estrela.className="estrela";



        estrela.style.left =
        Math.random()*100+"%";



        estrela.style.top =
        Math.random()*100+"%";



        estrela.style.animationDelay =
        Math.random()*5+"s";



        fundo.appendChild(estrela);



    }


}



//======================================================
// PARTÍCULAS MÁGICAS
//======================================================


function criarParticulas(){


    const area =
    document.body;



    for(let i=0;i<CONFIG.particulas;i++){


        const p =
        document.createElement("div");



        p.className =
        "particula";



        p.style.left =
        Math.random()*100+"%";



        p.style.animationDelay =
        Math.random()*10+"s";



        area.appendChild(p);



    }



}

//======================================================
// FOGOS DE ARTIFÍCIO
//======================================================


function criarFogos(){


    const quantidade = 8;



    for(let i=0;i<quantidade;i++){


        setTimeout(()=>{


            const fogo =
            document.createElement("div");


            fogo.className =
            "fogo";


            fogo.style.left =
            Math.random()*100+"%";


            fogo.style.top =
            Math.random()*50+"%";


            document.body.appendChild(fogo);



            setTimeout(()=>{

                fogo.remove();

            },2000);



        },i*400);



    }


}




//======================================================
// CONFETES
//======================================================


function criarConfetes(){


    for(let i=0;i<150;i++){


        const confete =
        document.createElement("span");



        confete.className =
        "confete";



        confete.style.left =
        Math.random()*100+"%";



        confete.style.animationDelay =
        Math.random()*5+"s";



        confete.style.transform =
        `rotate(${Math.random()*360}deg)`;



        document.body.appendChild(confete);



        setTimeout(()=>{

            confete.remove();

        },8000);



    }


}




//======================================================
// BOTÕES DO CONVITE
//======================================================


function abrirLink(link){

    window.open(
        link,
        "_blank"
    );

}




if(btnWhatsapp){


    btnWhatsapp.addEventListener(
        "click",
        ()=>{

            abrirLink(CONFIG.whatsapp);

        }
    );


}




if(btnLocalizacao){


    btnLocalizacao.addEventListener(
        "click",
        ()=>{

            abrirLink(CONFIG.localizacao);

        }
    );


}




if(btnPresentes){


    btnPresentes.addEventListener(
        "click",
        ()=>{

            abrirLink(CONFIG.presentes);

        }
    );


}




//======================================================
// CONFIRMAÇÃO DE PRESENÇA
//======================================================


if(btnConfirmar){


    btnConfirmar.addEventListener(
        "click",
        ()=>{


            const mensagem =
            encodeURIComponent(
            "Olá! Confirmo minha presença no aniversário de 2 anos do Samuel 🎂🎉"
            );



            const link =
            "https://wa.me/?text="
            + mensagem;



            window.open(
                link,
                "_blank"
            );



        }
    );


}




//======================================================
// EFEITO PARALLAX NO FUNDO
//======================================================


document.addEventListener(
"mousemove",
(e)=>{


    const x =
    (window.innerWidth/2 - e.clientX)/50;


    const y =
    (window.innerHeight/2 - e.clientY)/50;



    document.body.style.backgroundPosition =
    `${x}px ${y}px`;



});





//======================================================
// EFEITO DE SOM NO CLIQUE
//======================================================


function somClique(){


    const som =
    new Audio(
    "audio/click.mp3"
    );


    som.volume =
    0.3;


    som.play()
    .catch(()=>{});



}



document.querySelectorAll("button")
.forEach(botao=>{


    botao.addEventListener(
        "click",
        somClique
    );


});





//======================================================
// PROTEÇÃO CONTRA ERROS DE ÁUDIO
//======================================================


if(musica){


    musica.addEventListener(
        "error",
        ()=>{

            console.log(
            "Arquivo de música não encontrado."
            );

        }
    );


}





//======================================================
// INÍCIO DO SISTEMA
//======================================================


window.addEventListener(
"load",
()=>{


    carregarImagens();



});





//======================================================
// AJUSTE PARA CELULAR
//======================================================


window.addEventListener(
"orientationchange",
()=>{


    document.body.style.height =
    window.innerHeight+"px";


});




//======================================================
// FIM DO SCRIPT
// CONVITE SAMUEL - 2 ANINHOS
//======================================================