import React from 'react';
import { Search, ChevronRight, Hash, Clock, BookOpen } from 'lucide-react';

const Blog = () => {
  const categories = ["Farming Tips", "AgriTech", "Startups", "Government Schemes", "Market Trends"];
  const posts = [
    { title: "Smart Irrigation: How IoT is saving 40% more water", category: "AgriTech", author: "Dr. Ramesh Kumar", date: "April 5, 2024", img: "https://images.unsplash.com/photo-1542838132-92ca53300491?auto=format&fit=crop&q=80&w=800" },
    { title: "Starting your first Hydroponic Farm: A complete guide", category: "Farming Tips", author: "Priya Verma", date: "April 2, 2024", img: "https://images.unsplash.com/photo-1558449028-s71bc182ed30?auto=format&fit=crop&q=80&w=800" },
    { title: "Top 5 Government subsidies for new Agri-startups in 2026", category: "Government Schemes", author: "Anjali Sharma", date: "March 28, 2024", img: "https://images.unsplash.com/photo-1595152230535-4202293390c5?auto=format&fit=crop&q=80&w=800" },
    { title: "The rise of Bio-Fertilizers in Indian markets", category: "Market Trends", author: "Sameer Desai", date: "March 25, 2024", img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="blog-page">
      <section className="section" style={{ background: '#F0F9FF', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Agri Blog</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>Insights, news, and expert tips from the agriculture world.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
            {categories.map((cat, i) => (
              <span key={i} className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1.5rem' }}>
                <Hash size={16} /> {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2" style={{ gap: '3rem' }}>
            {posts.map((post, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase' }}>{post.category}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Clock size={16} /> {post.date}</span>
                  </div>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>{post.title}</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ background: '#E2E8F0', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <BookOpen size={16} color="var(--primary)" />
                      </div>
                      <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{post.author}</span>
                    </div>
                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Read More <ChevronRight size={18} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
