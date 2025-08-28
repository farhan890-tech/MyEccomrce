import React from "react";

export default function Footer() {
  return (
    <>
      {/* Embedded CSS for the Footer component */}
      <style>
        {`
          /* Footer Styles */
          .footer {
            background-color: #1f2937; /* Dark background */
            color: #9ca3af; /* Light gray text */
            padding: 3rem 1.5rem;
            text-align: center;
            border-top: 5px solid #4f46e5; /* A subtle, colorful border */
          }
          .footer-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
          }
          .social-icons-container {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
          }
          .social-icon-link {
            color: #9ca3af;
            transition: color 0.3s ease, transform 0.3s ease;
          }
          .social-icon-link:hover {
            color: white;
            transform: translateY(-2px);
          }
          .social-icon-link svg {
            width: 1.5rem;
            height: 1.5rem;
          }
          .footer-text {
            font-size: 0.875rem;
          }
        `}
      </style>
      <footer className="footer">
        <div className="footer-container">
          <div className="social-icons-container">
            {/* Instagram Icon */}
            <a href="#" aria-label="Instagram" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            {/* Facebook Icon */}
            <a href="#" aria-label="Facebook" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* X (formerly Twitter) Icon */}
            <a href="#" aria-label="X" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-logo">
                <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
              </svg>
            </a>
            {/* WhatsApp Icon */}
            <a href="#" aria-label="WhatsApp" className="social-icon-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp">
                <path d="M18.4 7.63a7.1 7.1 0 0 1-5.18-2.61c-.57-.86-1.57-1.84-2.81-1.84s-1.4.98-2.8 2.37c-1.4 1.39-2.58 3.51-2.58 5.75A6.9 6.9 0 0 0 9 18h3v-2.3a.5.5 0 0 1 .5-.5c1 0 2.2 1.4 3.2 1.4a.5.5 0 0 0 .5-.5V14.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5c-1 0-2.2-1.4-3.2-1.4a.5.5 0 0 0-.5.5v2.3a7 7 0 0 0 7.4-7.4Z"/>
                <path d="M12 2a10 10 0 0 0-7.3 16.7c-2.3 2.3-2.3 2.3-3.7 3.3a1 1 0 0 0-.3 1.3c.3.5.7.9 1.2 1.2.3.2.7.3 1.1.3a1 1 0 0 0 1.2-.3c.4-.4.8-1 1.6-1.8a10 10 0 0 0 16.7-7.3 10 10 0 0 0-10-10Z"/>
              </svg>
            </a>
          </div>
          <p className="footer-text">
            © 2025 MyStore. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
