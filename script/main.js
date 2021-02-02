/* ---- Transiciones entre secciones de la página ----- */

/* array de las secciones de la página */
const listMainShow = [
  document.querySelector("#mainShowOne"),
  document.querySelector("#mainShowTwo"),
  document.querySelector("#mainShowThree"),
  document.querySelector("#mainShowFour")
];
/* array de los botones del menú */
const listButtonsAside = [
  document.querySelector("#OurLogo"),
  document.querySelector("#CardsButton"),
  document.querySelector("#HomeButton"),
  document.querySelector("#ParchesButton")
];
/* evento del botón turquesa del inicio
  el cual lanza el movimiento a la izquierda
  logo y le asigna su respectivo evento para
  reaparecer el menu */
document
  .querySelector("#buttonInitial")
  .addEventListener("click", function regresarPrincipal() {
    document
      .querySelector("#sideMenu")
      .style.setProperty(
        "animation",
        "aparecerSideMenu 1s ease-in-out forwards"
      );
    document
      .querySelector("#OurLogo")
      .style.setProperty("animation", "desaVainaconti 1s ease-in-out forwards");

    listButtonsAside[0].addEventListener("click", function hacerlo() {
      document
        .querySelector("#sideMenu")
        .style.setProperty(
          "animation",
          "aparecerSideMenu .5s ease-in-out forwards"
        );
    });
  });
/* for en el cual se le asigna los comportamientos
  a los demás botones para que éstos cambien de secciones */
for (let index = 1; index < listButtonsAside.length; index++) {
  listButtonsAside[index].addEventListener("click", function changeToParches() {
    document
      .querySelector("#sideMenu")
      .style.setProperty(
        "animation",
        "desaparecerSideMenu .5s ease-in-out forwards"
      );
    listMainShow[index].style.setProperty(
      "animation",
      "paBajo 1s ease-in-out forwards"
    );
    if (index != 2) {
      document
        .querySelector("#mainContainer")
        .style.setProperty("height", "100vh");
    } else {
      /* ésto debido a que es la sección de la presentación
        la cual consta de un triple de la altura del viewport */
      document
        .querySelector("#mainContainer")
        .style.setProperty("height", "300vh");
    }
    for (let iCont = 0; iCont < listMainShow.length; iCont++) {
      if (iCont != index) {
        listMainShow[iCont].style.setProperty(
          "animation",
          "paRriba 1s ease-in-out forwards"
        );
      }
    }
  });
}

/* ----- Funcionamiento de Cartas ----- */

var cartasColecc = document.querySelectorAll(".allCards");
var icontClick = 2,
  condicional = true,
  primera,
  segunda,
  marcadorUno = 0,
  marcadorDos = 0;

for (let iCont = 0; iCont < cartasColecc.length; iCont++) {
  const actual = cartasColecc[iCont];
  /* cambiar de marcador */
  actual.addEventListener("click", function girar() {
    if (condicional) {
      document
        .querySelector("#jugadorDosCards")
        .style.setProperty("background-color", "var(--vLilaDark)");
      document
        .querySelector("#nombreJugadorDos")
        .style.setProperty("color", "var(--vMoradoLight)");
      document
        .querySelector("#MarcadorDosCard")
        .style.setProperty("color", "var(--vMoradoLight)");
      document
        .querySelector("#jugadorUnoCards")
        .style.setProperty("background-color", "var(--vMoradoLight)");
      document
        .querySelector("#nombreJugadorUno")
        .style.setProperty("color", "var(--vLilaDark)");
      document
        .querySelector("#MarcadorUnoCard")
        .style.setProperty("color", "var(--vLilaDark)");
    } else if (!condicional) {
      document
        .querySelector("#jugadorUnoCards")
        .style.setProperty("background-color", "var(--vLilaDark)");
      document
        .querySelector("#nombreJugadorUno")
        .style.setProperty("color", "var(--vMoradoLight)");
      document
        .querySelector("#MarcadorUnoCard")
        .style.setProperty("color", "var(--vMoradoLight)");
      document
        .querySelector("#jugadorDosCards")
        .style.setProperty("background-color", "var(--vMoradoLight)");
      document
        .querySelector("#nombreJugadorDos")
        .style.setProperty("color", "var(--vLilaDark)");
      document
        .querySelector("#MarcadorDosCard")
        .style.setProperty("color", "var(--vLilaDark)");
    }
    icontClick++;
    if (icontClick % 2 == 0) {
      if (condicional) {
        condicional = false;
      } else if (!condicional) {
        condicional = true;
      }
      segunda = actual;
    } else {
      primera = actual;
    }
    /* asignacion de animaciones y fondos */
    switch (actual.classList[1]) {
      case "Uno":
        actual.style.setProperty(
          "animation",
          "girarYUno 3s ease-in-out forwards"
        );
        break;
      case "Dos":
        actual.style.setProperty(
          "animation",
          "girarYDos 3s ease-in-out forwards"
        );
        break;
      case "Tres":
        actual.style.setProperty(
          "animation",
          "girarYTres 3s ease-in-out forwards"
        );
        break;
      case "Cuatro":
        actual.style.setProperty(
          "animation",
          "girarYCuatro 3s ease-in-out forwards"
        );
        break;
      case "Cinco":
        actual.style.setProperty(
          "animation",
          "girarYCinco 3s ease-in-out forwards"
        );
        break;
      case "Seis":
        actual.style.setProperty(
          "animation",
          "girarYSeis 3s ease-in-out forwards"
        );
        break;
      case "Siete":
        actual.style.setProperty(
          "animation",
          "girarYSiete 3s ease-in-out forwards"
        );
        break;
      case "Ocho":
        actual.style.setProperty(
          "animation",
          "girarYOcho 3s ease-in-out forwards"
        );
        break;
      default:
        break;
    }
    /* verificación de tarjetas iguales */
    if (primera.className == segunda.className && primera.id != segunda.id) {
      function sleepOne(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      async function desaparecer() {
        await sleepOne(3000);
        primera.style.setProperty("display", "none");
        segunda.style.setProperty("display", "none");
      }

      desaparecer();
      if (condicional) {
        document.querySelector("#MarcadorDosCard").innerHTML = ++marcadorDos;
      } else if (!condicional) {
        document.querySelector("#MarcadorUnoCard").innerHTML = ++marcadorUno;
      }
    }
    if (
      document.querySelectorAll(".allCards[style*='display: none;']").length ==
      14
    ) {
      document.querySelector("#cardsTitle").style.left = "20.75vw";
      if (marcadorUno > marcadorDos) {
        document.querySelector("#cardsTitle").innerHTML =
          "Jugador Uno es el ganador";
      } else if (marcadorDos > marcadorUno) {
        document.querySelector("#cardsTitle").innerHTML =
          "Jugador Dos es el ganador";
      }
    }
  });
  /* uso este evento para poder reasignar el evento de girarY */
  actual.addEventListener("mouseout", function girar() {
    actual.style.setProperty("animation", "none");
  });
}

/* ------- Funcionamiento de Parchis --------- */

var colorHermano = window.getComputedStyle(
    document.querySelector("#dadoParchis").previousElementSibling
  ).color,
  colorPadre = window.getComputedStyle(
    document.querySelector("#dadoParchis").parentNode
  ).backgroundColor;
const listJugadoresParchis = [
    document.querySelector("#jugadorUnoParchis"),
    document.querySelector("#jugadorDosParchis"),
    document.querySelector("#jugadorTresParchis"),
    document.querySelector("#jugadorFourParchis")
  ],
  pathAzul = [
    document.querySelector("#Paso18"),
    document.querySelector("#Paso19"),
    document.querySelector("#Paso20"),
    document.querySelector("#Paso21"),
    document.querySelector("#Paso22"),
    document.querySelector("#Paso23"),
    document.querySelector("#Paso24Turquesa"),
    document.querySelector("#Paso25"),
    document.querySelector("#Paso26"),
    document.querySelector("#Paso27"),
    document.querySelector("#Paso28"),
    document.querySelector("#Paso29"),
    document.querySelector("#Paso30"),
    document.querySelector("#Paso31"),
    document.querySelector("#Paso32Rojo"),
    document.querySelector("#Paso1"),
    document.querySelector("#Paso2"),
    document.querySelector("#Paso3"),
    document.querySelector("#Paso4"),
    document.querySelector("#Paso5"),
    document.querySelector("#Paso6"),
    document.querySelector("#Paso7"),
    document.querySelector("#Paso8Amarillo"),
    document.querySelector("#Paso9"),
    document.querySelector("#Paso10"),
    document.querySelector("#Paso11"),
    document.querySelector("#Paso12"),
    document.querySelector("#Paso13"),
    document.querySelector("#Paso14"),
    document.querySelector("#Paso15"),
    document.querySelector("#Paso16Azul"),
    document.querySelector("#Paso1Azul"),
    document.querySelector("#Paso2Azul"),
    document.querySelector("#Paso3Azul"),
    document.querySelector("#Meta")
  ],
  pathAmarillo = [
    document.querySelector("#Paso10"),
    document.querySelector("#Paso11"),
    document.querySelector("#Paso12"),
    document.querySelector("#Paso13"),
    document.querySelector("#Paso14"),
    document.querySelector("#Paso15"),
    document.querySelector("#Paso16Azul"),
    document.querySelector("#Paso17"),
    document.querySelector("#Paso18"),
    document.querySelector("#Paso19"),
    document.querySelector("#Paso20"),
    document.querySelector("#Paso21"),
    document.querySelector("#Paso22"),
    document.querySelector("#Paso23"),
    document.querySelector("#Paso24Turquesa"),
    document.querySelector("#Paso25"),
    document.querySelector("#Paso26"),
    document.querySelector("#Paso27"),
    document.querySelector("#Paso28"),
    document.querySelector("#Paso29"),
    document.querySelector("#Paso30"),
    document.querySelector("#Paso31"),
    document.querySelector("#Paso32Rojo"),
    document.querySelector("#Paso1"),
    document.querySelector("#Paso2"),
    document.querySelector("#Paso3"),
    document.querySelector("#Paso4"),
    document.querySelector("#Paso5"),
    document.querySelector("#Paso6"),
    document.querySelector("#Paso7"),
    document.querySelector("#Paso8Amarillo"),
    document.querySelector("#Paso1Amarillo"),
    document.querySelector("#Paso2Amarillo"),
    document.querySelector("#Paso3Amarillo"),
    document.querySelector("#Meta")
  ],
  pathTurquesa = [
    document.querySelector("#Paso26"),
    document.querySelector("#Paso27"),
    document.querySelector("#Paso28"),
    document.querySelector("#Paso29"),
    document.querySelector("#Paso30"),
    document.querySelector("#Paso31"),
    document.querySelector("#Paso32Rojo"),
    document.querySelector("#Paso1"),
    document.querySelector("#Paso2"),
    document.querySelector("#Paso3"),
    document.querySelector("#Paso4"),
    document.querySelector("#Paso5"),
    document.querySelector("#Paso6"),
    document.querySelector("#Paso7"),
    document.querySelector("#Paso8Amarillo"),
    document.querySelector("#Paso9"),
    document.querySelector("#Paso10"),
    document.querySelector("#Paso11"),
    document.querySelector("#Paso12"),
    document.querySelector("#Paso13"),
    document.querySelector("#Paso14"),
    document.querySelector("#Paso15"),
    document.querySelector("#Paso16Azul"),
    document.querySelector("#Paso17"),
    document.querySelector("#Paso18"),
    document.querySelector("#Paso19"),
    document.querySelector("#Paso20"),
    document.querySelector("#Paso21"),
    document.querySelector("#Paso22"),
    document.querySelector("#Paso23"),
    document.querySelector("#Paso24Turquesa"),
    document.querySelector("#Paso1Turquesa"),
    document.querySelector("#Paso2Turquesa"),
    document.querySelector("#Paso3Turquesa"),
    document.querySelector("#Meta")
  ],
  pathRojo = [
    document.querySelector("#Paso2"),
    document.querySelector("#Paso3"),
    document.querySelector("#Paso4"),
    document.querySelector("#Paso5"),
    document.querySelector("#Paso6"),
    document.querySelector("#Paso7"),
    document.querySelector("#Paso8Amarillo"),
    document.querySelector("#Paso9"),
    document.querySelector("#Paso10"),
    document.querySelector("#Paso11"),
    document.querySelector("#Paso12"),
    document.querySelector("#Paso13"),
    document.querySelector("#Paso14"),
    document.querySelector("#Paso15"),
    document.querySelector("#Paso16Azul"),
    document.querySelector("#Paso17"),
    document.querySelector("#Paso18"),
    document.querySelector("#Paso19"),
    document.querySelector("#Paso20"),
    document.querySelector("#Paso21"),
    document.querySelector("#Paso22"),
    document.querySelector("#Paso23"),
    document.querySelector("#Paso24Turquesa"),
    document.querySelector("#Paso25"),
    document.querySelector("#Paso26"),
    document.querySelector("#Paso27"),
    document.querySelector("#Paso28"),
    document.querySelector("#Paso29"),
    document.querySelector("#Paso30"),
    document.querySelector("#Paso31"),
    document.querySelector("#Paso32Rojo"),
    document.querySelector("#Paso1Rojo"),
    document.querySelector("#Paso2Rojo"),
    document.querySelector("#Paso3Rojo"),
    document.querySelector("#Meta")
  ];

document
  .querySelector("#dadoParchis")
  .parentNode.style.setProperty("background-color", colorHermano);
document
  .querySelector("#dadoParchis")
  .previousElementSibling.style.setProperty("color", colorPadre);

var observe,
  stepsAzul = 0,
  stepsAmarillo = 0,
  stepsTurquesa = 0,
  stepsRojo = 0;

document
  .querySelector("#dadoParchis")
  .addEventListener("click", function changePosition() {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    document
      .querySelector("#dadoParchis")
      .style.setProperty("animation", "none");

    var tirada = Math.floor(Math.random() * 3) + 1,
      idPadre = document.querySelector("#dadoParchis").parentElement.id;

    switch (tirada) {
      case 1:
        document
          .querySelector("#dadoParchis")
          .style.setProperty("animation", "tiradaUno 1s ease-in-out forwards");
        break;
      case 2:
        document
          .querySelector("#dadoParchis")
          .style.setProperty("animation", "tiradaDos 1s ease-in-out forwards");
        break;
      case 3:
        document
          .querySelector("#dadoParchis")
          .style.setProperty("animation", "tiradaTres 1s ease-in-out forwards");
        break;

      default:
        break;
    }

    switch (idPadre) {
      case "jugadorUnoParchis":
        if (stepsAzul + tirada <= 34) {
          pathAzul[stepsAzul + tirada].appendChild(
            document.querySelector("#fichaAzul")
          );
          stepsAzul += tirada;
          var idActual = pathAzul[stepsAzul].id;
          observe = idActual;
          if (
            pathAzul[stepsAzul].childElementCount > 1 &&
            idActual.length <= 6
          ) {
            var nameFound = pathAzul[stepsAzul].firstChild.classList[2];
            observe = nameFound;
            switch (nameFound) {
              case "Amarillo":
                stepsAmarillo = 0;
                break;
              case "Turquesa":
                stepsTurquesa = 0;
                break;
              case "Rojo":
                stepsRojo = 0;
                break;

              default:
                break;
            }
            document
              .querySelector("#fichasSection")
              .appendChild(pathAzul[stepsAzul].firstChild);
          }
        } else {
          stepsAzul = 34;
          pathAzul[stepsAzul].appendChild(document.querySelector("#fichaAzul"));
        }
        break;
      case "jugadorDosParchis":
        if (stepsAmarillo + tirada <= 34) {
          pathAmarillo[stepsAmarillo + tirada].appendChild(
            document.querySelector("#fichaAmarillo")
          );
          stepsAmarillo += tirada;
          var idActual = pathAmarillo[stepsAmarillo].id;
          observe = idActual;
          if (
            pathAmarillo[stepsAmarillo].childElementCount > 1 &&
            idActual.length <= 6
          ) {
            var nameFound = pathAmarillo[stepsAmarillo].firstChild.classList[2];
            observe = nameFound;
            switch (nameFound) {
              case "Azul":
                stepsAzul = 0;
                break;
              case "Turquesa":
                stepsTurquesa = 0;
                break;
              case "Rojo":
                stepsRojo = 0;
                break;

              default:
                break;
            }
            document
              .querySelector("#fichasSection")
              .appendChild(pathAmarillo[stepsAmarillo].firstChild);
          }
        } else {
          stepsAmarillo = 34;
          pathAmarillo[stepsAmarillo].appendChild(
            document.querySelector("#fichaAmarillo")
          );
        }
        break;
      case "jugadorTresParchis":
        if (stepsTurquesa + tirada <= 34) {
          pathTurquesa[stepsTurquesa + tirada].appendChild(
            document.querySelector("#fichaTurquesa")
          );
          stepsTurquesa += tirada;
          var idActual = pathTurquesa[stepsTurquesa].id;
          observe = idActual;
          if (
            pathTurquesa[stepsTurquesa].childElementCount > 1 &&
            idActual.length <= 6
          ) {
            var nameFound = pathTurquesa[stepsTurquesa].firstChild.classList[2];
            observe = nameFound;
            switch (nameFound) {
              case "Azul":
                stepsAzul = 0;
                break;
              case "Amarillo":
                stepsAmarillo = 0;
                break;
              case "Rojo":
                stepsRojo = 0;
                break;

              default:
                break;
            }
            document
              .querySelector("#fichasSection")
              .appendChild(pathTurquesa[stepsTurquesa].firstChild);
          }
        } else {
          stepsTurquesa = 34;
          pathTurquesa[stepsTurquesa].appendChild(
            document.querySelector("#fichaTurquesa")
          );
        }
        break;
      case "jugadorFourParchis":
        if (stepsRojo + tirada <= 34) {
          pathRojo[stepsRojo + tirada].appendChild(
            document.querySelector("#fichaRojo")
          );
          stepsRojo += tirada;
          var idActual = pathRojo[stepsRojo].id;
          observe = idActual;
          if (
            pathRojo[stepsRojo].childElementCount > 1 &&
            idActual.length <= 6
          ) {
            var nameFound = pathRojo[stepsRojo].firstChild.classList[2];
            observe = nameFound;
            switch (nameFound) {
              case "Azul":
                stepsAzul = 0;
                break;
              case "Amarillo":
                stepsAmarillo = 0;
                break;
              case "Turquesa":
                stepsTurquesa = 0;
                break;

              default:
                break;
            }
            document
              .querySelector("#fichasSection")
              .appendChild(pathRojo[stepsRojo].firstChild);
          }
        } else {
          stepsRojo = 34;
          pathRojo[stepsRojo].appendChild(document.querySelector("#fichaRojo"));
        }
        break;

      default:
        break;
    }

    if (document.querySelector("#Meta").childElementCount != 0) {
      document
        .querySelector("#Meta")
        .style.setProperty(
          "background-color",
          getComputedStyle(
            document.querySelector("#Meta").firstChild
          ).getPropertyValue("background-color")
        );
      document
        .querySelector("#dadoParchis")
        .style.setProperty("display", "none");
    }

    async function keepOn() {
      await sleep(2000);
      document
        .querySelector("#dadoParchis")
        .parentNode.style.setProperty("background-color", colorPadre);
      document
        .querySelector("#dadoParchis")
        .previousElementSibling.style.setProperty("color", colorHermano);

      var posActual = listJugadoresParchis.indexOf(
        document.querySelector("#dadoParchis").parentNode
      );

      listJugadoresParchis[(posActual + 1) % 4].appendChild(
        document.querySelector("#dadoParchis")
      );

      colorHermano = window.getComputedStyle(
        document.querySelector("#dadoParchis").previousElementSibling
      ).color;
      colorPadre = window.getComputedStyle(
        document.querySelector("#dadoParchis").parentNode
      ).backgroundColor;

      document
        .querySelector("#dadoParchis")
        .parentNode.style.setProperty("background-color", colorHermano);
      document
        .querySelector("#dadoParchis")
        .previousElementSibling.style.setProperty("color", colorPadre);
    }

    keepOn();
  });

/* ------- Funcionamiento XML -------- */

let xmlDoc,
  cont = 2;
function init() {
  let parser,
    text = document.querySelector("#input").innerHTML;
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(text, "text/xml");
}

function cambiarDiseno() {
  if (cont < xmlDoc.querySelectorAll("principal").length - 1) {
    cont++;
  }
  document.documentElement.style.setProperty(
    "--vMoradoLight",
    xmlDoc.querySelectorAll("principal")[cont].firstElementChild.innerHTML
  );
  document.documentElement.style.setProperty(
    "--vMoradoDark",
    xmlDoc.querySelectorAll("principal")[cont].lastElementChild.innerHTML
  );
}

document.documentElement.addEventListener("load", init());

document
  .querySelector("#GuidelinesButton")
  .addEventListener("click", function cambiarDiseno() {
    cont = ++cont % 3;
    /* Cambio de colores */
    document.documentElement.style.setProperty(
      "--vMoradoLight",
      xmlDoc.querySelectorAll("principal")[cont].firstElementChild.innerHTML
    );
    document.documentElement.style.setProperty(
      "--vMoradoDark",
      xmlDoc.querySelectorAll("principal")[cont].lastElementChild.innerHTML
    );
    document.documentElement.style.setProperty(
      "--vLila",
      xmlDoc.querySelectorAll("comPrincipal")[cont].firstElementChild.innerHTML
    );
    document.documentElement.style.setProperty(
      "--vLilaDark",
      xmlDoc.querySelectorAll("comPrincipal")[cont].lastElementChild.innerHTML
    );
    document.documentElement.style.setProperty(
      "--vTurquesa",
      xmlDoc.querySelectorAll("secundario")[cont].firstElementChild.innerHTML
    );
    document.documentElement.style.setProperty(
      "--vTurquesaDark",
      xmlDoc.querySelectorAll("secundario")[cont].querySelector("oscuro")
        .innerHTML
    );
    document.documentElement.style.setProperty(
      "--vTurquesaLight",
      xmlDoc.querySelectorAll("secundario")[cont].lastElementChild.innerHTML
    );
    /* Cambio de valores de texto */
    document.querySelector(
      "#EnterpriseTitle"
    ).innerHTML = xmlDoc
      .querySelectorAll("segundaPantalla")
      [cont].querySelectorAll("valor")[0].innerHTML;

    document.querySelector(
      "#EnterpriseDesc"
    ).innerHTML = xmlDoc
      .querySelectorAll("segundaPantalla")
      [cont].querySelectorAll("valor")[1].innerHTML;

    document.querySelector("#cardsTitle").innerHTML = xmlDoc
      .querySelectorAll("terceraPantalla")
      [cont].querySelector("valor").innerHTML;

    document.querySelector(
      "#nombreJugadorUno"
    ).innerHTML = xmlDoc
      .querySelectorAll("terceraPantalla")
      [cont].querySelectorAll("nombre")[0].innerHTML;

    document.querySelector(
      "#nombreJugadorDos"
    ).innerHTML = xmlDoc
      .querySelectorAll("terceraPantalla")
      [cont].querySelectorAll("nombre")[1].innerHTML;

    document.querySelector("#parchisTitle").innerHTML = xmlDoc
      .querySelectorAll("cuartaPantalla")
      [cont].querySelector("valor").innerHTML;

    document.querySelector(
      "#nombreJugadorParchisUno"
    ).innerHTML = xmlDoc
      .querySelectorAll("cuartaPantalla")
      [cont].querySelectorAll("nombre")[0].innerHTML;

    document.querySelector(
      "#nombreJugadorParchisDos"
    ).innerHTML = xmlDoc
      .querySelectorAll("cuartaPantalla")
      [cont].querySelectorAll("nombre")[1].innerHTML;

    document.querySelector(
      "#nombreJugadorParchisTres"
    ).innerHTML = xmlDoc
      .querySelectorAll("cuartaPantalla")
      [cont].querySelectorAll("nombre")[2].innerHTML;

    document.querySelector(
      "#nombreJugadorParchisFour"
    ).innerHTML = xmlDoc
      .querySelectorAll("cuartaPantalla")
      [cont].querySelectorAll("nombre")[3].innerHTML;
    /* Cambio de imágenes */
    document
      .querySelector("#OurLogo")
      .style.setProperty(
        "background",
        xmlDoc.querySelectorAll("logo")[cont].innerHTML
      );

    document
      .querySelector("#OurLogo")
      .style.setProperty("background-size", "cover");
    document.querySelector("#purplePortion").src = xmlDoc.querySelectorAll(
      "curvaMayor"
    )[cont].innerHTML;

    document.querySelector("#tealPortion").src = xmlDoc.querySelectorAll(
      "curvaMenor"
    )[cont].innerHTML;

    document.querySelector("#firstIlust").src = xmlDoc.querySelectorAll(
      "primeraIlustracion"
    )[cont].innerHTML;

    document.querySelector("#secIlust").src = xmlDoc.querySelectorAll(
      "segundaIlustracion"
    )[cont].innerHTML;
    /* for en el que se le asigna el mismo fondo a todas las cartas */
    for (
      let index = 0;
      index < document.querySelectorAll(".allCards").length;
      index++
    ) {
      const element = document.querySelectorAll(".allCards")[index];
      element.style.setProperty(
        "background",
        xmlDoc.querySelectorAll("cartaBack")[cont].innerHTML
      );
      element.style.setProperty("background-size", "cover");
    }

    document
      .querySelector("#sideMenu")
      .style.setProperty(
        "animation",
        "desaparecerSideMenu .5s ease-in-out forwards"
      );
  });
