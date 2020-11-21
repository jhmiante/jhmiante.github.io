var htmlString = ""
var pages = new Array()
var namePages = new Array()

pages[0] = "dev-csharp"
namePages[0] = "Linguagem C#"

pages[1] = "cs-web"
namePages[1] = "Programação Web"

pages[2] = "cs-poo"
namePages[2] = "Programação POO"


for (var i = 0; i < pages.length; i++){
	htmlString += ' <div class="col-md-5 d-link text-center py-2 m-link" id="link-web"> ' +
'							<strong class="m-2"> ' + namePages[i] + '</strong> ' +
'							<img src=" https://jhmiante.github.io/img/'+ pages[i] +'.png" class="img-fluid f-link rounded mx-auto d-block my-2"> ' +
'							<div class="d-flex justify-content-center"> ' +
'								<a href="https://notedev.000webhostapp.com/' + pages[i] + '/" class="btn btn-info">Acessar</a> ' +
'							</div>	 ' +
'						</div> '
}


document.getElementById("paginas").innerHTML = htmlString