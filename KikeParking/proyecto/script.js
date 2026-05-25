let usuarios = [];

function registrarUsuario(){

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword") ? document.getElementById("confirmPassword").value : "";
    let rol = document.getElementById("rol").value;

    if(nombre === "" || correo === "" || password === "" || rol === ""){
        alert("Complete todos los campos");
        return;
    }

    // Validar formato de correo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(correo)){
        alert("Ingrese un correo válido");
        return;
    }

    // Validar confirmación de contraseña
    if(password !== confirmPassword){
        alert("Las contraseñas no coinciden");
        return;
    }

    let usuario = {
        nombre,
        correo,
        password,
        rol
    };

    usuarios.push(usuario);

    console.log(usuarios);

    alert("Usuario registrado correctamente");

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";
    if(document.getElementById("confirmPassword")) document.getElementById("confirmPassword").value = "";
    document.getElementById("rol").value = "";
}

function iniciarSesion(){

    let correo = document.getElementById("loginCorreo").value;
    let password = document.getElementById("loginPassword").value;

    let usuarioEncontrado = usuarios.find(usuario =>
        usuario.correo === correo &&
        usuario.password === password
    );

    if(usuarioEncontrado){
        alert("Bienvenido " + usuarioEncontrado.nombre +
        "\nRol: " + usuarioEncontrado.rol);
        
        // Limpiar campos
        document.getElementById("loginCorreo").value = "";
        document.getElementById("loginPassword").value = "";
    }else{
        alert("Correo o contraseña incorrectos");
    }
}

function showLogin(){
    const login = document.getElementById('loginForm');
    const register = document.getElementById('registerForm');
    if(login) login.style.display = 'block';
    if(register) register.style.display = 'none';
    const b1 = document.getElementById('btnLogin');
    const b2 = document.getElementById('btnRegister');
    if(b1) b1.classList.add('active');
    if(b2) b2.classList.remove('active');
}

function showRegister(){
    const login = document.getElementById('loginForm');
    const register = document.getElementById('registerForm');
    if(login) login.style.display = 'none';
    if(register) register.style.display = 'block';
    const b1 = document.getElementById('btnLogin');
    const b2 = document.getElementById('btnRegister');
    if(b1) b1.classList.remove('active');
    if(b2) b2.classList.add('active');
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', showLogin);
} else {
    showLogin();
}
