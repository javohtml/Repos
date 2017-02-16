var url = 'http://cdrapp.cl/movileapp/backend/middle.php'

//CONDUCTOR FUNCTIONS
function newConductor(ad, n, a, r, u, p) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'newConductor','ad': ad, 'n': n, 'a': a, 'r': r, 'u': u, 'p': p }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			listConductores(window.localStorage.getItem("number"))
		}
	}})
}
function readConductor(r) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'readConductor', 'r': r }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			bootbox.alert('Ya existe un conductor con ese RUT!')
		}
	}})
}
function loginConductor(r, p) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'loginConductor', 'r': r, 'p': p }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			window.localStorage.setItem("numberUser", data.Data[0])
			window.localStorage.setItem("NombreUser", data.Data[3])
			window.location.href = './panel.html'
		} else {
			bootbox.alert('Nombre de usuario o contraseña incorrectos')
		}
	}})
}
function uploadConductor(n, a, r, u, p) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'uploadConductor', 'n': n, 'a': a, 'r': r, 'u': u, 'p': p }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			bootbox.alert('Conductor Modificado con exito!')
		}
	}})
}
//SOLICITUD FUNCTIONS
function readSolicitud(i) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'readSolicitud', 'i': i }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			bootbox.alert('Obtenido')
		}
	}})
}
function listSolicitudes(ad) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'listSolicitudes', 'ad': ad }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			cargarSolicitudes(data.Data)
		} else {
			cargarSolicitudes([])
		}
	}})
}
function solicitudesConductor(c) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'solicitudesConductor', 'c': c }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			dobarrelroll(data.Data[2], data.Data[3], data.Data[0])
			var mensaje = "Tiene una solicitud de CDR en " + data.Data[4] + ", hasta " + data.Data[5] + ", Tiempo: " + data.Data[6]
			bootbox.alert(mensaje)
		}
	}})
}

function solicitudDone(s){
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'solicitudDone', 's': s }, dataType: 'json', success: function(data){
		if (data.status == 'success') {
			bootbox.alert("Se ha completado la solicitud con registro exitoso!")
		}
	}});
}

//GEOLOCALIZACIÓN FUNCTIONS
function addGeocordinates(c, g) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'addGeocordinates', 'c': c, 'g': g }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			console.log(g)
		}
	}})
}
function readGeocordinate(c) {
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'readGeocordinate', 'c': c }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			bootbox.alert('Obtenido')
		}
	}})
}
function listGeocordinates(ad){
	$.ajax({ url: url, type: 'POST', data: { 'hdn': 'listGeocordinates', 'ad':ad }, dataType: 'json', success: function(data) {
		if (data.status == 'success') {
			bootbox.alert('Obtenido')
		}
	}})
}
function logout(){
	window.localStorage.clear();
	window.location.href = "index.html"
}
function isLogin(){
	if (!window.localStorage.getItem("NombreUser")) {
		window.location.href = "index.html"
	}
}