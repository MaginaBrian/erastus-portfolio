import { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  TrendingUp, 
  ArrowRight,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Users,
  Target,
  Globe
} from 'lucide-react';
import './App.css';
import erastusPhoto from './assets/erastus.jpg';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will respond within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="logo">SAMUEL NDEGE</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="hero-content">
          <div className="hero-text">
            <h2>/ AGRIBUSINESS & CLIMATE RISK LEADER</h2>
            <h1>
              Erastus Samuel<br />
              Ndege Ochieng'<span className="arrow">→</span>
            </h1>
            <p className="subtitle">
              Head of Strategic Alliances & Partnerships | Nairobi, Kenya
            </p>
            <p>
              Innovative Business Development and Marketing professional with over 15 years 
              of experience in Agribusiness and Climate Risk Management. Proven expertise in 
              strategy development, program management, and building transformative partnerships 
              across private, public, and development sectors throughout Africa.
            </p>
            <div className="hero-contact">
              <a href="mailto:samuelndege@yahoo.com" className="contact-link">
                <Mail size={18} />
                samuelndege@yahoo.com
              </a>
              <a href="tel:+254720671213" className="contact-link">
                <Phone size={18} />
                +254 720 671 213
              </a>
              <span className="contact-link">
                <MapPin size={18} />
                Nairobi, Kenya
              </span>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="developer-badge">
              <Briefcase size={28} />
              <span>15+ Years</span>
            </div>
            <div className="experience-badge">
              <Globe size={32} />
              <span>Pan-Africa Expertise</span>
            </div>
            <div className="image-wrapper">
              <img 
                src={erastusPhoto}
                alt="Erastus Samuel Ndege Ochieng'"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stats-content">
            <h3>/ PROFESSIONAL MISSION</h3>
            <h2>
              Leading the transformation of agriculture and climate resilience 
              across Africa, creating food security and sustainable opportunities.
            </h2>
            <p>
              My passion lies in building strategic partnerships that drive sustainable 
              agricultural development. With deep expertise in agriculture insurance, 
              climate risk management, and business development, I connect stakeholders 
              across sectors to create innovative solutions for Africa's agricultural challenges.
            </p>
            <p>
              I specialize in developing agribusiness product lines from scratch, managing 
              complex projects, and fostering relationships with governments, development 
              partners, financial institutions, and agri-based businesses to achieve 
              measurable impact.
            </p>
          </div>

          <div className="stats-numbers">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Major Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">African Markets</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$2.5M</span>
              <span className="stat-label">Grant Secured</span>
            </div>
          </div>
        </div>

        <div className="company-logos">
          <div className="logo-text">Trusted by leading organizations:</div>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='40' viewBox='0 0 140 40'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='14' fill='%23fff' font-weight='600'%3EWorld Bank%3C/text%3E%3C/svg%3E" alt="World Bank" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='16' fill='%23fff' font-weight='600'%3EAfrica Re%3C/text%3E%3C/svg%3E" alt="Africa Re" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='40' viewBox='0 0 140 40'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='15' fill='%23fff' font-weight='600'%3EAPA Insurance%3C/text%3E%3C/svg%3E" alt="APA Insurance" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='40' viewBox='0 0 100 40'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='18' fill='%23fff' font-weight='600'%3EILRI%3C/text%3E%3C/svg%3E" alt="ILRI" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='20' fill='%23fff' font-weight='600'%3EIFC%3C/text%3E%3C/svg%3E" alt="IFC" />
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='40' viewBox='0 0 160 40'%3E%3Ctext x='10' y='25' font-family='Arial' font-size='13' fill='%23fff' font-weight='600'%3EMasterCard Foundation%3C/text%3E%3C/svg%3E" alt="MasterCard Foundation" />
        </div>
      </section>

      {/* Core Competencies */}
      <section className="skills" id="experience">
        <div className="skills-header">
          <h3>/ CORE COMPETENCIES</h3>
          <h2>Expertise & Professional Capabilities</h2>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <Users size={48} color="#4ECDC4" />
            </div>
            <h3>Strategic Partnerships</h3>
            <p>Building and managing relationships with governments, development partners, 
            financial institutions, and agri-businesses across Africa.</p>
            <span className="project-count">20+ Active Partnerships</span>
          </div>

          <div className="skill-card featured">
            <div className="skill-icon">
              <Award size={48} color="#fff" />
            </div>
            <h3>Agriculture Insurance</h3>
            <p>Developing and implementing innovative agriculture and climate risk insurance 
            solutions, from product design to market deployment.</p>
            <span className="project-count">30+ Insurance Programs</span>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <TrendingUp size={48} color="#FFB347" />
            </div>
            <h3>Business Development</h3>
            <p>Strategy development, market analysis, product line creation, and driving 
            sustainable business growth in agribusiness sector.</p>
            <span className="project-count">15+ Years Expertise</span>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Target size={48} color="#4ECDC4" />
            </div>
            <h3>Project Management</h3>
            <p>Leading complex agricultural and climate resilience projects across multiple 
            African regions with measurable impact.</p>
            <span className="project-count">50+ Projects Managed</span>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Globe size={48} color="#7B68EE" />
            </div>
            <h3>Climate Risk Management</h3>
            <p>Expertise in climate resilience schemes, risk assessment, and developing 
            solutions for climate-vulnerable communities.</p>
            <span className="project-count">Pan-Africa Coverage</span>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Briefcase size={48} color="#FFB347" />
            </div>
            <h3>Market Research & Analysis</h3>
            <p>Conducting in-depth market analysis, identifying opportunities, and developing 
            data-driven strategies for market entry and growth.</p>
            <span className="project-count">Multiple Sectors</span>
          </div>
        </div>
      </section>

      {/* Professional Experience Timeline */}
      <section className="experience-timeline">
        <div className="timeline-header">
          <h3>/ PROFESSIONAL JOURNEY</h3>
          <h2>Career Experience & Positions</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Oct 2023 - Present</div>
            <div className="timeline-content">
              <h3>Head – Strategic Alliances and Partnerships</h3>
              <h4>K.M. Dastur & Company Limited</h4>
              <p className="role-purpose">
                Leading project management of Agriculture and Climate Resilience schemes 
                across Africa. Creating and managing business relationships and partnerships 
                among stakeholders to achieve organizational goals.
              </p>
              <ul className="role-highlights">
                <li>Project management of Agriculture Insurance Schemes across Africa</li>
                <li>Identifying and developing opportunities in climate risk and agriculture insurance</li>
                <li>Client relationship management with governments, development partners, and financial institutions</li>
                <li>Providing reinsurance brokerage and technical capacity services to cedants</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Oct 2017 - Sep 2023</div>
            <div className="timeline-content">
              <h3>Agribusiness Reinsurance Lead</h3>
              <h4>African Reinsurance Corporation (Africa Re)</h4>
              <p className="role-purpose">
                Developed and implemented initiatives to establish Africa Re as a leading 
                reinsurer supporting Agriculture and Micro Insurance growth across Africa.
              </p>
              <ul className="role-highlights">
                <li>Founded agriculture insurance unit as inaugural underwriter</li>
                <li>Built progressively growing and profitable portfolio across regional offices</li>
                <li>Achieved market leadership in key African markets</li>
                <li>Developed systems, processes, and protocols for agriculture reinsurance</li>
                <li>Coached and trained insurance companies on setting up agriculture departments</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Sep 2011 - Sep 2017</div>
            <div className="timeline-content">
              <h3>Senior Agronomist / Agriculture Business Manager</h3>
              <h4>APA Insurance Ltd</h4>
              <p className="role-purpose">
                Achieved business revenue growth and profitability under Agribusiness strategy. 
                Managed business development, customer relationships, and underwriting processes.
              </p>
              <ul className="role-highlights">
                <li>Developed and implemented comprehensive agribusiness insurance strategy</li>
                <li>Conducted market research and developed innovative insurance products</li>
                <li>Made company the market leader in agribusiness insurance</li>
                <li>Established systems across Kenya, Tanzania, and Uganda business units</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Sep 2010 - Sep 2011</div>
            <div className="timeline-content">
              <h3>Agriculture Insurance Underwriter</h3>
              <h4>Jubilee Insurance Company of Kenya</h4>
              <p className="role-purpose">
                Started and implemented agribusiness insurance strategy for the company.
              </p>
              <ul className="role-highlights">
                <li>Set up Agriculture insurance unit from scratch with complete processes and systems</li>
                <li>Developed agricultural insurance products and distribution channels</li>
                <li>Trained stakeholders and intermediaries on agricultural insurance</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Aug 2009 - Apr 2010</div>
            <div className="timeline-content">
              <h3>Project Coordinator</h3>
              <h4>Syngenta Foundation for Sustainable Agriculture</h4>
              <p className="role-purpose">
                Coordinated Small Holder Development Project in Laikipia to increase 
                productivity and incomes of small holder farmers.
              </p>
              <ul className="role-highlights">
                <li>Managed project transition to wider Small Holder Development Project</li>
                <li>Coordinated expansion of Kilimo Salama Project to Nyanza and Embu</li>
                <li>Facilitated adoption of new technologies through stakeholder collaboration</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Mar 2008 - Aug 2009</div>
            <div className="timeline-content">
              <h3>Project Officer</h3>
              <h4>Syngenta East Africa Limited</h4>
              <p className="role-purpose">
                Initiated and evaluated Product Stewardship and Conservation Agriculture activities.
              </p>
              <ul className="role-highlights">
                <li>Coordinated inaugural Index Based Crop Insurance Scheme (Kilimo Salama)</li>
                <li>Developed training modules for product stewardship</li>
                <li>Led Good Agricultural Practices (GAP) training programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="projects" id="achievements">
        <div className="projects-header">
          <h3>/ MAJOR ACHIEVEMENTS</h3>
          <h2>Career Highlights & Impact</h2>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop" 
                alt="MasterCard Foundation Grant"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Grant Award - 2015</span>
              <h3>MasterCard Foundation's Fund for Rural Prosperity</h3>
              <p>Won USD 2.5 million grant to assist in financial inclusion for rural farmers 
              through insurance. Selected as one of 5 successful applications from numerous 
              competitors globally.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop" 
                alt="Kenya Livestock Insurance Pool"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">National Program</span>
              <h3>Kenya National Agriculture & Livestock Insurance Pool</h3>
              <p>Led design, drafting, and implementation bringing together 7 leading underwriters 
              to manage Kenya's KLIP for pastoralists and Area Yield Index Insurance for smallholder 
              crop farmers.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop" 
                alt="Africa Re Leadership"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Organizational Development</span>
              <h3>Africa Re Agriculture Business Strategy</h3>
              <p>Founded and built agriculture insurance unit as inaugural underwriter, achieving 
              market leadership across African regional offices with progressive growth and 
              profitability.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=500&fit=crop" 
                alt="Index Based Livestock Insurance"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Innovation</span>
              <h3>Index Based Livestock Insurance (IBLI)</h3>
              <p>Successfully implemented and scaled pilot scheme with partners including ILRI, 
              World Bank, IFC, Financial Sector Deepening Trust, and Kenya Markets Trust.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop" 
                alt="Kilimo Salama Project"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Pioneering Initiative</span>
              <h3>Kilimo Salama Project</h3>
              <p>Coordinated implementation of Kenya's inaugural Index Based Crop Insurance 
              Scheme in Laikipia. Results enabled successful expansion to other regions 
              including Nyanza Province and Embu.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop" 
                alt="Value Chain Products"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Product Development</span>
              <h3>Agricultural Value Chain Insurance Products</h3>
              <p>Developed and deployed insurance products across multiple value chains including 
              sorghum, seed maize, sunflower, cotton, and aquaculture with various strategic partners.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=500&fit=crop" 
                alt="Market Leadership"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Market Position</span>
              <h3>APA Insurance Market Leadership</h3>
              <p>Transformed company to become market leader in agribusiness insurance with 
              respect to portfolio size and profitability across Kenya, Tanzania, and Uganda.</p>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop" 
                alt="Training Programs"
              />
            </div>
            <div className="project-info">
              <span className="project-tag">Capacity Building</span>
              <h3>Industry Training & Mentorship</h3>
              <p>Coached and trained numerous insurance companies on setting up agriculture 
              departments and successfully underwriting and growing agribusiness portfolios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonials">
        <div className="testimonials-content">
          <div className="testimonial">
            <p className="testimonial-quote">
              "Samuel's deep expertise in agriculture insurance and his exceptional ability 
              to build strategic partnerships across government, private sector, and development 
              organizations has been transformative for agricultural risk management in Africa. 
              His leadership in founding new business lines and achieving market leadership 
              demonstrates rare strategic vision combined with operational excellence."
            </p>
            <div className="testimonial-author">
              <div className="author-image">AR</div>
              <div className="author-info">
                <h4>African Reinsurance Corporation</h4>
                <p>Leadership Team</p>
                <span className="company-badge">Pan-Africa Operations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <div className="contact-info">
            <h2>
              Let's<span className="arrow">→</span><br />
              collaborate.
            </h2>
            <p>
              Open to exploring strategic partnerships, consulting opportunities, and 
              collaborations in agribusiness, climate resilience, and agricultural 
              insurance across Africa and beyond.
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <Mail size={24} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:samuelndege@yahoo.com">samuelndege@yahoo.com</a>
                </div>
              </div>
              <div className="detail-item">
                <Phone size={24} />
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+254720671213">+254 720 671 213</a>
                </div>
              </div>
              <div className="detail-item">
                <MapPin size={24} />
                <div>
                  <strong>Location</strong>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <div className="badge">
              Open for strategic partnerships & consulting opportunities
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your name:</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your email address:</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your message or inquiry:</label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">SAMUEL NDEGE</div>
          
          <div className="footer-socials">
            <a href="https://linkedin.com/in/samuel-ndege" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:samuelndege@yahoo.com" className="social-link" title="Email">
              <Mail size={20} />
            </a>
            <a href="tel:+254720671213" className="social-link" title="Phone">
              <Phone size={20} />
            </a>
          </div>

          <p className="footer-copyright">
            © 2026 Erastus Samuel Ndege Ochieng' | Strategic Alliances & Partnerships Leader | Nairobi, Kenya
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;