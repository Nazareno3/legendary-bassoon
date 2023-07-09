let header = `<nav class="navbar navbar-expand-sm navbar-light class="navbar navbar-expand-sm navbar-light" style="background-color: #ff582e;">
<div class="container">
  
  
  <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav me-auto mt-2 mt-lg-0">
      
      <li class="nav-item">
  <a class="nav-link" href="./principal.html">PRINCIPAL</a>
</li>

          <li class="nav-item">
              <a class="nav-link" href="./recetas.html">RECETAS</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="./carrito.html">CARRITO</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="./cuenta.html">CUENTA</a>
          </li>
      </ul>
      <form class="d-flex my-2 my-lg-0">
          <input class="form-control me-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
  </div>
</div>
</nav>`

document.getElementById("encabezado").innerHTML = header

let div = `<h1>Codo a Codo Recetas</h1>`
document.getElementById("menu-s").innerHTML = div

let article = `<div id="carouselId" class="carousel slide" data-bs-ride="carousel">
<ol class="carousel-indicators">
  <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
  <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
  <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
</ol>
<div class="carousel-inner" role="listbox">
  <div class="carousel-item active">
    <img src="https://img.freepik.com/foto-gratis/vista-frontal-cocina-profesional_23-2148763122.jpg?w=740&t=st=1688681979~exp=1688682579~hmac=b5c5d396a231565fc39054766afc7e26616d6e433bd4046cf8c1575a448ec209" class="w-100 d-block" alt="First slide" width="400" height="550">
  </div>
  <div class="carousel-item">
    <img src="https://img.freepik.com/foto-gratis/chef-cocinando-comida-cocina-restaurante_53876-67.jpg?w=740&t=st=1688682063~exp=1688682663~hmac=c88aa11935054046db0c29c99ac03a3017138baf2eff0bab702bf66bbc8d3c07" class="w-100 d-block" alt="Second slide" width="400" height="550">
  </div>
  <div class="carousel-item">
    <img src="https://img.freepik.com/foto-gratis/plato-espagueti-trufa-salsa-champinones-parmesano-rallado_141793-1965.jpg?w=740&t=st=1688682126~exp=1688682726~hmac=00fc03e8e1d3d178294b6fb27917f5bbad9216893ad3c1e5963b77a576e3cb19" class="w-100 d-block" alt="Third slide" width="400" height="550">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
  </button>
</div>`
document.getElementById("carru").innerHTML = article

let foot = `<div>
<div>
  <h2>¿Quienes somos?</h2>
  <p>Codo a Codo Recetas es una pagina donde podras buscar recetas de calidad muy variadas para tu cocina.
     Nos dedicamos unicamente a comidas pero futuramente crearemos otro servicio dedicado a bebidas y cocteles.
      Si te interesa formar parte de nuestro equipo y crees que podes aportar en este blog, ¡¡contactanos!!</p>
</div> <!--Info-->
<div>
<h2>Enlaces Rapidos</h2>
<ul>
  <li><a href=""></a>Principal</li>
  <li><a href=""></a>Recetas</li>
  <li><a href=""></a>Carrito</li>
  <li><a href=""></a>Cuenta</li>
</ul>
</div> <!--Links-->
<div>
<h2>Contacto</h2>

<form action="">
  <label for="">
    Nombre
  </label>
  <input type="text" name="Nombre" placeholder="Nombre y Apellido">
  <label for="">
    Email
  </label>
  <input type="email" name="Email" id="" placeholder="Gmail/Hotmail">

  <label for="">Asunto</label>
  <textarea placeholder="Les contacto por que..." name="Asunto" id="" cols="30" rows="10"></textarea>
  <button type="submit">Enviar</button>
</form>
</div> <!--Reclamos-->
</div> <!--info;reclamos;links-->
<div>
<p>© 2023 Codo a Codo Recetas - Todos los derechos reservados</p>
</div> <!--copyright-->`

document.getElementById("foot").innerHTML = foot




