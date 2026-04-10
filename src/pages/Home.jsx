import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Rocket, TrendingUp, CheckCircle2, Star, Users, Globe } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { getJobs } from '../api/jobService';

const Home = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([
    { title: 'Agri-Research Scientist', company: 'GreenTech Labs', location: 'Bengaluru', salary: '₹8-12 LPA', job_type: 'Full-time' },
    { title: 'Farm Operations Manager', company: 'UrbanRoots Agri', location: 'Pune', salary: '₹6-9 LPA', job_type: 'Full-time' },
    { title: 'Dairy Technologist', company: 'MilkyWay Farms', location: 'Jaipur', salary: '₹5-7 LPA', job_type: 'Contract' },
    { title: 'Supply Chain Executive', company: 'Harvst Express', location: 'Nagpur', salary: '₹4-6 LPA', job_type: 'Full-time' }
  ]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // API connection ready for future use
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="section hero" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-pill">
              <Star size={16} fill="currentColor" />
              <span>India's #1 Agricultural Career Hub</span>
            </div>
            <h1 style={{ 
              marginBottom: '1.5rem', 
              color: '#034D75', 
              fontSize: '4.5rem', 
              lineHeight: '1.1',
              textShadow: '0 10px 30px rgba(3, 77, 117, 0.1)'
            }}>
              Empowering the Next <br />
              <span style={{ 
                background: 'linear-gradient(to right, #22C55E, #16A34A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Generation of Agriprenuers</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              We're bridge the gap between agricultural talent, cutting-edge innovation, and global venture investment.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/career')} className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem' }}>Explore Careers <Briefcase size={20} /></button>
              <button onClick={() => navigate('/career')} className="btn btn-outline" style={{ padding: '1.25rem 2.5rem', fontSize: '1.1rem', background: 'white' }}>Launch Startup <Rocket size={20} /></button>
            </div>

            <div className="hero-stats-banner">
              <div className="hero-stat">
                <b>10K+</b>
                <span>Jobs Posted</span>
              </div>
              <div className="hero-stat">
                <b>500+</b>
                <span>Agri Startups</span>
              </div>
              <div className="hero-stat">
                <b>₹15Cr</b>
                <span>Total Funding</span>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="hero-image-container" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=100&w=2070")' }}></div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Ecosystem</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Everything you need to succeed in the modern agricultural landscape.</p>
          </div>
          <div className="grid grid-cols-3">
            {[
              { icon: <Briefcase size={40} color="#0369A1" />, title: 'Jobs', desc: 'Find agriculture jobs بسهولة. Tailored opportunities for every skill set.' },
              { icon: <Rocket size={40} color="#22C55E" />, title: 'Startups', desc: 'Launch your agri business from scratch with expert guidance and DPR support.' },
              { icon: <TrendingUp size={40} color="#0EA5E9" />, title: 'Investors', desc: 'Connect with funding from top agricultural venture capitalists and angel investors.' }
            ].map((f, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '1.5rem', background: '#F0F9FF', width: '80px', height: '80px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {f.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Latest Jobs</h2>
            <Link to="/career" style={{ color: 'var(--primary)', fontWeight: '700' }}>View All Jobs →</Link>
          </div>
          <div className="grid grid-cols-2">
            {loading ? (
              <p>Loading jobs...</p>
            ) : jobs.length > 0 ? (
              jobs.map((job, i) => (
                <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                    <p style={{ fontWeight: '600', color: 'var(--primary)' }}>{job.company}</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>📍 {job.location} | 💼 {job.job_type}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{job.salary}</p>
                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Apply</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs found.</p>
            )}
          </div>
        </div>
      </section>

      {/* Startup Highlights */}
      <section className="section" style={{ background: '#034D75', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Top Startups Seeking Funding</h2>
            <p style={{ opacity: 0.8 }}>Discover and invest in the future of food production.</p>
          </div>
          <div className="grid grid-cols-3">
            {[
              { name: 'AquaGrow', sector: 'Hydroponics', target: '₹50 Lakhs', img: 'https://images.unsplash.com/photo-1558449028-s71bc182ed30?auto=format&fit=crop&q=80&w=800' },
              { name: 'DairyDigit', sector: 'Smart Dairy', target: '₹1.2 Crore', img: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=800' },
              { name: 'EcoPest', sector: 'Bio-Fertilizers', target: '₹75 Lakhs', img: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800' }
            ].map((s, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={s.img} alt={s.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ marginBottom: '0.5rem' }}>{s.name}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>{s.sector}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: '700' }}>Goal: {s.target}</span>
                    <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem' }}>Invest</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ 
          background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', 
          borderRadius: '2rem 2rem 0 0', 
          padding: '5rem 2rem', 
          textAlign: 'center', 
          color: 'white' 
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'white' }}>Join the Agri Revolution</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto 3rem' }}>
            Whether you're looking for your next career move or launching the next big agritech startup, AgriNova is your home.
          </p>
          <button onClick={() => navigate('/contact')} className="btn btn-secondary" style={{ padding: '1.5rem 3rem', fontSize: '1.2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>Get Started Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
