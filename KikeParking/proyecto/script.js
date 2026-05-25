let usuarios = [];

// Recibe el event del formulario
function registrarUsuario(event){

    event.preventDefault(); // Evita que el formulario se envíe por defecto

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
        alert("Ingresa un correo válido");
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

    alert("Usuario registrado correctamente. Ahora puedes iniciar sesión.");

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("password").value = "";
    if(document.getElementById("confirmPassword")) document.getElementById("confirmPassword").value = "";
    document.getElementById("rol").value = "";

    showLogin(); // Mostrar el formulario de login después de registrar
}

function iniciarSesion(event){
    event.preventDefault(); // Evita que el formulario se envíe por defecto

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
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('btnLogin').classList.add('active');
    document.getElementById('btnRegister').classList.remove('active');
}

function showRegister(){
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('btnLogin').classList.remove('active');
    document.getElementById('btnRegister').classList.add('active');
}

if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', showLogin);
} else {
    showLogin();
}
