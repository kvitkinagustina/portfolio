import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

interface CVDocumentProps {
  language: 'es' | 'en';
  data: {
    hero: {
      name: string;
      title: string;
      tagline: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      linkedin: string;
      location: string;
    };
    about: {
      title: string;
      text: string;
    };
    experience: {
      title: string;
      items: Array<{
        role: string;
        company: string;
        period: string;
        description: string[];
      }>;
    };
    skills: {
      title: string;
      categories: Array<{
        title: string;
        items: string[];
      }>;
    };
    projects: {
      title: string;
      items: Array<{
        id: string;
        title: string;
        company: string;
        summary?: string;
        tags: string[];
      }>;
    };
  };
}

export default function CVDocument({ language, data }: CVDocumentProps) {
  return (
    <div 
      id="cv-document" 
      style={{ 
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '48px',
        width: '210mm',
        minHeight: '297mm',
        fontFamily: 'Arial, sans-serif',
        fontSize: '10pt',
        lineHeight: '1.4'
      }}
    >
      {/* Header */}
      <div style={{ 
        marginBottom: '32px', 
        paddingBottom: '24px', 
        borderBottom: '2px solid #000000'
      }}>
        <h1 style={{ 
          fontSize: '32px', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          letterSpacing: '-0.5px'
        }}>
          {data.hero.name}
        </h1>
        <p style={{ 
          fontSize: '18px', 
          marginBottom: '4px', 
          color: '#4b5563'
        }}>
          {data.hero.title}
        </p>
        <p style={{ 
          fontSize: '12px', 
          color: '#6b7280'
        }}>
          {data.hero.tagline}
        </p>
      </div>

      {/* Contact Info */}
      <div style={{ 
        marginBottom: '32px', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '12px',
        fontSize: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Mail style={{ width: '16px', height: '16px' }} />
          <span>{data.contact.email}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Phone style={{ width: '16px', height: '16px' }} />
          <span>{data.contact.phone}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Linkedin style={{ width: '16px', height: '16px' }} />
          <span>{data.contact.linkedin}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin style={{ width: '16px', height: '16px' }} />
          <span>{data.contact.location}</span>
        </div>
      </div>

      {/* About */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '18px', 
          marginBottom: '12px', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          borderBottom: '1px solid #d1d5db', 
          paddingBottom: '4px',
          fontWeight: 'bold'
        }}>
          {data.about.title}
        </h2>
        <p style={{ 
          fontSize: '12px', 
          color: '#1f2937', 
          lineHeight: '1.6'
        }}>
          {data.about.text}
        </p>
      </div>

      {/* Experience */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '18px', 
          marginBottom: '12px', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          borderBottom: '1px solid #d1d5db', 
          paddingBottom: '4px',
          fontWeight: 'bold'
        }}>
          {data.experience.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {data.experience.items.map((exp, index) => (
            <div key={index}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-start', 
                marginBottom: '4px'
              }}>
                <div>
                  <h3 style={{ 
                    fontSize: '14px', 
                    fontWeight: 'bold'
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{ 
                    fontSize: '12px', 
                    color: '#4b5563'
                  }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{ 
                  fontSize: '11px', 
                  color: '#6b7280', 
                  whiteSpace: 'nowrap', 
                  marginLeft: '16px'
                }}>
                  {exp.period}
                </span>
              </div>
              <ul style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '4px', 
                marginTop: '8px',
                paddingLeft: '0',
                listStyle: 'none'
              }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ 
                    fontSize: '12px', 
                    color: '#4b5563', 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '8px'
                  }}>
                    <span style={{ 
                      marginTop: '6px', 
                      width: '4px', 
                      height: '4px', 
                      backgroundColor: '#000000', 
                      borderRadius: '50%', 
                      flexShrink: 0,
                      display: 'inline-block'
                    }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '18px', 
          marginBottom: '12px', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          borderBottom: '1px solid #d1d5db', 
          paddingBottom: '4px',
          fontWeight: 'bold'
        }}>
          {data.skills.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.skills.categories.map((cat, index) => (
            <div key={index} style={{ display: 'flex', gap: '12px' }}>
              <span style={{ 
                fontSize: '12px', 
                minWidth: '120px', 
                fontWeight: 'bold'
              }}>
                {cat.title}:
              </span>
              <span style={{ 
                fontSize: '12px', 
                color: '#4b5563'
              }}>
                {cat.items.join(', ')}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ 
          fontSize: '18px', 
          marginBottom: '12px', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          borderBottom: '1px solid #d1d5db', 
          paddingBottom: '4px',
          fontWeight: 'bold'
        }}>
          {data.projects.title}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {data.projects.items.map((project, index) => (
            <div key={index}>
              <h3 style={{ 
                fontSize: '14px', 
                marginBottom: '4px', 
                fontWeight: 'bold'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                fontSize: '11px', 
                color: '#6b7280', 
                marginBottom: '4px'
              }}>
                {project.company}
              </p>
              {project.summary && (
                <p style={{ 
                  fontSize: '12px', 
                  color: '#4b5563', 
                  marginBottom: '8px'
                }}>
                  {project.summary}
                </p>
              )}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '6px'
              }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{ 
                    fontSize: '10px', 
                    padding: '2px 8px', 
                    backgroundColor: '#e5e7eb', 
                    borderRadius: '4px',
                    color: '#000000'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
