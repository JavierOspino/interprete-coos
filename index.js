// Import stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import $ from "jquery";
import "bootstrap";

var parser = require("./grammar");
var funciones = require("./data.js").funciones;
const Swal = require("sweetalert2");

$(function() {
  $("#editor").on("keydown", function(e) {
    if (e.key == "Tab") {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      this.value =
        this.value.substring(0, start) + "\t" + this.value.substring(end);

      // put caret at right position again
      this.selectionStart = this.selectionEnd = start + 1;
    }
  });

  $("#compilar").click(() => {
    $("#out").text("out:");
    var texto, res;
    texto = $("#editor").val();
    if (texto !== "") {
      funciones.clear();
      res = parser.parse(texto.toString());
      if ($("#out").text() === "out:")
        $("#out").text("out: Se ha Compilado correctamente!");
    } else {
      $("#out").text("out: Entrada vacia!");
    }
  });
});
