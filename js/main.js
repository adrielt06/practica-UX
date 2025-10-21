// Teatro Mockup - JavaScript Principal

// Google Analytics 4 Configuration
// Reemplazar 'GA_MEASUREMENT_ID' con tu ID real de Google Analytics
const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// Inicializar Google Analytics
function initGoogleAnalytics() {
  if (typeof gtag === 'undefined') {
    // Cargar Google Analytics si no está disponible
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID);
      window.gtag = gtag;
    };
  }
}

// Eventos personalizados para Google Analytics
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
}

// Navegación y funcionalidades
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar Google Analytics
  initGoogleAnalytics();
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Validación de formularios
  initFormValidation();
  
  // Animaciones de entrada
  initScrollAnimations();
  
  // Funcionalidad de búsqueda en cartelera
  initSearchFunctionality();
});

// Validación de formularios
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (!validateForm(this)) {
        e.preventDefault();
        return false;
      }
      
      // Track form submission
      trackEvent('form_submit', {
        form_name: this.id || 'unnamed_form',
        page: window.location.pathname
      });
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const requiredFields = form.querySelectorAll('[required]');
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      showFieldError(field, 'Este campo es obligatorio');
      isValid = false;
    } else {
      clearFieldError(field);
    }
    
    // Validación específica por tipo
    if (field.type === 'email' && field.value) {
      if (!isValidEmail(field.value)) {
        showFieldError(field, 'Ingrese un email válido');
        isValid = false;
      }
    }
    
    if (field.type === 'tel' && field.value) {
      if (!isValidPhone(field.value)) {
        showFieldError(field, 'Ingrese un teléfono válido');
        isValid = false;
      }
    }
  });
  
  return isValid;
}

function showFieldError(field, message) {
  clearFieldError(field);
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'invalid-feedback d-block';
  errorDiv.textContent = message;
  
  field.classList.add('is-invalid');
  field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
  field.classList.remove('is-invalid');
  const existingError = field.parentNode.querySelector('.invalid-feedback');
  if (existingError) {
    existingError.remove();
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Animaciones de scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observar elementos animables
  document.querySelectorAll('.spectacle-card, .sala-card, .form-section').forEach(el => {
    observer.observe(el);
  });
}

// Funcionalidad de búsqueda en cartelera
function initSearchFunctionality() {
  const searchInput = document.getElementById('search-spectacles');
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      filterSpectacles(this.value);
    });
  }
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      filterSpectaclesByCategory(filter);
      
      // Track filter usage
      trackEvent('filter_spectacles', {
        filter_type: filter,
        page: 'cartelera'
      });
    });
  });
}

function filterSpectacles(searchTerm) {
  const cards = document.querySelectorAll('.spectacle-card');
  const term = searchTerm.toLowerCase();
  
  cards.forEach(card => {
    const title = card.querySelector('.spectacle-title').textContent.toLowerCase();
    const theme = card.querySelector('.spectacle-theme').textContent.toLowerCase();
    const cast = card.querySelector('.spectacle-cast').textContent.toLowerCase();
    
    const matches = title.includes(term) || theme.includes(term) || cast.includes(term);
    
    card.style.display = matches ? 'block' : 'none';
  });
}

function filterSpectaclesByCategory(category) {
  const cards = document.querySelectorAll('.spectacle-card');
  
  cards.forEach(card => {
    if (category === 'all') {
      card.style.display = 'block';
    } else {
      const cardCategory = card.dataset.category;
      card.style.display = cardCategory === category ? 'block' : 'none';
    }
  });
}

// Funcionalidad de compra
function initPurchaseFlow() {
  const buyButtons = document.querySelectorAll('.btn-buy-tickets');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const spectacleId = this.dataset.spectacleId;
      const spectacleName = this.dataset.spectacleName;
      
      // Track purchase intent
      trackEvent('purchase_intent', {
        spectacle_id: spectacleId,
        spectacle_name: spectacleName,
        page: window.location.pathname
      });
      
      // Redirigir a página de compra con parámetros
      const params = new URLSearchParams({
        spectacle: spectacleId,
        name: spectacleName
      });
      
      window.location.href = `compra.html?${params.toString()}`;
    });
  });
}

// Cargar datos de espectáculo en página de compra
function loadSpectacleData() {
  const urlParams = new URLSearchParams(window.location.search);
  const spectacleId = urlParams.get('spectacle');
  const spectacleName = urlParams.get('name');
  
  if (spectacleId && spectacleName) {
    // Llenar campos del formulario
    const spectacleSelect = document.getElementById('spectacle-select');
    if (spectacleSelect) {
      spectacleSelect.value = spectacleId;
    }
    
    const spectacleNameDisplay = document.getElementById('spectacle-name-display');
    if (spectacleNameDisplay) {
      spectacleNameDisplay.textContent = spectacleName;
    }
  }
}

// Calcular total de compra
function calculateTotal() {
  const quantity = parseInt(document.getElementById('quantity').value) || 0;
  const pricePerTicket = 25; // Precio base por entrada
  
  const subtotal = quantity * pricePerTicket;
  const tax = subtotal * 0.16; // 16% IVA
  const total = subtotal + tax;
  
  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Inicializar funcionalidades específicas por página
function initPageSpecificFeatures() {
  const currentPage = window.location.pathname.split('/').pop();
  
  switch(currentPage) {
    case 'cartelera.html':
      initSearchFunctionality();
      break;
    case 'compra.html':
      loadSpectacleData();
      initPurchaseCalculations();
      break;
    case 'index.html':
      initPurchaseFlow();
      break;
  }
}

function initPurchaseCalculations() {
  const quantityInput = document.getElementById('quantity');
  if (quantityInput) {
    quantityInput.addEventListener('input', calculateTotal);
    calculateTotal(); // Calcular inicial
  }
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  initGoogleAnalytics();
  initPageSpecificFeatures();
});

// Utilidades adicionales
function showLoading(element) {
  element.classList.add('loading');
}

function hideLoading(element) {
  element.classList.remove('loading');
}

function showMessage(message, type = 'success') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type === 'success' ? 'success-custom' : 'danger-custom'} alert-custom fade-in-up`;
  alertDiv.textContent = message;
  
  const container = document.querySelector('.container');
  container.insertBefore(alertDiv, container.firstChild);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    alertDiv.remove();
  }, 5000);
}
