import React from 'react';
import { Target, Eye, Users, Award, Sprout } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <section className="section" style={{ background: '#F8FAFC', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>About AgriNova</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Transforming agriculture careers and entrepreneurship through innovation and community.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Our Mission & Vision</h2>
              <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ background: '#E0F2FE', padding: '1.5rem', borderRadius: '1rem', flex: 1 }}>
                  <Target size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                  <h3>Our Mission</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Empower farmers and youth with jobs and startup opportunities through tech-enabled solutions.</p>
                </div>
                <div style={{ background: '#ECFDF5', padding: '1.5rem', borderRadius: '1rem', flex: 1 }}>
                  <Eye size={40} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
                  <h3>Our Vision</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Build India’s largest agri ecosystem where every farmer has access to global markets and capital.</p>
                </div>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                Founded in 2024, AgriNova has quickly grown into a hub for agricultural excellence. We believe that by providing the right resources, we can solve some of the world's most pressing food security challenges.
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <img 
                src="/images/mission.png"
                alt="Agriculture innovation"
                style={{ width: '90%', borderRadius: '2rem', boxShadow: '20px 20px 60px rgba(0,0,0,0.1)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#034D75', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Our Team</h2>
            <p style={{ opacity: 0.8 }}>Meet the visionaries behind AgriNova.</p>
          </div>
          <div className="grid grid-cols-4">
            {[
              { name: 'Dr. Ramesh Kumar', role: 'CEO & Founder', desc: 'PhD in Agri-Science', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
              { name: 'Anjali Sharma', role: 'CTO', desc: 'Ex-Google Engineering', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
              { name: 'Sameer Desai', role: 'Head of Investment', desc: '15 years in VC', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
              { name: 'Priya Verma', role: 'Chief Strategist', desc: 'Agricultural Economist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400' }
            ].map((m, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <img src={m.img} alt={m.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', border: '4px solid var(--primary-light)' }} />
                <h3 style={{ marginBottom: '0.25rem' }}>{m.name}</h3>
                <p style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>{m.role}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
