import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, Search, Filter, Rocket, Briefcase, FileText, ChevronRight, User, Compass } from 'lucide-react';
import { getJobs } from '../api/jobService';

const Career = () => {
  const [activeTab, setActiveTab] = useState('job_seeker');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const categories = [
    { title: 'Livestock', sub: ['Dairy', 'Poultry', 'Goat', 'Sheep'], color: '#F0F9FF', icon: '🐄' },
    { title: 'Aqua', sub: ['Fish', 'Shrimp', 'Aquaponics'], color: '#ECFDF5', icon: '🐟' },
    { title: 'Crop', sub: ['Field Crops', 'Horticulture'], color: '#FFFBEB', icon: '🌾' },
    { title: 'Manufacturing', sub: ['Food Processing', 'Dairy', 'Packaging'], color: '#FEF2F2', icon: '🏭' }
  ];

  return (
    <div className="career-page">
      <section className="section hero" style={{ background: '#0369A1', color: 'white', padding: '120px 0 100px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="hero-pill" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', display: 'inline-flex' }}>
              <Compass size={16} />
              <span>Explore Opportunities</span>
            </div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Choose Your Path</h1>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
              Whether you're looking for a professional role or building your own empire, we have the tools to help you succeed.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="tabs-header" style={{ background: 'white', padding: '0.75rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <button 
            className={`tab-btn ${activeTab === 'job_seeker' ? 'active' : ''}`}
            onClick={() => setActiveTab('job_seeker')}
          >
            <Briefcase size={20} /> Job Seeker
          </button>
          <button 
            className={`tab-btn ${activeTab === 'dream_achiever' ? 'active' : ''}`}
            onClick={() => setActiveTab('dream_achiever')}
          >
            <Rocket size={20} /> Dream Achiever
          </button>
        </div>
      </div>

      <div className="container" style={{ padding: '4rem 0' }}>
        {activeTab === 'job_seeker' ? (
          <div className="animate-fade-in">
            <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Quick Resume Upload</h2>
                <div className="card" style={{ background: '#F8FAFC' }}>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <label className="label">Full Name</label>
                      <input type="text" className="input" placeholder="e.g. John Doe" />
                    </div>
                    <div className="form-group">
                      <label className="label">Email Address</label>
                      <input type="email" className="input" placeholder="e.g. john@example.com" />
                    </div>
                    <div className="form-group">
                      <label className="label">Phone Number</label>
                      <input type="text" className="input" placeholder="e.g. +91 9876543210" />
                    </div>
                    <div className="form-group">
                      <label className="label">Resume (PDF)</label>
                      <div style={{ border: '2px dashed #CBD5E1', padding: '2rem', textAlign: 'center', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                        <Upload size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                        <p style={{ color: 'var(--text-muted)' }}>Click or drag file to upload</p>
                      </div>
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Submit My Profile</button>
                  </form>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Search Agriculture Jobs</h2>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ position: 'relative', flex: 1 }}>
                    <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                    <input type="text" className="input" style={{ paddingLeft: '3rem' }} placeholder="Job title or keywords..." />
                  </div>
                  <button className="btn btn-outline"><Filter size={18} /> Filters</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {loading ? (
                    <p>Loading jobs...</p>
                  ) : jobs.length > 0 ? (
                    jobs.map((job, i) => (
                      <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{job.title}</h3>
                          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>📍 {job.location} | 💼 {job.job_type}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <p style={{ fontWeight: '700', marginBottom: '0.5rem' }}>{job.salary}</p>
                          <ChevronRight size={20} color="var(--primary)" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No jobs available currently.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Launch Your Business</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Select a category, share your vision, and get professional DPR support.</p>
            </div>
            
            <div className="grid grid-cols-4" style={{ marginBottom: '5rem' }}>
              {categories.map((cat, i) => (
                <div key={i} className="card" style={{ background: cat.color, border: 'none', textAlign: 'center' }}>
                  <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{cat.icon}</span>
                  <h3 style={{ marginBottom: '1rem' }}>{cat.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    {cat.sub.map((s, si) => (
                      <span key={si} style={{ background: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: '600' }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>Detailed Project Report (DPR) Application</h2>
              <div className="card">
                <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2">
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="label">Project Title</label>
                    <input type="text" className="input" placeholder="e.g. Smart Dairy Farm Maharashtra" />
                  </div>
                  <div className="form-group">
                    <label className="label">Industry Category</label>
                    <select className="select">
                      <option>Livestock</option>
                      <option>Aquaculture</option>
                      <option>Crop Production</option>
                      <option>Food Processing</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="label">Estimated Investment</label>
                    <input type="number" className="input" placeholder="₹ Amount" />
                  </div>
                  <div className="form-group">
                    <label className="label">Primary Location</label>
                    <input type="text" className="input" placeholder="e.g. Nashik, Maharashtra" />
                  </div>
                  <div className="form-group">
                    <label className="label">Upload Preliminary File</label>
                    <input type="file" className="input" />
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <button className="btn btn-secondary" style={{ width: '100%', padding: '1.25rem' }}>Send DPR Application <FileText size={20} /></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;
