var htmlString = ""
var pages = new Array()
var namePages = new Array()

pages[0] = "cs-web"
namePages[0] = "Programacao Web"


for (var i = 0; i < pages.length; i++){
	htmlString += ' <div class="col-md-6 d-link text-center py-2 m-link" id="link-web"> ' +
'							<strong class="m-2"> ' + namePages[i] + '</strong> ' +
'							<img src=" https://jhmiante.github.io/img/'+ pages[i] +'.png" class="img-fluid f-link rounded mx-auto d-block my-2"> ' +
'							<div class="d-flex justify-content-center"> ' +
'								<a href="https://notedev.000webhostapp.com/' + pages[i] + '/" target="_blank" class="btn btn-info">Acessar</a> ' +
'							</div>	 ' +
'						</div> '
}


$("#paginas").html(htmlString)