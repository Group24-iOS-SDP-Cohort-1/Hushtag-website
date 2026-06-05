export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <div className="legal-meta">Last Updated: June 5, 2026</div>

        <p>
          At Hushtag, we are committed to protecting your privacy and security. This Privacy Policy describes how Hushtag (the "App", "we", "us", or "our") collects, uses, stores, and protects information when you use our iOS application and website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          To provide you with a high-fidelity, context-aware content generation experience, we collect specific types of information:
        </p>
        <ul>
          <li><strong>Account Information:</strong> When you sign up, we securely collect your email and credential details via our authentication provider, Supabase.</li>
          <li><strong>Chat History and Content drafts:</strong> We store your chat logs, scripts, ideas, descriptions, tags, and performance analytics logs to allow sync across your iOS devices and preserve your workspace.</li>
          <li><strong>Usage and Device Data:</strong> We may collect anonymous data related to app performance, crashes, device model, and OS version to ensure smooth performance.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>
          Your information is solely used to maintain and optimize your experience with the Hushtag app:
        </p>
        <ul>
          <li>To authenticate and manage your creator profile.</li>
          <li>To save, search, sync, and filter your content ideas and scripts.</li>
          <li>To process prompt history and contextual data for generating scripts, titles, and descriptions.</li>
          <li>To monitor app performance and resolve software defects.</li>
        </ul>

        <h2>3. Data Protection and AI Integrations</h2>
        <p>
          We employ advanced measures to guarantee that your data is safe:
        </p>
        <h3>Supabase Secure Database</h3>
        <p>
          Your saved ideas, metadata, and scripts are stored in a secured PostgreSQL database hosted on Supabase. Data transmissions between the app and backend are encrypted with SSL protocols.
        </p>
        <h3>AI Edge Functions and Apple Intelligence</h3>
        <p>
          Our application connects with Apple Intelligence on-device for local intelligence computations. For advanced, complex generation, the app sends prompt text to our secure edge completion functions. We do not use your generated scripts or chat history to train third-party models.
        </p>

        <h2>4. Data Sharing and Third Parties</h2>
        <p>
          We do not sell, rent, or trade your personal information. We only share data with essential backend infrastructure services (such as Supabase for database hosting and edge hosting) to compile completions and sync states.
        </p>

        <h2>5. Your Privacy Rights</h2>
        <p>
          You retain complete ownership over your content. You can delete individual ideas, scripts, or your entire account directly from within the app settings. Once deleted, all associated data is permanently removed from our active databases.
        </p>

        <h2>6. Changes to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the revised version on this page and updating the "Last Updated" date.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions, suggestions, or concerns regarding our privacy practices, please contact us at: <a href="mailto:support@hushtagapp.com">support@hushtagapp.com</a>.
        </p>
      </div>
    </main>
  );
}
