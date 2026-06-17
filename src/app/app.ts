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
    { name: 'Swagger', icon: 'bi-journal-code', type: 'ts', description: 'Documentación API' },
    { name: 'Kafka', icon: 'bi-diagram-3-fill', type: 'node', description: 'Eventos/Streaming' },
    { name: 'React', icon: 'bi-filetype-jsx', type: 'react', description: 'Frontend React' },
    { name: 'Kubernetes', icon: 'bi-box-fill', type: 'node', description: 'Orquestación' },
    { name: 'Flutter', icon: 'bi-phone-fill', type: 'reactnative', description: 'Apps multiplataforma' },
    { name: 'Redis', icon: 'bi-database-dash', type: 'mysql', description: 'Caché en memoria' }
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
      title: 'Plataforma Atalaya 🛡️',
      category: 'Ciberseguridad y Monitoreo',
      url: 'https://github.com/Brayan1262/plataforma-atalaya',
      icon: 'bi-shield-shaded',
      description:
        'Plataforma de ciberseguridad y monitorización de infraestructura en tiempo real con arquitectura orientada a eventos (Kafka, Kubernetes, Spring Boot y React).',
      points: [
        'Arquitectura orientada a eventos usando Apache Kafka.',
        'Despliegue y orquestación con Kubernetes e Istio.',
        'Microservicios desarrollados en Java Spring Boot.',
        'Interfaz de monitoreo en tiempo real usando React.'
      ],
      tags: ['React', 'Spring Boot', 'Kafka', 'Kubernetes', 'Cybersecurity', 'Microservices']
    },
    {
      title: 'Orquestador Logístico Empresarial 🚚',
      category: 'Sistemas en Tiempo Real',
      url: 'https://github.com/Brayan1262/Orquestador-logistico-empresarial',
      icon: 'bi-truck',
      description:
        'Sistema empresarial escalable para seguimiento de flotas en tiempo real. Usa arquitectura orientada a eventos con Spring Boot, Kafka, Redis, y un mapa interactivo en Flutter Web con SSE.',
      points: [
        'Seguimiento de flotas en tiempo real usando Server-Sent Events (SSE).',
        'Arquitectura escalable basada en eventos con Apache Kafka.',
        'Manejo de estados y caché en memoria utilizando Redis.',
        'Mapa interactivo desarrollado multiplataforma con Flutter Web.'
      ],
      tags: ['Flutter', 'Spring Boot', 'Kafka', 'Redis', 'Event-Driven', 'Docker']
    },
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
      title: 'CRM Orientado a Eventos 📊',
      category: 'API REST Nivel Producción',
      url: 'https://github.com/Brayan1262/crm-orientado-a-eventos',
      icon: 'bi-graph-up-arrow',
      description:
        'API REST nivel Producción. Implementa Arquitectura Orientada a Eventos (EDA) con Change Data Capture (Debezium/Kafka), Alta Disponibilidad en Kubernetes, Observabilidad (Grafana) y resiliencia probada con Chaos Engineering.',
      points: [
        'Arquitectura Orientada a Eventos (EDA) con Change Data Capture (Debezium y Kafka).',
        'Alta Disponibilidad y orquestación de contenedores en Kubernetes.',
        'Observabilidad integral del sistema utilizando Grafana y Prometheus.',
        'Pruebas de resiliencia y tolerancia a fallos mediante Chaos Engineering.'
      ],
      tags: ['Spring Boot', 'Kafka', 'Kubernetes', 'Debezium', 'Grafana', 'Docker']
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