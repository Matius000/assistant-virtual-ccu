function start() {
    if (annyang) {
        annyang.setLanguage("es-CO")
        annyang.start({ autoRestart: true, continuous: true });
        console.log("Listening...")
        annyang.addCommands(comandos);
        annyang.debug()
        document.getElementById("recorrido").style.visibility = "visible";
        document.getElementById("rogelio").style.visibility = "visible";
        document.getElementById("pregunta1").style.visibility = "visible";
        document.getElementById("centrociencias").style.visibility = "visible";
        document.getElementById("pregunta2").style.visibility = "visible";
        document.getElementById("pregunta3").style.visibility = "visible";
        document.getElementById("pregunta4").style.visibility = "visible";
        document.getElementById("pregunta5").style.visibility = "visible";
        document.getElementById("btn").style.visibility = "hidden";

        document.getElementById("animastop").style.visibility = "visible";
        document.getElementById("txt").style.display = "none";
        setTimeout(() => {
            voz("saludo");
        }, 1000)
    }
}

let frances = false;

annyang.addCallback('soundstart', function () {
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
});


function evento(cadena) {
    switch (cadena) {
        case 'recorrido':
            voz('recorrido');
            break;
        case 'rogelio':
            voz('rogelio')
            break;
        case 'centrociencias':
            voz('centrociencias')
            break
        case 'reserva':
            voz('reserva')
            break
        case 'distrito':
            voz('distrito')
            break
        case 'programacion':
            voz('programacion')
            break
        case 'maker':
            voz('maker')
            break
        default:
            voz('noentendi');
            break;
    }
}


const comandos = {
    //  COMANDOS DE VOZ

    "(quién te) creó": () => {
        voz("mateovanegas");
    },

    "(quién te) inventó": () => {
        voz("mateovanegas");
    },

    "qué eres": () => {
        voz("soyunasistente");
    },

    // NOMBRE

    "¿cuál es tu nombre": () => {
        voz("minombre");
    },

    "¿(Cual es tu) nombre?": () => {
        voz("minombre");
    },

    "¿(Cómo te) llamas?": () => {
        voz("minombre");
    },

    "¿(Cómo se) llama?": () => {
        voz("minombre");
    },

    //

    "busca *busqueda": busqueda => {
        voz("okdameunsegundo");
        window.open("https://www.google.com/search?q=" + busqueda)
    },

    "quiero escuchar *busqueda": busqueda => {
        voz("okdameunsegundo");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "Roegelio salmona": () => {
        voz("rogelio");
    },

    "Saluda.": () => {
        voz("saludo");
    },

    "Hola": () => {
        voz("saludo");
    },

    "Buenas tardes.": () => {
        voz("buenastardes");
    },

    "Buenos días": () => {
        voz("buenosdias");
    },

    "Centro de ciencias": () => {
        voz("centrociencias");
    },

    "Distrito salmona.": () => {
        voz("distrito");
        console.log("Distrito")
    },
}

var speaking = false;
function voz(texto) {

    const saludo = new Audio('voice/saludo.mp3');
    const buenastardes = new Audio('voice/buenastardes.mp3');
    const buenosdias = new Audio('voice/buenosdias.mp3');
    const centrociencias = new Audio('voice/centrociencias.mp3');
    const mateovanegas = new Audio('voice/mateovanegas.mp3');
    const minombre = new Audio('voice/minombrees.mp3');
    const noentendi = new Audio('voice/noentendi.mp3');
    const okdameunsegundo = new Audio('voice/okdameunsegundo.mp3');
    const recorrido = new Audio('voice/recorridovirtual.mp3');
    const rogelio = new Audio('voice/rogelio.mp3');
    const soyunasistente = new Audio('voice/soyunasistente.mp3');
    const distrito = new Audio('voice/distrito.mp3');
    const finalices = new Audio('voice/finalices.mp3')
    const reserva = new Audio('voice/reserva.mp3')
    const programacion = new Audio('voice/programacion.mp3')
    const maker = new Audio('voice/maker.mp3')


    centrociencias.onloadeddata = function () {
        var durationn;
        if (!speaking) {
            speaking = true;
            switch (texto) {
                case "saludo":
                    saludo.play();
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(saludo.duration) * 1000);
                    animation(saludo.duration);
                    break;

                case "buenastardes":
                    buenastardes.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(buenastardes.duration) * 1000);
                    animation(buenastardes.duration);
                    break;

                case "buenosdias":
                    buenosdias.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(buenosdias.duration) * 1000);
                    animation(buenosdias.duration);
                    break;

                case "centrociencias":
                    centrociencias.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(centrociencias.duration) * 1000);
                    animation(centrociencias.duration);
                    setTimeout(() => {
                        question('centrociencias', centrociencias.duration * 1000)
                    }, 5000);
                    break;

                case "mateovanegas":
                    mateovanegas.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(mateovanegas.duration) * 1000);
                    animation(mateovanegas.duration);
                    break;

                case "minombre":
                    minombre.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(minombre.duration) * 1000);
                    animation(minombre.duration);
                    break;

                case "noentendi":
                    noentendi.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(noentendi.duration) * 1000);
                    animation(noentendi.duration);
                    break;

                case "okdameunsegundo":
                    okdameunsegundo.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(okdameunsegundo.duration) * 1000);
                    animation(okdameunsegundo.duration);
                    break;

                case "recorrido":
                    recorrido.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(recorrido.duration) * 1000);
                    setTimeout(() => {
                        window.open("http://ccusalmona.com/recorridoCCU/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 1000);
                    animation(recorrido.duration);
                    question('default', recorrido.duration * 1000)
                    break;

                case "rogelio":
                    rogelio.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(rogelio.duration) * 1000);
                    animation(rogelio.duration);
                    setTimeout(() => {
                        question('rogelio', rogelio.duration * 1000)
                    }, 5000);
                    break;

                case "soyunasistente":
                    soyunasistente.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(soyunasistente.duration) * 1000);
                    animation(soyunasistente.duration);
                    break;

                case "distrito":
                    distrito.play()
                    animation(distrito.duration);
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(distrito.duration) * 1000);
                    setTimeout(() => {
                        window.open("https://drive.google.com/file/d/1UYa3klDOQHSQqslvgqskxNt9CaLbqlHA/view", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 2000)
                    setTimeout(() => {
                        question('distrito', distrito.duration * 1000)
                    }, 5000);
                    break;

                case "programacion":
                    programacion.play()
                    animation(programacion.duration);
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(programacion.duration) * 1000);
                    setTimeout(() => {
                        window.open("https://drive.google.com/file/d/1rq5YmjYjmXemPJ6kV_ARqyB00MGSNy0T/view?usp=sharing", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 2000)
                    question('default', programacion.duration * 1000)
                    break;

                case "reserva":
                    reserva.play()
                    animation(reserva.duration);
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(reserva.duration) * 1000);
                    setTimeout(() => {
                        window.open("https://ccusalmona.com/reserva-de-espacios/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 2000)
                        question('default', reserva.duration * 1000)
                    break;

                    case "maker":
                        maker.play()
                        animation(maker.duration);
                        setTimeout(() => {
                            speaking = false;
                        }, parseInt(maker.duration) * 1000);
                        setTimeout(() => {
                            question('maker', maker.duration * 1000)
                        }, 5000);
                        break;

                case "finalices":
                    finalices.play()
                    animation(finalices.duration);
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(finalices.duration) * 1000);
                    break;
                default:
                    noentendi.play()
                    setTimeout(() => {
                        speaking = false;
                    }, parseInt(noentendi.duration) * 1000);
                    animation(noentendi.duration);
                    break;
            }

        } else {
            console.log("Ya estoy hablando")
            wait()
        }


        // var textoAEscuchar = texto;
        // var mensaje = new SpeechSynthesisUtterance();
        // mensaje.text = textoAEscuchar;
        // mensaje.volume = 1;
        // mensaje.rate = 1; // Velocidad
        // mensaje.pitch = 1; // Tono de voz
        // speechSynthesis.speak(mensaje);

    };
}

function animation(durationn) {
    document.getElementById("animastop").style.visibility = "hidden";
    document.getElementById("animaplay").style.visibility = "visible";
    let parseado = parseInt(durationn) * 1000;
    console.log(parseado)

    setTimeout(() => {
        document.getElementById("animastop").style.visibility = "visible";
        document.getElementById("animaplay").style.visibility = "hidden";
    }, parseado);
}

function wait() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'warning',
        title: 'Debes esperar que termine de hablar!'
    })
}



function question(question, time) {
const tass = Swal.mixin({
    buttonsStyling: true
})
    switch (question) {
        case "rogelio":
            tass.fire({
                title: '¿Deseas ver más información acerca de Rogelio Salmona?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("https://ccusalmona.com/el-centro-cultural/rogelio-salmona/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    setTimeout(() => {
                        voz("finalices")
                    }, time-6500);
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    // Open tab
                }
            })

            break;
        case "centrociencias":
            tass.fire({
                title: '¿Deseas ver más información acerca del Centro de Ciencias?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("https://ccusalmona.com/nosotros/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    setTimeout(() => {
                        voz("finalices")
                    }, time-6500);
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    // Open tab
                }
            })

            break;
        case "distrito":
            tass.fire({
                title: '¿Deseas ver más información acerca del Distrito Creativo?',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("https://www.ucaldas.edu.co/portal/centro-cultural-universitario-rogelio-salmona-se-consolida-como-distrito-creativo/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    setTimeout(() => {
                        voz("finalices")
                    }, time-6500);
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    // Open tab
                }
            })

            break;
        case "maker":
            tass.fire({
                title: '¿Deseas ver más información acerca del Maker Space',
                text: "",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open("https://ccusalmona.com/makerspace/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    setTimeout(() => {
                        voz("finalices")
                    }, time);
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    // Open tab
                }
            })

        case "default":
            setTimeout(() => {
                voz("finalices")
            }, time);
            break;
        default:
            break;
    }




}