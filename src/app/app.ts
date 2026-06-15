import { Component, OnDestroy, OnInit, signal, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit, OnDestroy, AfterViewInit {
  currentYear = new Date().getFullYear();

  proyectoActual = signal(0);
  private intervaloProyectos: ReturnType<typeof setInterval> | null = null;

  skills = [
    { name: 'HTML5', icon: 'bi-filetype-html', type: 'html', description: 'Estructura web' },
    { name: 'CSS3', icon: 'bi-filetype-css', type: 'css', description: 'Diseño visual' },
    { name: 'JavaScript', icon: 'bi-filetype-js', type: 'js', description: 'Interactividad' },
    { name: 'TypeScript', icon: 'bi-code-square', type: 'ts', description: 'Código tipado' },
    { name: 'Angular', icon: 'bi-triangle-fill', type: 'angular', description: 'Frontend moderno' },
    { name: 'Bootstrap', icon: 'bi-bootstrap-fill', type: 'bootstrap', description: 'Diseño responsive' },
    { name: 'Java', icon: 'bi-cup-hot-fill', type: 'java', description: 'Backend' },
    { name: 'Spring Boot', icon: 'bi-flower1', type: 'spring', description: 'APIs REST' },
    { name: 'Spring Security', icon: 'bi-shield-lock-fill', type: 'spring', description: 'Seguridad backend' },
    { name: 'JWT', icon: 'bi-key-fill', type: 'java', description: 'Autenticación' },
    { name: 'Python', icon: 'bi-filetype-py', type: 'python', description: 'Microservicios' },
    { name: 'Flask', icon: 'bi-braces', type: 'flask', description: 'API ligera' },
    { name: 'OpenCV', icon: 'bi-eye-fill', type: 'opencv', description: 'Visión artificial' },
    { name: 'MySQL', icon: 'bi-database-fill', type: 'mysql', description: 'Base de datos' },
    { name: 'PostgreSQL', icon: 'bi-database-check', type: 'mysql', description: 'Base de datos' },
    { name: 'SQL Server', icon: 'bi-hdd-network-fill', type: 'sqlserver', description: 'Consultas SQL' },
    { name: 'Docker', icon: 'bi-box-seam-fill', type: 'node', description: 'Contenedores' },
    { name: 'Node.js', icon: 'bi-node-plus-fill', type: 'node', description: 'Servicios backend' },
    { name: 'React Native', icon: 'bi-phone-fill', type: 'reactnative', description: 'Apps móviles' },
    { name: 'Git', icon: 'bi-git', type: 'git', description: 'Versionamiento' },
    { name: 'GitHub', icon: 'bi-github', type: 'github', description: 'Repositorios' },
    { name: 'Postman', icon: 'bi-send-fill', type: 'postman', description: 'Pruebas API' },
    { name: 'Swagger', icon: 'bi-journal-code', type: 'ts', description: 'Documentación API' }
  ];

  areas = [
    {
      title: 'Frontend',
      icon: 'bi-window-sidebar',
      description: 'Desarrollo interfaces modernas, responsivas y atractivas usando Angular, TypeScript, Bootstrap, HTML y CSS.'
    },
    {
      title: 'Backend',
      icon: 'bi-server',
      description: 'Construyo APIs REST, lógica de negocio y servicios seguros utilizando Java Spring Boot, Spring Security y Python Flask.'
    },
    {
      title: 'Bases de Datos',
      icon: 'bi-database-fill',
      description: 'Trabajo con modelado, consultas, relaciones y persistencia de datos usando PostgreSQL, MySQL y SQL Server.'
    },
    {
      title: 'Soluciones Web',
      icon: 'bi-lightning-charge-fill',
      description: 'Integro frontend, backend, seguridad, bases de datos y documentación para crear sistemas funcionales y escalables.'
    }
  ];

  projects = [
    {
      title: 'Guardián Financiero IA 🛡️',
      category: 'Arquitectura de Microservicios',
      url: 'https://github.com/Brayan1262/Guardian-Financiero-IA',
      icon: 'bi-shield-check',
      description:
        'Plataforma antifraude de grado empresarial con arquitectura de microservicios. Motor de reglas en Java, evaluación de IA en Python y dashboard en Angular. 100% Dockerizado.',
      points: [
        'Motor de reglas de negocio en Java Spring Boot.',
        'Servicio de evaluación de IA desarrollado en Python FastAPI.',
        'Dashboard de monitoreo e incidentes en Angular 17.',
        'Arquitectura de microservicios, PostgreSQL, Docker y autenticación con JWT.'
      ],
      tags: ['Angular 17', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT']
    },
    {
      title: 'IA Inventario Inteligente',
      category: 'Inventario Inteligente',
      url: 'https://github.com/Brayan1262/IA-inventario-inteligente',
      icon: 'bi-cart-check-fill',
      description:
        'Sistema inteligente de inventario que integra Angular, Java Spring Boot y base de datos con recomendaciones de reposición y asistente virtual.',
      points: [
        'Plataforma para gestionar productos, ventas, stock, historial y métricas del inventario.',
        'Dashboard empresarial con indicadores de productos críticos, stock normal y valor del inventario.',
        'Recomendaciones inteligentes para reposición de productos según el estado del stock.',
        'Frontend en Angular conectado a backend Java Spring Boot mediante API REST.'
      ],
      tags: ['Angular', 'Spring Boot', 'MySQL', 'API REST', 'Inventario', 'IA']
    },
    {
      title: 'Buki Booking App',
      category: 'Sistema de Reservas',
      url: 'https://github.com/Brayan1262/buki-booking-app',
      icon: 'bi-calendar-check-fill',
      description:
        'Aplicación web moderna orientada a la gestión eficiente de reservas, citas y disponibilidad de servicios.',
      points: [
        'Gestión de disponibilidad y franjas horarias configurables.',
        'Panel de administración y control de reservas en tiempo real.',
        'Desarrollo Full Stack enfocado en la experiencia de usuario.',
        'Integración con base de datos relacional y autenticación segura.'
      ],
      tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker']
    },
    {
      title: 'Sistema de Asistencia Facial',
      category: 'Visión Computacional',
      url: 'https://github.com/Brayan1262/sistema-asistencia-facial',
      icon: 'bi-person-bounding-box',
      description:
        'Sistema web de asistencia facial para instituciones educativas, integrando Angular, Java Spring Boot, Python Flask y OpenCV.',
      points: [
        'Registro de estudiantes y docentes con asociación de imágenes faciales.',
        'Reconocimiento facial mediante microservicio en Python Flask con OpenCV.',
        'Backend en Java Spring Boot para gestionar personas, asistencias, estados y justificaciones.',
        'Frontend administrativo en Angular con diseño profesional y reportes.'
      ],
      tags: ['Angular', 'Spring Boot', 'Python Flask', 'OpenCV', 'MySQL']
    },
    {
      title: 'Gestión Usuarios Segura API',
      category: 'Seguridad Backend',
      url: 'https://github.com/Brayan1262/gestion-usuarios-segura-api',
      icon: 'bi-shield-lock-fill',
      description:
        'API REST segura para gestión de usuarios, roles y autenticación con JWT, desarrollada con Java Spring Boot, Spring Security y PostgreSQL.',
      points: [
        'Registro, login, generación de token JWT y protección de rutas por roles.',
        'Gestión de usuarios con roles ADMIN, USER y SUPPORT, activación y desactivación de cuentas.',
        'Manejo global de errores, validaciones profesionales y documentación interactiva con Swagger.',
        'Arquitectura por capas, integraciones sólidas y pruebas unitarias.'
      ],
      tags: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Docker']
    }
  ];

  ngOnInit(): void {
    this.iniciarCarruselAutomatico();
  }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      });

      setTimeout(() => {
        document.querySelectorAll('.reveal-up').forEach((el) => {
          observer.observe(el);
        });
      }, 100);
    }
  }


  ngOnDestroy(): void {
    this.detenerCarruselAutomatico();
  }

  iniciarCarruselAutomatico(): void {
    this.detenerCarruselAutomatico();

    this.intervaloProyectos = setInterval(() => {
      this.siguienteProyectoAutomatico();
    }, 5000);
  }

  detenerCarruselAutomatico(): void {
    if (this.intervaloProyectos) {
      clearInterval(this.intervaloProyectos);
      this.intervaloProyectos = null;
    }
  }

  siguienteProyectoAutomatico(): void {
    this.proyectoActual.update((actual) => {
      return (actual + 1) % this.projects.length;
    });
  }

  siguienteProyecto(): void {
    this.siguienteProyectoAutomatico();
    this.iniciarCarruselAutomatico();
  }

  anteriorProyecto(): void {
    this.proyectoActual.update((actual) => {
      return actual === 0 ? this.projects.length - 1 : actual - 1;
    });

    this.iniciarCarruselAutomatico();
  }

  irAProyecto(index: number): void {
    this.proyectoActual.set(index);
    this.iniciarCarruselAutomatico();
  }
}