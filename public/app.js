console.log('holaaa');

var FormularioEnviar = document.getElementsByName('Enviar');
var formularioActualizar = document.getElementsByName('Actualizar');
var formularioEliminar = document.getElementsByName('Eliminar');
var formularioMostrar = document.getElementsByName('Mostrar');

FormularioEnviar[0].addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(FormularioEnviar[0]);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/insertarpaciente', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

formularioActualizar[0].addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formularioActualizar[0]);
  let nombrepaciente = datos.get('nombre');
  let apellidopaciente = datos.get('apellido');
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'PUT',
    headers: myHeaders,
    body: new URLSearchParams({
      'nombre': nombrepaciente,
      'apellido': apellidopaciente,
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/actualizarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

formularioEliminar[0].addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('me diste un click');
  let datos = new FormData(formularioEliminar[0]);
  let idpaciente = datos.get('identificacion');

  let myHeaders = new Headers();

  const options = {
    method: 'DELETE',
    headers: myHeaders,
    body: new URLSearchParams({
      'numid': idpaciente
    }),
  }

  fetch('/basedatos/borrarpacientes', options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

formularioMostrar[0].addEventListener('submit', function (e) {
  e.preventDefault();

  fetch('/basedatos/consultatotalpacientes')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
});

