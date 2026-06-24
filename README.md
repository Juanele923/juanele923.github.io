# Portfolio Personal - Juan Lopez

Portfolio profesional desarrollado con Astro y Tailwind CSS para presentar mi perfil como desarrollador web, experiencia laboral, formacion, habilidades, proyectos y datos de contacto.

## Descripcion

Este sitio funciona como carta de presentacion digital y CV interactivo. Esta orientado a mostrar de forma clara mi trayectoria profesional, mis conocimientos tecnicos y algunos de los servicios o areas de trabajo en los que tengo experiencia.

El proyecto esta construido como una web estatica optimizada, preparada para desplegarse en GitHub Pages.

## Caracteristicas

- Diseno responsive para movil, tablet y escritorio.
- Modo claro y modo oscuro con preferencia guardada en el navegador.
- Menu hamburguesa en version movil.
- Navegacion por secciones con scroll suave.
- Secciones modulares para experiencia, proyectos, educacion, skills y contacto.
- Descarga directa del CV desde la web.
- Despliegue automatizado mediante GitHub Actions.

## Tecnologias

- Astro
- Tailwind CSS
- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Estructura Principal

```text
src/
  assets/mocks/       Datos de experiencia, educacion, proyectos y skills
  components/         Componentes Astro reutilizables
  layouts/            Layout principal del sitio
  pages/              Paginas de Astro
  styles/             Estilos globales

public/
  arch/               CV descargable
  img/                Imagenes e iconos publicos

.github/workflows/   Workflow de despliegue en GitHub Pages
```

## Instalacion Local

Clona el repositorio e instala las dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
```

Genera la version de produccion:

```bash
npm run build
```

Previsualiza la build localmente:

```bash
npm run preview
```

## Autor

Juan Lopez

- GitHub: [github.com/juanele923](https://github.com/juanele923)
- LinkedIn: [linkedin.com/in/juan-lópez-ortiz](https://www.linkedin.com/in/juan-l%C3%B3pez-ortiz/)
- Email: [juanele92@gmail.com](mailto:juanele92@gmail.com)

## Licencia y Uso

Todos los derechos reservados.

Este proyecto, su codigo, diseno, textos, imagenes, estructura y contenido personal no pueden ser copiados, reutilizados, modificados, redistribuidos ni publicados por terceros sin autorizacion expresa y por escrito del autor.

El repositorio se publica unicamente con fines de presentacion profesional y consulta. No se concede permiso para usarlo como plantilla, base comercial, material redistribuible o recurso derivado sin consentimiento previo.
