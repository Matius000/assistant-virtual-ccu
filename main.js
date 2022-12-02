// Todos los derechos reservados, Mateo Vanegas Giraldo #https://matius000.github.io/portafolio/ 
function start() {


    if (!annyang) { } else { 
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
    document.getElementById("btn").style.display = "none";

    document.getElementById("animastop").style.visibility = "visible";
    document.getElementById("txt").style.display = "none";
    setTimeout(() => {
        voz("saludo");
    }, 1000)
 }
}


annyang.addCallback('soundstart', function () {
    console.log("sound detected")
});

annyang.addCallback('result', function () {
    console.log('sound stopped');
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
        icon: 'info',
        title: annyang.debug(),
    })
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

    "¿(Quién te) creo?": () => {
        voz("mateovanegas");
        window.open("https://matius000.github.io/portafolio/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");

    },

    "¿(Quién te) inventó?": () => {
        voz("mateovanegas");
    },

    "¿Qué eres?": () => {
        voz("soyunasistente");
    },

    // NOMBRE

    "¿Cuál es tu nombre?": () => {
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

    "Busca *busqueda.": busqueda => {
        voz("okdameunsegundo");
        window.open("https://www.google.com/search?q=" + busqueda)
    },

    "Quiero escuchar *busqueda.": busqueda => {
        voz("okdameunsegundo");
        window.open("https://www.youtube.com/results?search_query=" + busqueda)
    },

    "Roegelio salmona.": () => {
        voz("rogelio");
    },

    "Recorrido virtual.": () => {
        voz("recorrido");
    },

    
    "Maker Space.": () => {
        voz("maker");
    },

    "Maker (Space).": () => {
        voz("maker");
    },

    "Saluda.": () => {
        voz("saludo");
    },

    "Hola.": () => {
        voz("saludo");
    },

    "Buenas tardes.": () => {
        voz("buenastardes");
    },

    "Buenos días.": () => {
        voz("buenosdias");
    },

    "Centro de ciencias.": () => {
        voz("centrociencias");
    },

    "Distrito salmona.": () => {
        voz("distrito");
    },

    "Programación semanal.": () => {
        voz("programacion");
    },

    "Programación (semanal).": () => {
        voz("programacion");
    },

    "Reserva de espacios.": () => {
        voz("reserva");
    },

    "(Reserva) de (espacios).": () => {
        voz("reserva");
    },
}

var countf = 0;
var speaking = false;
var who;
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
    const nodisponible = new Audio('voice/nodisponible.mp3')


    centrociencias.onloadeddata = function () {
        var durationn;
        if (!speaking) {
            speaking = true;
            switch (texto) {
                case "saludo":
                    who = saludo;
                    saludo.play();
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(saludo.duration) * 1000);
                    animation(saludo.duration);
                    break;

                case "buenastardes":
                    who = buenastardes;
                    buenastardes.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(buenastardes.duration) * 1000);
                    animation(buenastardes.duration);
                    break;

                case "buenosdias":
                    who = buenosdias;
                    buenosdias.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(buenosdias.duration) * 1000);
                    animation(buenosdias.duration);
                    break;

                case "centrociencias":
                    who = centrociencias;
                    centrociencias.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(centrociencias.duration) * 1000);
                    animation(centrociencias.duration);
                    setTimeout(() => {
                        question('centrociencias', centrociencias.duration * 1000)
                    }, 5000);
                    break;

                case "mateovanegas":
                    who = mateovanegas;
                    mateovanegas.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(mateovanegas.duration) * 1000);
                    animation(mateovanegas.duration);
                    break;

                case "minombre":
                    who = minombre;
                    minombre.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(minombre.duration) * 1000);
                    animation(minombre.duration);
                    break;

                case "noentendi":
                    who = noentendi;
                    noentendi.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(noentendi.duration) * 1000);
                    animation(noentendi.duration);
                    break;

                case "nodisponible":
                    who = nodisponible;
                    nodisponible.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(nodisponible.duration) * 1000);
                    animation(nodisponible.duration);
                    break;

                case "okdameunsegundo":
                    who = okdameunsegundo;
                    okdameunsegundo.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(okdameunsegundo.duration) * 1000);
                    animation(okdameunsegundo.duration);
                    break;

                case "recorrido":
                    who = recorrido;
                    recorrido.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();;
                    }, parseInt(recorrido.duration) * 1000);
                    setTimeout(() => {
                        window.open("http://ccusalmona.com/recorridoCCU/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 1000);
                    animation(recorrido.duration);
                    question('default', recorrido.duration * 1000)
                    break;

                case "rogelio":
                    who = rogelio;
                    rogelio.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(rogelio.duration) * 1000);
                    animation(rogelio.duration);
                    setTimeout(() => {
                        question('rogelio', rogelio.duration * 1000)
                    }, 5000);
                    break;

                case "soyunasistente":
                    who = soyunasistente;
                    soyunasistente.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(soyunasistente.duration) * 1000);
                    animation(soyunasistente.duration);
                    break;

                case "distrito":
                    who = distrito;
                    distrito.play()
                    animation(distrito.duration);
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(distrito.duration) * 1000);
                    setTimeout(() => {
                        window.open("https://drive.google.com/file/d/1UYa3klDOQHSQqslvgqskxNt9CaLbqlHA/view", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 2000)
                    setTimeout(() => {
                        question('distrito', distrito.duration * 1000)
                    }, 5000);
                    break;

                case "programacion":
                    who = programacion;
                    programacion.play()
                    animation(programacion.duration);
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(programacion.duration) * 1000);
                    setTimeout(() => {
                        window.open("https://drive.google.com/file/d/1rq5YmjYjmXemPJ6kV_ARqyB00MGSNy0T/view?usp=sharing", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 2000)
                    question('default', programacion.duration * 1000)
                    break;

                case "reserva":
                    who = reserva;
                    reserva.play()
                    animation(reserva.duration);
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(reserva.duration) * 1000);
                    setTimeout(() => {
                        window.open("https://ccusalmona.com/reserva-de-espacios/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=600,width=1300,height=1200");
                    }, 2000)
                    question('default', reserva.duration * 1000)
                    break;

                case "maker":
                    who = maker;
                    maker.play()
                    animation(maker.duration);
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(maker.duration) * 1000);
                    setTimeout(() => {
                        question('maker', maker.duration * 1000)
                    }, 5000);
                    break;

                case "finalices":
                    who = finalices;
                    if (countf < 1) {
                        finalices.play()
                        animation(finalices.duration);
                        annyang.pause();
                        setTimeout(() => {
                            speaking = false;
                            annyang.resume();
                        }, parseInt(finalices.duration) * 1000);
                        countf++;
                    } else { }
                    break;
                default:
                    who = noentendi;
                    noentendi.play()
                    annyang.pause();
                    setTimeout(() => {
                        speaking = false;
                        annyang.resume();
                    }, parseInt(noentendi.duration) * 1000);
                    animation(noentendi.duration);
                    break;
            }

        } else {
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
    who.pause();
    speaking = false;
    document.getElementById("animastop").style.visibility = "visible";
    document.getElementById("animaplay").style.visibility = "hidden";
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
        title: 'Voz interrumpida, elige nuevamente tu opción.'
    })
}



function question(question, time) {
    const tass = Swal.mixin({
        buttonsStyling: true
    })

    if (!speaking) {
        console.log("No muestra porque se detuvo");
    } else {
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
                        }, time - 6500);
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
                        }, time - 6500);
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
                        }, time - 6500);
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
}
