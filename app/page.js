import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="dot"></span>
              <span>AI-Powered iOS App</span>
            </div>
            <h1>
              Find Your Next <br />
              <span className="gradient-text">Viral Idea</span>
            </h1>
            <p>
              Hushtag is your premium iOS content creation companion. Brainstorm concepts, write high-engaging scripts, auto-generate tags, and manage your production pipeline from one unified space.
            </p>
            <div className="hero-actions">
              <Link href="#download" className="btn-primary">
                Download for iOS
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="#features" className="btn-secondary">
                Explore Features
              </Link>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/images/hero-mockup.png" alt="Hushtag AI Chat Workspace on iOS" className="hero-mockup-img" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stat">
            <div className="stat-value gradient-text">10x</div>
            <div className="stat-label">Faster Writing</div>
          </div>
          <div className="stat">
            <div className="stat-value gradient-text">98%</div>
            <div className="stat-label">Creator Rating</div>
          </div>
          <div className="stat">
            <div className="stat-value gradient-text">24/7</div>
            <div className="stat-label">AI Brainstorming</div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="features">
        <div className="container">
          <div className="features-header">
            <span className="section-label">Features</span>
            <h2 className="section-title">Designed for Content Creators</h2>
            <p className="section-desc">
              Hushtag helps creators go from idea to content by combining AI-powered ideation, script generation, and content creation tools in one seamless experience.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Idea Generation</h3>
              <p>Discover viral idea related to your niche and by using keywords. Track average views, like ratios, and performance analytics to target high-potential concepts.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>AI Script Generation</h3>
              <p>Create complete  video scripts, optimized titles, and descriptions tailored specifically for platforms like YouTube, Instagram, Twitter.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Conversational Workflow</h3>
              <p>Brainstorm interactively with our AI chatbot. Tag messages directly in the chat as "Script", "Title", or "Description" to structure posts.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🗂️</div>
              <h3>Organization & Filtering</h3>
              <p>Manage and maintain all your brand deals in order to track efficiently.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Auto-Scheduling</h3>
              <p>Scheule your posts on youtube.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">☁️</div>
              <h3>Analytics</h3>
              <p>Get detailed report regarding your channel analytics and get ideas tailored to it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <div className="container">
          {/* Showcase Block 1 */}
          <div className="showcase-block">
            <div className="showcase-text">
              <span className="section-label">Smart Discovery</span>
              <h2>Analyze and Manage Ideas with Metrics</h2>
              <p>
                Stop guessing what content works. With Hushtag, every stored idea is enriched with description analysis, targeted hashtags, and expected performance benchmarks (views/likes) so you build what your audience wants.
              </p>
              <ul className="showcase-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Detailed average performance prediction cards
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Search and organize ideas instantly
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Tag scripts for brand deals and organic content
                </li>
              </ul>
            </div>
            <div className="showcase-image-container">
              <img src="/images/feature-ideas.png" alt="Hushtag Idea Analytics Screen" className="showcase-img" />
            </div>
          </div>

          {/* Showcase Block 2 */}
          <div className="showcase-block reverse">
            <div className="showcase-image-container">
              <img src="/images/feature-scripts.png" alt="Hushtag Script Editor Screen" className="showcase-img" />
            </div>
            <div className="showcase-text">
              <span className="section-label">Interactive Editor</span>
              <h2>Collaborate with AI to Generate Scripts</h2>
              <p>
                Engage in an AI chat session to flesh out scripts. When the AI returns a compelling title or description, simply tap to mark it. The app compiles marked segments directly into a ready-to-copy post.
              </p>
              <ul className="showcase-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Platform-tailored length and formatting rules
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Interactive chat tagging workflow
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Expand/refine descriptions using advanced LLM models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section id="workflow" className="workflow">
        <div className="container">
          <div className="workflow-header">
            <span className="section-label">Workflow</span>
            <h2 className="section-title">The Creator Journey</h2>
            <p className="section-desc">How Hushtag takes your content from concept to final execution.</p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Discover and choose idea using keywords</h3>
              <p>Select a trending concept and start building on it.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>Start Chat</h3>
              <p>Interact with chatbot and get idea and platform specific scripts, optimised titles and descriptions.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Scheule</h3>
              <p>After working on the idea schedule the post on youtube.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-card-glow"></div>
            <h2>Elevate Your Creative Workflow</h2>
            <p>Start turning your concepts into fully realized, formatted posts. Available now on the Apple App Store.</p>
            <Link href="#" className="btn-primary">
              Get Hushtag for iOS
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
