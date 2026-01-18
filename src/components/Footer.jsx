import React from 'react';
import { Linkedin, Mail, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section-bg-alt">
            <div className="container footer-container">

                <div className="footer-top">
                    <div className="footer-brand">
                        <h4>Giorgio Pluchino</h4>
                        <p className="footer-tagline">Strategia, posizionamento e AI applicata.</p>
                        <div className="footer-socials">
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="mailto:hello@giorgiopluchino.com" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h5>Esplora</h5>
                            <a href="/">Home</a>
                            <a href="/chi-sono">Chi Sono</a>
                            <a href="/metodo">Metodo</a>
                            <a href="/ventures">Ventures</a>
                        </div>

                        <div className="footer-col">
                            <h5>Legal</h5>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                            <a href="#">Terms of Use</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © {currentYear} Giorgio Pluchino. All rights reserved.
                    </div>

                    <div className="ai-badge" title="Tutti i contenuti e il codice sono stati generati con supporto AI supervisionato.">
                        <Sparkles size={14} className="ai-icon" />
                        <span>Built with AI • 100% Generated</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
