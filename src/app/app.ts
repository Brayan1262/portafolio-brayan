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
      url: 'https://github.com/Brayan1262/IA-guardian-financiero',
      icon: 'bi-shield-check',
      description:
        'Plataforma full-stack antifraude de grado empresarial. Combina motor de reglas en Java y evaluación de IA en Python para analizar transacciones y calcular riesgos en tiempo real.',
      points: [
        'Motor de reglas de negocio en Java Spring Boot.',
        'Servicio de evaluación de IA desarrollado en Python FastAPI.',
        'Dashboard de monitoreo e incidentes en Angular.',
        'Arquitectura de microservicios, PostgreSQL, Docker y autenticación con JWT.'
      ],
      tags: ['Angular', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Docker', 'IA']
    },
    {
      title: 'Centinela TI 🛡️',
      category: 'Monitoreo e IA Predictiva',
      url: 'https://github.com/Brayan1262/centinela-TI',
      icon: 'bi-cpu-fill',
      description:
        'Centro de mando predictivo y plataforma SaaS de grado Enterprise para el monitoreo de servidores en tiempo real y seguridad predictiva usando Inteligencia Artificial.',
      points: [
        'Comunicación en tiempo real mediante WebSockets (STOMP).',
        'Modelo de Machine Learning en Python para predecir anomalías y uso de recursos.',
        'Frontend SPA interactivo con alertas en tiempo real y dashboards analíticos.',
        'Ecosistema dockerizado con microservicios en Java Spring Boot y PostgreSQL.'
      ],
      tags: ['Java', 'Spring Boot', 'Python', 'WebSockets', 'Docker', 'PostgreSQL']
    },
    {
      title: 'IA Inventario Inteligente',
      category: 'Inventario Inteligente',
      url: 'https://github.com/Brayan1262/IA-inventario-inteligente',
      icon: 'bi-cart-check-fill',
      description:
        'Sistema inteligente de inventario y gestión que integra Angular y Java Spring Boot con un asistente virtual de IA para recomendaciones automáticas.',
      points: [
        'Plataforma completa para gestionar productos, ventas, stock, y métricas del inventario.',
        'Dashboard empresarial con indicadores de productos críticos y valor del inventario.',
        'Asistente IA para recomendaciones predictivas de reposición de productos.',
        'Frontend moderno en Angular conectado a backend Java Spring Boot con MySQL.'
      ],
      tags: ['Angular', 'Spring Boot', 'MySQL', 'API REST', 'IA']
    },
    {
      title: 'Sistema de Asistencia Facial',
      category: 'Visión Computacional',
      url: 'https://github.com/Brayan1262/sistema-asistencia-facial',
      icon: 'bi-person-bounding-box',
      description:
        'Sistema web avanzado de asistencia facial para instituciones, aplicando visión computacional para registro automático integrando Angular, Spring Boot y Flask.',
      points: [
        'Reconocimiento facial biométrico mediante microservicio en Python Flask con OpenCV.',
        'Registro preciso de usuarios con asociación automática de imágenes faciales.',
        'Backend en Java Spring Boot para gestionar personas, asistencias y justificaciones.',
        'Frontend administrativo en Angular con paneles de control y generación de reportes.'
      ],
      tags: ['Angular', 'Spring Boot', 'Python Flask', 'OpenCV', 'MySQL']
    },
    {
      title: 'API Gestión Tareas Segura',
      category: 'Seguridad Backend',
      url: 'https://github.com/Brayan1262/api-gestion-tareas-segura',
      icon: 'bi-lock-fill',
      description:
        'API REST profesional para la gestión de tareas y proyectos, implementando altos estándares de seguridad, control de acceso y observabilidad.',
      points: [
        'Autenticación robusta con JWT y Control de Acceso Basado en Roles (RBAC).',
        'Trazabilidad completa mediante sistemas de logging estructurado y métricas.',
        'Garantía de calidad con implementación de pruebas automatizadas integrales.',
        'Despliegue y ecosistema totalmente Dockerizado sobre base de datos PostgreSQL.'
      ],
      tags: ['Python', 'API REST', 'JWT', 'RBAC', 'PostgreSQL', 'Docker']
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