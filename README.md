# The Agency – Detective Operations Site

This project is a single-page training marketing site for **The Agency**, a boutique detective and intelligence firm. It delivers a clean brief, 
showcases service pillars, and gives prospects a direct way to request a confidential engagement totally made by this stud.


## Stack and structure
- **Bootstrap 5 (CDN)** for the responsive grid, spacing utilities, and components.
- **Custom CSS** (`css/styles.css`) for the detective branding, timeline, cookie modal, and footer polish.
- **Vanilla JS** (`js/app.js`) to handle the cookie consent modal and banner interactions (localStorage-based). The same file is the place to extend validation logic for the contact CTA/form when needed.
- **Assets** live under `assets/` (logo, branding, favicons, fonts). A Cinzel-inspired WOFF2 file sits in `assets/fonts/` and is loaded via `@font-face` for hero/headline typography.

## Cookie & form JS
=======
# Cookie & form JS
- On page load the script reads `localStorage` to decide whether to show the banner/modal.
- Users can open the full policy (“aquí”), accept, or reject. Responses are stored so the banner stays hidden afterward.
- The same module exposes a place to hook in basic contact validation (e.g., `#contactForm` submit listeners) if/when a full form is introduced.

## Contact
CTA buttons link to `#contacto`, which summarizes how to reach The Agency’s coordination desk 24/7. Update phone/email copy as operations expand.


**La Agencia – Sitio de Operaciones Detectivescas**
Este proyecto es un sitio de marketing de formación de una sola página para La Agencia, una firma boutique de inteligencia y detectives. Ofrece un resumen impecable, muestra los pilares de sus servicios y proporciona a los clientes potenciales una forma directa de solicitar un compromiso confidencial, creado totalmente por este crack.

## Stack y estructura
Bootstrap 5 (CDN) para la cuadrícula responsiva, utilidades de espaciado y componentes.

## CSS personalizado (css/styles.css) para el branding de detectives, la línea de tiempo, el modal de cookies y el acabado del pie de página.

## Vanilla JS (js/app.js) para gestionar el modal de consentimiento de cookies y las interacciones del banner (basado en localStorage). El mismo archivo es el lugar para ampliar la lógica de validación para el formulario/llamada a la acción (CTA) de contacto cuando sea necesario.

## Recursos (Assets) se encuentran bajo assets/ (logo, branding, favicons, fuentes). Un archivo WOFF2 inspirado en la fuente Cinzel se aloja en assets/fonts/ y se carga mediante @font-face para la tipografía del encabezado y la sección principal.

## JS de Cookies y formulario
Al cargar la página, el script lee el localStorage para decidir si mostrar el banner o el modal.

Los usuarios pueden abrir la política completa ("aquí"), aceptar o rechazar. Las respuestas se almacenan para que el banner permanezca oculto después.

El mismo módulo ofrece un espacio para vincular una validación de contacto básica (por ejemplo, detectores de envío en #contactForm) si se introduce un formulario completo en el futuro.

## Contacto
Los botones de llamada a la acción vinculan a #contacto, que resume cómo contactar con la mesa de coordinación de La Agencia las 24 horas, los 7 días de la semana. Actualiza la información de teléfono o correo electrónico a medida que se expandan las operaciones.
