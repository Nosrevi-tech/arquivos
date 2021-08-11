var btn = document.querySelector("#btn");
var cidade;
var chave = 'f5c89a07572f823dbe8fe7abb98a60de'; //parte destina a colocar a sua chave 
btn.onclick = function () {
  /*
  Esse bloco de código só é executado
  quando o botão é clicado
  */
  cidade = document.querySelector("#text_nome").value;
  var City = document.getElementById("cidade");
  City.textContent = cidade 

//parte do código destinada a exclusão do bloco de pesquisa
  var node = document.getElementById("T");
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }

//parte do código destinada a requisição da API 
  var req = new XMLHttpRequest();
  req.onloadend = function () {
    resp = req.responseText;
    resp_obj = JSON.parse(resp);

    var TA = document.getElementById("TA");
    TA.textContent = resp_obj.main.temp + "°";

    //parte do código destinada a mudar a cor de fundo
    if (resp_obj.main.temp >= 40) {
      var body = document.querySelector("body");
      body.style.backgroundColor = "#800000";
    } else {
      if (resp_obj.main.temp >= 35) {
        var body = document.querySelector("body");
        body.style.backgroundColor = "#b22222";
      } else {
        if (resp_obj.main.temp >= 30) {
          var body = document.querySelector("body");
          body.style.backgroundColor = "#fa8072";
        } else {
          if (resp_obj.main.temp >= 25) {
            var body = document.querySelector("body");
            body.style.backgroundColor = "#ffa07a";
          } else {
            if (resp_obj.main.temp >= 20) {
              var body = document.querySelector("body");
              body.style.backgroundColor = "#E0FFFF";
            }
          }
        }
      }
    }

    if (resp_obj.main.temp < 20) {
      var body = document.querySelector("body");
      body.style.backgroundColor = "#1e90ff";
    }

    if (resp_obj.main.temp < 15) {
      var body = document.querySelector("body");
      body.style.backgroundColor = "#0000ff";
    } else {
      if (resp_obj.main.temp < 11) {
        var body = document.querySelector("body");
        body.style.backgroundColor = "#00008b";
      } else {
        if (resp_obj.main.temp < 5) {
          var body = document.querySelector("body");
          body.style.backgroundColor = "#000080"
        } else {
          if (resp_obj.main.temp <= 0) {
            var body = document.querySelector("body");
            body.style.backgroundColor = "#191970"
          }
        }
      }
    }

    //parte destinada para mostrar máxima do dia
    var MD = document.getElementById("MD");
    MD.textContent = resp_obj.main.temp_max + "°";

    //parte destinada para mostrar mínima do dia
    var MID = document.getElementById("MID");
    MID.textContent = resp_obj.main.temp_min + "°";

    //parte destinada para mostrar umidade
    var U = document.getElementById("U");
    U.textContent = resp_obj.main.humidity + "%";

    //parte destina para mostrar vento
    var VV = document.getElementById("VV");
    var ms = resp_obj.wind.speed * 3.6;
    VV.textContent = Math.trunc(ms) + "  Km/h";

    //parte destinada para calcular hora
    var hora = new Date(resp_obj.sys.sunrise * 1000);
    var fuso = resp_obj.timezone / 3600;
    var hora_certa = hora.getUTCHours() * 3600;
    var min_certo = hora.getUTCMinutes() * 60;
    var hr_certa = hora_certa + min_certo + resp_obj.timezone;
    var totalNumberOfSeconds = hr_certa;
    var hours = parseInt(totalNumberOfSeconds / 3600);
    var minutes = parseInt((totalNumberOfSeconds - (hours * 3600)) / 60);
    var seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);

    //parte destinada para mostrar horario donascer do sol
    var NS = document.getElementById("NS");
    NS.textContent = result;

    //parte destinada para calcular hora
    var hora = new Date(resp_obj.sys.sunset * 1000);
    var fuso = resp_obj.timezone / 3600;
    var hora_certa = hora.getUTCHours() * 3600;
    var min_certo = hora.getUTCMinutes() * 60;
    var hr_certa = hora_certa + min_certo + resp_obj.timezone;
    var totalNumberOfSeconds = hr_certa;
    var hours = parseInt(totalNumberOfSeconds / 3600);
    var minutes = parseInt((totalNumberOfSeconds - (hours * 3600)) / 60);
    var seconds = Math.floor((totalNumberOfSeconds - ((hours * 3600) + (minutes * 60))));
    var results = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);

    //parte destinada para mostrar horario do pôr do sol
    var PS = document.getElementById("PS");
    PS.textContent = results;

    //parte destinada para mostrar latitude
    var CCA = document.getElementById("CCA");
    CCA.textContent = resp_obj.coord.lat;

    //parte destinada para mostrar longitude
    var CCO = document.getElementById("CCO");
    CCO.textContent = resp_obj.coord.lon;


    document.querySelector("#imagem").src = 'http://openweathermap.org/img/wn/' + resp_obj.weather[0].icon + '@2x.png';

    //parte destinada para calcular a distância entre brasilia e a cidade pesquisada
    function getDistanceFromLatLonInKm(position1, position2) {

      var deg2rad = function (deg) { return deg * (Math.PI / 180); },
        R = 6371,
        dLat = deg2rad(position2.lat - position1.lat),
        dLng = deg2rad(position2.lng - position1.lng),
        a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
          + Math.cos(deg2rad(position1.lat))
          * Math.cos(deg2rad(position1.lat))
          * Math.sin(dLng / 2) * Math.sin(dLng / 2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return ((R * c * 1000).toFixed());
    }

    var distancia = (getDistanceFromLatLonInKm(
      { lat: -15.779, lng: -47.9297 },
      { lat: resp_obj.coord.lat, lng: resp_obj.coord.lon }
    ));

    //parte destinada para mostrar coordenada
    var DB = document.getElementById("DB");
    DB.textContent = Math.trunc(distancia) / 1000 + " Km";


  }
  req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + cidade + '&units=metric&appid=' + chave);
  req.send(null); // Realiza a requisição de forma assíncrona
};






