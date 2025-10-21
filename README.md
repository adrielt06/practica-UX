# Teatro Principal - Mockup Web

Un sitio web mockup para venta de entradas de espectáculos teatrales, desarrollado como prototipo para pruebas de interfaz de usuario y análisis con Google Analytics.

## 🎭 Características

- **7 páginas completas** con navegación fluida
- **Diseño responsive** usando Bootstrap 5
- **Google Analytics 4** integrado para análisis de comportamiento
- **Formularios funcionales** con validación
- **Temática teatral** con paleta de colores profesional
- **Optimizado para GitHub Pages**

## 📁 Estructura del Proyecto

```
practica-UX/
├── index.html              # Página principal con espectáculos destacados
├── cartelera.html          # Cartelera completa con filtros
├── salas.html              # Información de las salas del teatro
├── registro.html            # Formulario de registro de usuarios
├── compra.html             # Formulario de compra de entradas
├── confirmacion.html       # Página de confirmación post-compra
├── contacto.html           # Página de contacto y FAQ
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   └── main.js            # JavaScript principal
├── .nojekyll              # Archivo para GitHub Pages
└── README.md              # Este archivo
```

## 🚀 Páginas Implementadas

### 1. **Inicio (index.html)**
- Hero section con información del teatro
- Espectáculos destacados con cards visuales
- Información sobre el teatro
- Navegación a otras secciones

### 2. **Cartelera (cartelera.html)**
- Listado completo de espectáculos
- Sistema de búsqueda y filtros
- Información detallada de cada obra
- Botones de compra directa

### 3. **Salas (salas.html)**
- Información detallada de las 3 salas
- Características técnicas de cada espacio
- Servicios adicionales
- Galería de imágenes

### 4. **Registro (registro.html)**
- Formulario completo de registro
- Validación de campos
- Beneficios para miembros
- Testimonios de usuarios

### 5. **Compra (compra.html)**
- Formulario de compra paso a paso
- Selección de espectáculo, fecha y asientos
- Información de pago
- Resumen de compra en tiempo real

### 6. **Confirmación (confirmacion.html)**
- Detalles de la compra realizada
- Información de entradas digitales
- Recomendaciones adicionales
- Datos de contacto

### 7. **Contacto (contacto.html)**
- Formulario de contacto
- Información de ubicación y horarios
- Preguntas frecuentes
- Enlaces a redes sociales

## 🎨 Diseño

- **Paleta de colores**: Rojo teatral (#8B0000), dorado (#DAA520), negro (#000000)
- **Tipografía**: Segoe UI, Tahoma, Geneva, Verdana
- **Componentes**: Cards, formularios, botones personalizados
- **Responsive**: Mobile-first design
- **Animaciones**: Transiciones suaves y efectos hover

## 📊 Google Analytics 4

El sitio incluye tracking completo de Google Analytics 4 con:

- **Eventos de navegación**: Page views, clicks en enlaces
- **Eventos de compra**: Purchase intent, form submissions
- **Eventos de engagement**: Form interactions, button clicks
- **E-commerce tracking**: Product views, add to cart, purchases

### Configuración de Google Analytics

1. Reemplaza `GA_MEASUREMENT_ID` en todas las páginas con tu ID real de Google Analytics
2. Los eventos se configuran automáticamente en `js/main.js`
3. Se incluyen eventos personalizados para análisis detallado

## 🚀 Deployment en GitHub Pages

### Pasos para publicar:

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/practica-UX.git
   git push -u origin main
   ```

2. **Habilitar GitHub Pages**
   - Ve a Settings > Pages en tu repositorio
   - Selecciona "Deploy from a branch"
   - Elige la rama "main"
   - Guarda los cambios

3. **Acceder al sitio**
   - Tu sitio estará disponible en: `https://tu-usuario.github.io/practica-UX/`

### Archivos de configuración incluidos:
- `.nojekyll`: Evita el procesamiento de Jekyll
- Estructura optimizada para GitHub Pages
- Enlaces relativos para navegación local

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados y responsive design
- **Bootstrap 5**: Framework CSS para componentes
- **JavaScript**: Interactividad y validación de formularios
- **Google Analytics 4**: Tracking y análisis
- **GitHub Pages**: Hosting gratuito

## 📱 Características Responsive

- **Mobile-first**: Optimizado para dispositivos móviles
- **Breakpoints**: Adaptable a tablets y desktop
- **Navegación**: Menú hamburguesa en móviles
- **Formularios**: Optimizados para touch
- **Imágenes**: Responsive y optimizadas

## 🔧 Funcionalidades JavaScript

- **Validación de formularios**: Campos requeridos, email, teléfono
- **Cálculo de precios**: Total dinámico en compra
- **Filtros de búsqueda**: En cartelera
- **Navegación fluida**: Smooth scroll
- **Eventos de Analytics**: Tracking automático

## 📈 Métricas de Analytics Incluidas

- **Page Views**: Todas las páginas
- **User Engagement**: Tiempo en página, scroll depth
- **Form Interactions**: Registro, compra, contacto
- **E-commerce**: Product views, add to cart, purchases
- **Custom Events**: Button clicks, navigation patterns

## 🎯 Casos de Uso para Testing

1. **Navegación**: Usuario navega entre páginas
2. **Búsqueda**: Usuario busca espectáculos específicos
3. **Registro**: Usuario se registra en el sitio
4. **Compra**: Usuario completa proceso de compra
5. **Contacto**: Usuario envía mensaje de contacto

## 📞 Soporte

Para preguntas sobre el proyecto o configuración de Google Analytics, contacta al desarrollador.

---

**Desarrollado para pruebas de UX y análisis de comportamiento de usuarios en aplicaciones web de venta de entradas teatrales.**
