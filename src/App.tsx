import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Download, Menu, X, MapPin, Phone, ChevronDown, Calendar } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { toast } from 'sonner';
import { Toaster } from './components/ui/sonner';
import profileImage from 'figma:asset/967e5f1635da1bc24af4f7afe620e6aedc144bdf.png';
import CVDocument from './components/CVDocument';

type Language = 'es' | 'en';

const content = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      testimonials: 'Recomendaciones',
      contacts: 'Contacto'
    },
    hero: {
      name: 'Agustina Kvitkin',
      title: 'Project Manager IT & Digital Transformation',
      tagline: 'Transformo procesos complejos en soluciones simples y sostenibles.',
      cta: 'VIEW MY PROJECTS'
    },
    metrics: {
      items: [
        { value: '4', label: 'Equipos a cargo' },
        { value: '30M+', label: 'Registros procesados' },
        { value: '9K+', label: 'Usuarios impactados' },
        { value: '4+', label: 'Años de experiencia' }
      ]
    },
    about: {
      title: 'Sobre mí',
      text: 'Project Manager y Team Leader en Banco Macro, liderando iniciativas de transformación digital en los ámbitos de Portal Web, Gestión Documental y el Sistema de Diseño de Contenidos croMa. Con experiencia en la coordinación integral de estrategias end-to-end: desde la planificación y evaluación de proveedores hasta la implementación y la mejora continua, alineando tecnología, negocio y personas para generar impacto medible.'
    },
    cta: {
      title: '¿Buscas un Project Manager IT para tu equipo?',
      subtitle: 'Transformemos juntos la visión digital de tu organización',
      buttonEmail: 'Enviar Email',
      buttonMeeting: 'Agendar Reunión'
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          role: 'Líder de Equipos & Líder de Proyecto',
          company: 'Banco Macro',
          period: 'Nov 2023 - Actualidad',
          description: [
            'Lidero los equipos de Portal Web, Gestión Documental y croMa – Content Design System, impulsando la transformación digital del banco',
            'Gestiono proyectos de punta a punta: desde la definición de estrategia y negociación con proveedores hasta la implementación y mejora continua',
            'Actúo como nexo entre áreas técnicas y de negocio, asegurando la evolución tecnológica alineada con las necesidades estratégicas del banco'
          ]
        },
        {
          role: 'Ingeniera en Datos',
          company: 'Banco Itaú',
          period: 'Jul 2022 - Ago 2023',
          description: [
            'Reingeniería de bases de datos del SISCEN (Sistema Centralizado de Requerimientos Informativos), garantizando calidad, trazabilidad y cumplimiento normativo ante el Banco Central',
            'Desarrollo y optimización de procesos ETL y scripts SQL para grandes volúmenes de datos sensibles, asegurando integridad y eficiencia en los flujos informativos'
          ]
        },
        {
          role: 'Desarrolladora de Datos',
          company: 'Banco Itaú',
          period: 'Jul 2021 - Jul 2022',
          description: [
            'Extracción, transformación e integración de datos en un entorno ágil, mejorando procesos internos y tiempos de respuesta',
            'Generación de interfaces y reportes clave para los equipos de Finanzas y Regímenes Informativos'
          ]
        },
        {
          role: 'Desarrolladora Full Stack',
          company: 'Seincomp',
          period: 'Mar 2021 - Jun 2021',
          description: [
            'Desarrollo backend con .NET Core, integrando módulos y servicios para sistemas internos de gestión'
          ]
        }
      ]
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          id: 'MACRO-002',
          title: 'Modernización a un Gestor Documental Inteligente',
          company: 'Banco Macro',
          status: 'Completed',
          summary: 'Transformación integral del ecosistema documental del banco, incorporando inteligencia artificial y migrando más de 12 millones de documentos para 9.000 usuarios.',
          description: 'Transformación integral del ecosistema documental del banco, modernizando la infraestructura y sumando capacidades de inteligencia artificial.',
          context: 'Proyecto de transformación integral del ecosistema documental del banco, impulsado por la obsolescencia de las plataformas existentes (SharePoint y Datacap). El objetivo fue modernizar la infraestructura, optimizar procesos y sumar inteligencia artificial al gestor documental.',
          role: 'Coordiné la evaluación técnica y funcional de la nueva solución junto a las áreas de Arquitectura, Seguridad, Integraciones y Usuarios. Gestioné el equipo técnico interno responsable de la migración desde SharePoint y Datacap, abarcando más de 9.000 usuarios y la migración de más de 12 millones de documentos.',
          impact: 'La incorporación de capacidades de IA permitió analizar documentos de forma avanzada, no solo para su consulta, sino también para generar información a partir de su contenido, potenciando la trazabilidad, la búsqueda y la toma de decisiones operativas.',
          keyResponsibilities: 'Evaluación de alternativas, coordinación del equipo técnico interno, definición del roadmap de implementación y mantenimiento del nuevo gestor documental.',
          tags: ['Document Management', 'AI', 'SharePoint Migration', 'Team Leadership']
        },
        {
          id: 'MACRO-003',
          title: 'Fusión Bancaria – Migración de la Base de Prevención de Lavado de Activos',
          company: 'Banco Macro',
          status: 'Completed',
          summary: 'Integración y migración de 30 millones de datos sensibles durante la fusión bancaria, asegurando trazabilidad y cumplimiento normativo.',
          description: 'Migración y consolidación de la base de datos del sistema de Prevención de Lavado de Activos en el marco de una fusión bancaria.',
          context: 'Proyecto estratégico en el marco de la fusión entre dos entidades bancarias, enfocado en la migración y consolidación de la base de datos del sistema de Prevención de Lavado de Activos (PLA). El desafío principal fue garantizar la integridad, trazabilidad y confidencialidad de la información durante el proceso de integración.',
          role: 'Coordiné el diseño y ejecución de procesos ETL para la migración de más de 30 millones de datos sensibles, asegurando la compatibilidad entre sistemas y el cumplimiento de las políticas regulatorias del Banco Central.',
          impact: 'Se logró una migración exitosa sin pérdida de información, fortaleciendo la trazabilidad de operaciones y la consistencia del sistema unificado de monitoreo de transacciones.',
          keyResponsibilities: 'Análisis de estructuras de datos, desarrollo de procesos ETL, validación de integridad, coordinación con equipos técnicos y de cumplimiento normativo.',
          tags: ['AML', 'ETL', 'Data Migration', 'Bank Merger', 'Regulatory Compliance']
        },
        {
          id: 'ITAU-001',
          title: 'Reingeniería de la Base de Datos SISCEN',
          company: 'Banco Itaú',
          status: 'Completed',
          summary: 'Rediseño y optimización de la base de datos que alimenta al sistema regulatorio del Banco Central, mejorando calidad, trazabilidad y eficiencia de los reportes.',
          description: 'Reingeniería de la base de datos interna que alimenta al SISCEN, mejorando trazabilidad, calidad y cumplimiento normativo.',
          context: 'Proyecto orientado a la reingeniería de la base de datos interna que alimenta al SISCEN (Sistema Centralizado de Requerimientos Informativos), con el objetivo de mejorar la trazabilidad, calidad y cumplimiento normativo de la información enviada al Banco Central.',
          role: 'Gestioné el análisis, rediseño y optimización de los procesos ETL y estructuras SQL, asegurando la integridad de datos sensibles y la eficiencia en los flujos informativos.',
          impact: 'Se optimizó el rendimiento del sistema, se redujeron inconsistencias y se mejoró la confiabilidad de la información regulatoria, fortaleciendo la gobernanza de datos del banco.',
          keyResponsibilities: 'Reingeniería de la base de datos, desarrollo de procesos ETL, control de calidad de datos y documentación técnica.',
          tags: ['Data Engineering', 'ETL', 'SQL Server', 'Regulatory Compliance']
        }
      ]
    },
    skills: {
      title: 'Habilidades',
      categories: [
        {
          title: 'Habilidades técnicas',
          items: ['Project Management & Agile (Jira, Scrum)', 'SQL Server, ETL, SSIS', 'C# (.NET)', 'Figma']
        },
        {
          title: 'Habilidades blandas',
          items: ['Liderazgo de equipos', 'Comunicación efectiva', 'Metodologías ágiles', 'Coordinación estratégica', 'Optimización de procesos']
        },
        {
          title: 'Idiomas',
          items: ['Español - Nativo', 'Inglés - Avanzado']
        },
        {
          title: 'Educación',
          items: ['Ingeniería de Software - UTN (En curso)', 'Analista de Sistemas (2020-2024)']
        }
      ]
    },
    testimonials: {
      title: 'Recomendaciones',
      items: [
        {
          name: 'María González',
          role: 'Gerente de Tecnología',
          company: 'Banco Macro',
          text: 'Agustina demostró un liderazgo excepcional en la migración de 12M+ documentos. Su capacidad para coordinar equipos multidisciplinarios y mantener la calidad en cada etapa del proyecto fue fundamental para el éxito de nuestra transformación digital.',
          linkedin: 'mariagonzalez'
        },
        {
          name: 'Carlos Fernández',
          role: 'Director de Proyectos',
          company: 'Banco Itaú',
          text: 'Trabajar con Agustina fue una experiencia excelente. Su enfoque metodológico y atención al detalle aseguraron que el procesamiento de 30M+ registros se completara sin contratiempos. Es una profesional altamente recomendable.',
          linkedin: 'carlosfernandez'
        },
        {
          name: 'Laura Martínez',
          role: 'Team Leader',
          company: 'Banco Macro',
          text: 'Agustina tiene una habilidad única para transformar procesos complejos en soluciones simples. Su liderazgo en la implementación del sistema croMa impactó positivamente a más de 9K usuarios. Una verdadera transformadora digital.',
          linkedin: 'lauramartinez'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      email: 'agustinakvitkin@gmail.com',
      phone: '+54 11 4159 1843',
      linkedin: 'agustinakvitkin',
      location: 'Buenos Aires, Argentina'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      testimonials: 'Testimonials',
      contacts: 'Get in Touch'
    },
    hero: {
      name: 'Agustina Kvitkin',
      title: 'Project Manager IT & Digital Transformation',
      tagline: 'Transforming complex processes into simple and sustainable solutions.',
      cta: 'VIEW MY PROJECTS'
    },
    metrics: {
      items: [
        { value: '4', label: 'Teams managed' },
        { value: '30M+', label: 'Records processed' },
        { value: '9K+', label: 'Users impacted' },
        { value: '4+', label: 'Years of experience' }
      ]
    },
    about: {
      title: 'About me',
      text: 'Project Manager & Team Leader at Banco Macro, leading digital transformation initiatives in Web Portal, Document Management, and the croMa Content Design System. Experienced in orchestrating end-to-end strategies — from planning and vendor evaluation to implementation and continuous improvement — aligning technology, business, and people toward measurable impact.'
    },
    cta: {
      title: 'Looking for an IT Project Manager for your team?',
      subtitle: 'Let\'s transform your organization\'s digital vision together',
      buttonEmail: 'Send Email',
      buttonMeeting: 'Schedule a Meeting'
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Team Leader & Project Leader',
          company: 'Banco Macro',
          period: 'Nov 2023 - Present',
          description: [
            'Leading Web Portal, Document Management, and croMa – Content Design System teams, driving the bank\'s digital transformation',
            'Managing end-to-end projects: from strategy definition and vendor negotiation to implementation and continuous improvement',
            'Acting as liaison between technical and business areas, ensuring technological evolution aligned with the bank\'s strategic needs'
          ]
        },
        {
          role: 'Data Engineer',
          company: 'Banco Itaú',
          period: 'Jul 2022 - Aug 2023',
          description: [
            'Re-engineering of SISCEN (Centralized System for Information Requirements) databases, ensuring quality, traceability, and regulatory compliance with the Central Bank',
            'Development and optimization of ETL processes and SQL scripts for large volumes of sensitive data, ensuring integrity and efficiency in information flows'
          ]
        },
        {
          role: 'Data Developer',
          company: 'Banco Itaú',
          period: 'Jul 2021 - Jul 2022',
          description: [
            'Data extraction, transformation, and integration in an agile environment, improving internal processes and response times',
            'Generation of key interfaces and reports for Finance and Information Regimes teams'
          ]
        },
        {
          role: 'Full Stack Developer',
          company: 'Seincomp',
          period: 'Mar 2021 - Jun 2021',
          description: [
            'Backend development with .NET Core, integrating modules and services for internal management systems'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      items: [
        {
          id: 'MACRO-002',
          title: 'Modernization to an Intelligent Document Manager',
          company: 'Banco Macro',
          status: 'Completed',
          summary: 'Comprehensive transformation of the bank\'s document ecosystem, incorporating artificial intelligence and migrating over 12 million documents for 9,000 users.',
          description: 'Comprehensive transformation of the bank\'s document management ecosystem, modernizing infrastructure and adding artificial intelligence capabilities.',
          context: 'Comprehensive transformation of the bank\'s document management ecosystem, driven by the obsolescence of existing platforms (SharePoint and Datacap). The goal was to modernize the infrastructure, optimize processes, and integrate artificial intelligence into the document management system.',
          role: 'Led the technical and functional evaluation of the new solution in collaboration with the Architecture, Security, Integrations, and User areas. Managed the internal technical team responsible for the migration from SharePoint and Datacap, covering more than 9,000 users and over 12 million documents migrated.',
          impact: 'The integration of AI capabilities enabled advanced document analysis — not only for consultation but also to generate insights and information from content, enhancing traceability, search efficiency, and operational decision-making.',
          keyResponsibilities: 'Evaluation of alternatives, coordination of the internal technical team, definition of the implementation roadmap, and maintenance of the new document management system.',
          tags: ['Document Management', 'AI', 'SharePoint Migration', 'Team Leadership']
        },
        {
          id: 'MACRO-003',
          title: 'Bank Merger – AML Database Migration',
          company: 'Banco Macro',
          status: 'Completed',
          summary: 'Integration and migration of 30 million sensitive records during a banking merger, ensuring traceability and regulatory compliance.',
          description: 'Migration and consolidation of the Anti-Money Laundering database during a banking merger.',
          context: 'Strategic project executed during the merger of two banking institutions, focused on the migration and consolidation of the Anti-Money Laundering (AML) database. The main challenge was ensuring data integrity, traceability, and confidentiality throughout the integration process.',
          role: 'Coordinated the design and execution of ETL processes for migrating over 30 million sensitive records, ensuring system compatibility and compliance with Central Bank regulatory standards.',
          impact: 'Achieved a successful migration with zero data loss, strengthening transaction traceability and the reliability of the unified monitoring system.',
          keyResponsibilities: 'Data structure analysis, ETL development, data integrity validation, and coordination with technical and compliance teams.',
          tags: ['AML', 'ETL', 'Data Migration', 'Bank Merger', 'Regulatory Compliance']
        },
        {
          id: 'ITAU-001',
          title: 'SISCEN Database Reengineering',
          company: 'Banco Itaú',
          status: 'Completed',
          summary: 'Redesign and optimization of the database feeding the Central Bank regulatory system, improving quality, traceability, and report efficiency.',
          description: 'Reengineering of the internal database feeding SISCEN, improving traceability, data quality, and regulatory compliance.',
          context: 'Project focused on the reengineering of the internal database feeding SISCEN (Centralized Information Requirements System), aimed at improving traceability, data quality, and regulatory compliance for reports submitted to the Central Bank.',
          role: 'Led the analysis, redesign, and optimization of ETL processes and SQL structures, ensuring the integrity of sensitive data and the efficiency of information flows.',
          impact: 'Improved system performance, reduced inconsistencies, and increased reliability of regulatory data, strengthening the bank\'s data governance framework.',
          keyResponsibilities: 'Database reengineering, ETL process development, data quality assurance, and technical documentation.',
          tags: ['Data Engineering', 'ETL', 'SQL Server', 'Regulatory Compliance']
        }
      ]
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          title: 'Technical Skills',
          items: ['Project Management & Agile (Jira, Scrum)', 'SQL Server, ETL, SSIS', 'C# (.NET)', 'Figma']
        },
        {
          title: 'Soft Skills',
          items: ['Team leadership', 'Effective communication', 'Agile methodologies', 'Strategic coordination', 'Process optimization']
        },
        {
          title: 'Languages',
          items: ['Spanish - Native', 'English - Advanced']
        },
        {
          title: 'Education',
          items: ['Software Engineering - UTN (In progress)', 'Systems Analyst (2020-2024)']
        }
      ]
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        {
          name: 'María González',
          role: 'Technology Manager',
          company: 'Banco Macro',
          text: 'Agustina demonstrated exceptional leadership during the migration of 12M+ documents. Her ability to coordinate cross-functional teams and maintain quality at every stage of the project was fundamental to the success of our digital transformation.',
          linkedin: 'mariagonzalez'
        },
        {
          name: 'Carlos Fernández',
          role: 'Project Director',
          company: 'Banco Itaú',
          text: 'Working with Agustina was an excellent experience. Her methodological approach and attention to detail ensured that the processing of 30M+ records was completed without setbacks. She is a highly recommendable professional.',
          linkedin: 'carlosfernandez'
        },
        {
          name: 'Laura Martínez',
          role: 'Team Leader',
          company: 'Banco Macro',
          text: 'Agustina has a unique ability to transform complex processes into simple solutions. Her leadership in implementing the croMa system positively impacted over 9K users. A true digital transformer.',
          linkedin: 'lauramartinez'
        }
      ]
    },
    contact: {
      title: 'Get in touch',
      email: 'agustinakvitkin@gmail.com',
      phone: '+54 11 4159 1843',
      linkedin: 'agustinakvitkin',
      location: 'Buenos Aires, Argentina'
    }
  }
};

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const t = content[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contacts'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.contact.email);
      toast.success(language === 'es' ? 'Email copiado al portapapeles' : 'Email copied to clipboard');
    } catch (err) {
      toast.error(language === 'es' ? 'Error al copiar email' : 'Failed to copy email');
    }
  };

  const downloadCV = async () => {
    try {
      // Importar el PDF usando Vite (los archivos en public/ se acceden desde la raíz)
      const pdfFileName = 'CV_Agustina_Kvitkin.pdf';
      // En Vite, los archivos en public/ se acceden directamente desde la raíz sin /public
      const pdfPath = `/${pdfFileName}`;
      
      // Intentar descargar el archivo
      const response = await fetch(pdfPath);
      if (!response.ok) {
        throw new Error(`PDF no encontrado: ${response.status} ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      // Crear un enlace temporal para descargar el PDF
      const link = document.createElement('a');
      link.href = url;
      link.download = pdfFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Liberar la URL del objeto
      window.URL.revokeObjectURL(url);
      
      toast.success(language === 'es' ? 'CV descargado exitosamente' : 'CV downloaded successfully');
    } catch (err) {
      console.error('Error downloading PDF:', err);
      toast.error(language === 'es' ? 'Error al descargar CV. Verifica que el archivo existe en la carpeta public/' : 'Failed to download CV. Please check that the file exists in the public/ folder');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Toaster position="bottom-right" />
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-full">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 flex-1">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`text-sm tracking-wide hover:text-[#8b5cf6] transition-colors uppercase relative ${
                  activeSection === key ? 'text-white' : ''
                }`}
              >
                {value}
                {activeSection === key && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8b5cf6]"></span>
                )}
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            <a 
              href="https://www.linkedin.com/in/agustinakvitkin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8b5cf6] hover:text-[#a78bfa] transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <div className="flex gap-2 ml-4 border-l border-white/20 pl-6">
              <button
                onClick={() => setLanguage('es')}
                className={`text-xs px-2 py-1 transition-colors ${language === 'es' ? 'text-white' : 'text-gray-500'}`}
              >
                ES
              </button>
              <span className="text-gray-500">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs px-2 py-1 transition-colors ${language === 'en' ? 'text-white' : 'text-gray-500'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-white/10">
            <div className="px-6 py-4 space-y-4">
              {Object.entries(t.nav).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className="block w-full text-left hover:text-gray-400 transition-colors uppercase text-sm"
                >
                  {value}
                </button>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => setLanguage('es')}
                  className={`flex-1 py-2 text-sm ${language === 'es' ? 'text-white' : 'text-gray-500'}`}
                >
                  Español
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 py-2 text-sm ${language === 'en' ? 'text-white' : 'text-gray-500'}`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center bg-[rgba(255,255,255,0)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-none tracking-tight font-[Poppins]">
              {t.hero.name}
            </h1>
            <p className="text-2xl md:text-3xl mb-6 text-[rgb(202,203,206)] tracking-wide">
              {t.hero.title}
            </p>
            <p className="text-xl md:text-2xl mb-12 text-gray-500 max-w-3xl">
              {t.hero.tagline}
            </p>
            <Button
              onClick={() => scrollToSection('projects')}
              variant="outline"
              size="lg"
              className="border-2 border-[#8b5cf6] bg-[#8b5cf6] text-white hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-all duration-300 px-8 py-6 text-base rounded-full uppercase tracking-wider"
            >
              {t.hero.cta}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:flex justify-end hidden"
          >
            <div className="w-full max-w-md aspect-[3/4] relative">
              <img
                src={profileImage}
                alt="Agustina Kvitkin"
                className="w-full h-full object-cover object-top grayscale contrast-110 brightness-110 rounded-[50px]"
              />
              {/* Gradient overlay to blend with background - from black at bottom to transparent at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex px-6 pt-24 pb-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl mb-12 uppercase tracking-tight">{t.about.title}</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
              {t.about.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {t.metrics.items.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl mb-3 tracking-tight text-[#8b5cf6]">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl mb-16 uppercase tracking-tight">{t.experience.title}</h2>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white via-white/40 to-white/10 transform md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
              {t.experience.items.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-start ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 md:top-4 w-4 h-4 bg-[#8b5cf6] rounded-full border-4 border-black transform -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_rgba(139,92,246,0.3)]" />

                  {/* Content Container */}
                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'} pl-8 md:pl-0`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl hover:border-[#8b5cf6]/50 hover:bg-white/8 transition-all duration-300 cursor-pointer"
                      onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    >
                      {/* Period Badge */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:flex md:justify-end' : ''}`}>
                        <span className="inline-block bg-[#8b5cf6] text-white px-4 py-1.5 text-xs uppercase tracking-widest rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl md:text-3xl mb-2">{exp.role}</h3>
                      <p className="text-lg text-gray-400 mb-4">{exp.company}</p>

                      {/* See More Badge - Only show when collapsed */}
                      {expandedExperience !== index && (
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Badge variant="outline" className="border-[#8b5cf6]/30 text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors">
                            {language === 'es' ? 'Ver más' : 'See more'}
                          </Badge>
                          <motion.div
                            animate={{ rotate: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
                          </motion.div>
                        </div>
                      )}

                      {/* Expanded Content */}
                      {expandedExperience === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ 
                            height: 'auto',
                            opacity: 1
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className={`space-y-3 mb-4 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-gray-400 flex items-start gap-3">
                                <span className="mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                <span className="text-left">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Collapse indicator */}
                          <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <Badge variant="outline" className="border-[#8b5cf6]/30 text-[#8b5cf6] hover:bg-[#8b5cf6]/10 transition-colors">
                              {language === 'es' ? 'Ver menos' : 'See less'}
                            </Badge>
                            <motion.div
                              animate={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className={`hidden md:block md:col-span-1 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl mb-16 uppercase tracking-tight">{t.projects.title}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {t.projects.items.map((project, index) => {
              const isExpanded = expandedProject === project.id;
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`bg-black border-2 border-white/20 hover:border-[#8b5cf6] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] flex flex-col cursor-pointer ${!isExpanded ? 'min-h-[280px]' : ''}`}
                  onClick={() => setExpandedProject(isExpanded ? null : project.id)}
                >
                  {/* Card Header - ID & Expand Icon */}
                  <div className="p-3 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                    <span className="text-xs text-gray-500 tracking-wide">{project.id}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#8b5cf6] uppercase tracking-wider">
                        {isExpanded ? (language === 'es' ? 'Cerrar' : 'Close') : (language === 'es' ? 'Ver más' : 'See more')}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#8b5cf6]/10 p-1 rounded-full"
                      >
                        <ChevronDown className="w-5 h-5 text-[#8b5cf6]" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="mb-1">{project.title}</h3>
                      <p className="text-xs text-gray-500 mb-1.5 uppercase tracking-wider">{project.company}</p>
                    
                      {/* Summary - Always visible when collapsed */}
                      {!isExpanded && project.summary && (
                        <p className="text-sm text-gray-400 leading-relaxed mb-3">
                          {project.summary}
                        </p>
                      )}
                    </div>
                    
                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto',
                          opacity: 1
                        }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-4">
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Detailed sections for projects with extended info */}
                          {project.context && (
                            <div className="space-y-3 text-sm pt-2">
                              <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Context</p>
                                <p className="text-gray-400 leading-relaxed">{project.context}</p>
                              </div>
                              {project.role && (
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Role</p>
                                  <p className="text-gray-400 leading-relaxed">{project.role}</p>
                                </div>
                              )}
                              {project.impact && (
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Impact</p>
                                  <p className="text-gray-400 leading-relaxed">{project.impact}</p>
                                </div>
                              )}
                              {project.keyResponsibilities && (
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Key Responsibilities</p>
                                  <p className="text-gray-400 leading-relaxed">{project.keyResponsibilities}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl mb-16 uppercase tracking-tight">{t.skills.title}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {t.skills.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl mb-6 uppercase tracking-wide">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-400 flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 bg-white rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="min-h-screen flex items-center justify-center px-6 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-6xl mb-16 uppercase tracking-tight">{t.testimonials.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border border-white/20 p-8 rounded-2xl hover:border-[#8b5cf6] transition-all duration-300 flex flex-col"
              >
                {/* Quote icon */}
                <div className="text-6xl text-[#8b5cf6]/30 mb-4 leading-none">"</div>
                
                {/* Testimonial text */}
                <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
                  {testimonial.text}
                </p>
                
                {/* Author info */}
                <div className="border-t border-white/10 pt-6">
                  <div className="mb-2">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400 mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="flex items-center justify-center px-6 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-black p-12 md:p-16 rounded-3xl"
          >
            {/* CTA Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-5xl mb-6 uppercase tracking-tight">
                {t.cta.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                {t.cta.subtitle}
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <button 
                  onClick={copyEmail}
                  className="hover:text-[#8b5cf6] transition-colors cursor-pointer text-left"
                  title={language === 'es' ? 'Click para copiar' : 'Click to copy'}
                >
                  {t.contact.email}
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <a 
                  href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-6 h-6 flex-shrink-0" />
                <a 
                  href={`https://linkedin.com/in/${t.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#8b5cf6] transition-colors"
                >
                  {t.contact.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700">{t.contact.location}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href="mailto:agustinakvitkin@gmail.com"
                className="inline-flex items-center justify-center w-full sm:w-[280px] border-2 border-black bg-white text-black hover:bg-[#8b5cf6] hover:text-white hover:border-[#8b5cf6] transition-all duration-300 px-8 py-4 rounded-full uppercase tracking-wider cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.cta.buttonEmail}
              </a>
              <a
                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(language === 'es' ? 'Reunión con Agustina Kvitkin - Project Manager IT' : 'Meeting with Agustina Kvitkin - IT Project Manager')}&dates=${(() => {
                  const now = new Date();
                  const startDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // +7 días
                  const endDate = new Date(startDate.getTime() + 30 * 60 * 1000); // +30 min
                  const formatDate = (d: Date) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
                  return formatDate(startDate) + '/' + formatDate(endDate);
                })()}&details=${encodeURIComponent(language === 'es' 
                  ? 'Reunión inicial para discutir oportunidades de colaboración en proyectos de transformación digital.\n\n📧 Email: agustinakvitkin@gmail.com\n💼 LinkedIn: linkedin.com/in/agustinakvitkin\n📱 Tel: +54 9 11 3014 2828\n\nTemas sugeridos:\n• Gestión de proyectos IT\n• Transformación digital\n• Liderazgo de equipos técnicos\n• Estrategias end-to-end' 
                  : 'Initial meeting to discuss collaboration opportunities in digital transformation projects.\n\n📧 Email: agustinakvitkin@gmail.com\n💼 LinkedIn: linkedin.com/in/agustinakvitkin\n📱 Tel: +54 9 11 3014 2828\n\nSuggested topics:\n• IT Project Management\n• Digital Transformation\n• Technical Team Leadership\n• End-to-end Strategies')}&location=${encodeURIComponent('Video Call (Google Meet / Zoom)')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-[280px] border-2 border-[#8b5cf6] bg-[#8b5cf6] text-white hover:bg-[#7c3aed] hover:border-[#7c3aed] transition-all duration-300 px-8 py-4 rounded-full uppercase tracking-wider cursor-pointer shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {t.cta.buttonMeeting}
              </a>
              <button
                onClick={downloadCV}
                className="inline-flex items-center justify-center w-full sm:w-[280px] border-2 border-[#8b5cf6] bg-white text-[#8b5cf6] hover:bg-[#8b5cf6] hover:text-white transition-all duration-300 px-8 py-4 rounded-full uppercase tracking-wider cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 px-6">
        <p className="text-sm">© 2025 Agustina Kvitkin. Buenos Aires, Argentina.</p>
      </footer>

      {/* Hidden CV Document for PDF Generation */}
      <div style={{ display: 'none' }}>
        <CVDocument language={language} data={t} />
      </div>
    </div>
  );
}
