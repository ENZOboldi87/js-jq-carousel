$(document).ready(function() {
// bottone next
  $('.next').click(
    function () {
      showNextImg();
    });

// bottone previous
  $('.prev').click(
    function(){
      showPrevImg();
  });
});

// funzione per mostrare immagine/icona successiva
function showNextImg() {
  // creo variabile per l'immagine/icona attiva
  var imageCurrent = $('.images img.active');
  var circleCurrent = $('.nav i.active');

  imageCurrent.removeClass('active');
  circleCurrent.removeClass('active');

// se immagine/icona e l ultima visualizzata
  if (imageCurrent.hasClass('last')) {
    // aggiunge classe active al primo elemento "first"
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active ');

  }
  else {
    // altrimenti aggiunge classe "active" alla successiva
    imageCurrent.next('img').addClass('active');
    circleCurrent.next('i').addClass('active');
  }
}
// funzione per mostrare immagine/icona precedente
function showPrevImg() {
  // creo variabile per l'immagine/icona attiva
  var imageCurrent = $('.images img.active');
  var circleCurrent = $('.nav i.active');

  imageCurrent.removeClass('active');
  circleCurrent.removeClass('active');

// se immagine/icona corrente ha classe "first" (quindi e la prima della lista)
  if (imageCurrent.hasClass('first')) {
    // aggiunge classe "active" all ultimo elemento "last"
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
  else {
    // altrimenti aggiunge classe "active" alla precedente
    imageCurrent.prev('img').addClass('active');
    circleCurrent.prev('i').addClass('active');
  }
}

// TODO: lascio un "todo" perche sono curioso di saper come si applicano vari effetti al passaggio delle immagini
