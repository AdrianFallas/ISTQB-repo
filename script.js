// Formulario tradicional
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simulación de login (reemplaza con tu lógica real)
    if (email && password) {
        showNotification('Iniciando sesión...', 'info');
        
        setTimeout(() => {
            showNotification('¡Sesión iniciada correctamente!', 'success');
           redirigir();
        }, 1500);
    } else {
        showNotification('Por favor completa todos los campos', 'error');
    }
});

function redirigir() {
    window.location.href = './Home/index.html';
}
// Google Sign-In
function initGoogleSignIn() {
    google.accounts.id.initialize({
        client_id: 'TU_CLIENT_ID_AQUI.googleusercontent.com', // Reemplaza con tu Client ID
        callback: handleGoogleSignIn,
        auto_select: false,
        cancel_on_tap_outside: true,
    });

    google.accounts.id.renderButton(
        document.getElementById('googleLoginBtn'),
        {
            type: 'standard',
            theme: 'outline',
            size: 'large',
            text: 'signin_with',
            shape: 'rectangular'
        }
    );
}

// Callback de Google Sign-In
function handleGoogleSignIn(response) {
    // Decodificar el token JWT
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    
    showNotification('¡Autenticación con Google exitosa!', 'success');
    
    console.log('Usuario Google:', payload);
    // Aquí envías el token a tu backend para validarlo
    // fetch('/api/google-login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ token: response.credential })
    // });
}

// Notificaciones
function showNotification(message, type) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Estilos CSS para notificación (agregar al CSS)
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-eliminar
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Google Sign-In (solo si tienes el Client ID)
    if (window.google && window.google.accounts) {
        initGoogleSignIn();
    }
    
    // Efectos adicionales
    const inputs = document.querySelectorAll('.input-group input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});