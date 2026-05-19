import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnDestroy {
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
    { name: 'Python', icon: 'bi-filetype-py', type: 'python', description: 'Microservicios' },
    { name: 'Flask', icon: 'bi-braces', type: 'flask', description: 'API ligera' },
    { name: 'OpenCV', icon: 'bi-eye-fill', type: 'opencv', description: 'Visión artificial' },
    { name: 'MySQL', icon: 'bi-database-fill', type: 'mysql', description: 'Base de datos' },
    { name: 'SQL Server', icon: 'bi-hdd-network-fill', type: 'sqlserver', description: 'Consultas SQL' },
    { name: 'Node.js', icon: 'bi-node-plus-fill', type: 'node', description: 'Servicios backend' },
    { name: 'React Native', icon: 'bi-phone-fill', type: 'reactnative', description: 'Apps móviles' },
    { name: 'Git', icon: 'bi-git', type: 'git', description: 'Versionamiento' },
    { name: 'GitHub', icon: 'bi-github', type: 'github', description: 'Repositorios' },
    { name: 'Postman', icon: 'bi-send-fill', type: 'postman', description: 'Pruebas API' }
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
      description: 'Construyo APIs REST y lógica de negocio utilizando Java Spring Boot, Node.js y Python Flask.'
    },
    {
      title: 'Bases de Datos',
      icon: 'bi-database-fill',
      description: 'Trabajo con modelado, consultas, conexión y gestión de información usando MySQL y SQL Server.'
    },
    {
      title: 'Soluciones Web',
      icon: 'bi-lightning-charge-fill',
      description: 'Integro frontend, backend y base de datos para crear sistemas funcionales, escalables y útiles.'
    }
  ];

  projects = [
    {
      title: 'Sistema de Asistencia Facial',
      category: 'Proyecto destacado',
      url: 'https://github.com/Brayan1262/sistema-asistencia-facial',
      icon: 'bi-person-bounding-box',
      description:
        'Sistema web de asistencia facial para instituciones educativas. Permite registrar estudiantes y docentes, asociar imágenes faciales, reconocer personas desde cámara o imagen y marcar asistencia automáticamente.',
      points: [
        'Frontend profesional desarrollado con Angular, TypeScript, Bootstrap y modo claro/oscuro.',
        'Backend con Java Spring Boot para gestionar personas, asistencias, faltas y justificaciones.',
        'Microservicio Python Flask con OpenCV para registrar y reconocer rostros.',
        'Base de datos MySQL para almacenar personas, estados, asistencias y rutas faciales.'
      ],
      tags: ['Angular', 'Spring Boot', 'Python Flask', 'OpenCV', 'MySQL']
    },
    {
      title: 'Plataforma Web de Cursos Online',
      category: 'Educación digital',
      url: 'https://github.com/Brayan1262/Pagina-web---Cursos-online-',
      icon: 'bi-mortarboard-fill',
      description:
        'Plataforma web de cursos online orientada a niños, adolescentes y adultos, con interfaz adaptable, contenido educativo y enfoque en personas de bajos recursos.',
      points: [
        'Diseño de interfaz educativa con secciones organizadas.',
        'Uso de HTML, CSS, JavaScript y Bootstrap para una experiencia visual clara.',
        'Proyecto académico orientado a educación, accesibilidad y aprendizaje digital.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Educación']
    },
    {
      title: 'UCVBot',
      category: 'Chatbot académico',
      url: 'https://github.com/Brayan1262/UCVBot',
      icon: 'bi-chat-dots-fill',
      description:
        'Chatbot web orientado a brindar información y asistencia académica para estudiantes, desarrollado con TypeScript y tecnologías web modernas.',
      points: [
        'Proyecto enfocado en asistencia académica para estudiantes.',
        'Uso de TypeScript y tecnologías frontend modernas.',
        'Aplicación orientada a mejorar la comunicación y consulta de información universitaria.'
      ],
      tags: ['TypeScript', 'Frontend', 'Chatbot', 'Web App', 'UCV']
    }
  ];

  ngOnInit(): void {
    this.iniciarCarruselAutomatico();
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