import React from 'react';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import './Ventures.css';

const Ventures = () => {
    return (
        <div className="ventures-page">
            <section className="section text-center">
                <div className="container">
                    <h1 className="mb-4">Le due anime del business</h1>
                    <p className="max-w-600 mx-auto">
                        Credo nell'equilibrio tra creatività esplosiva e rigore strategico.
                        Per questo ho fondato due realtà distinte ma complementari.
                    </p>
                </div>
            </section>

            <section className="section section-musa text-white">
                <div className="container split-layout">
                    <div className="venture-info">
                        <span className="venture-label">Creative Tech & Experience</span>
                        <h2 className="text-white">Musa</h2>
                        <p className="text-gray-300">
                            Musa è il parco giochi dell'innovazione. Qui uniamo talent management, eventi dal vivo e brand activation.
                            È dove l'AI incontra l'arte e l'intrattenimento.
                        </p>
                        <ul className="venture-list">
                            <li>Talent Management & Creator Economy</li>
                            <li>Eventi Live & Festival</li>
                            <li>Format originali & Produzioni</li>
                        </ul>
                        <Button variant="secondary" className="mt-4" onClick={() => window.open('https://musaholding.it', '_blank')}>
                            Vai al sito <ArrowUpRight size={16} />
                        </Button>
                    </div>
                    <div className="venture-visual musa-visual">
                        <img src="/assets/musa-logo.png" alt="Musa Logo" className="musa-visual-logo" />
                    </div>
                </div>
            </section>

            {/* Brand Diretto Section */}
            <section className="section section-bd">
                <div className="container split-layout reverse">
                    <div className="venture-info">
                        <span className="venture-label text-primary">Performance & Strategy</span>
                        <h2>Brand Diretto</h2>
                        <p className="text-secondary">
                            La centrale operativa per la crescita aziendale. Qui applichiamo il metodo scientifico al marketing.
                            Dashboard, margini, ROI, scalabilità.
                        </p>
                        <ul className="venture-list dark-list">
                            <li>Consulenza Strategica Direzionale</li>
                            <li>Gestione Performance (PPC)</li>
                            <li>Integrazione Dati & CRM</li>
                        </ul>
                        <Button variant="primary" className="mt-4" onClick={() => window.open('https://branddiretto.com', '_blank')}>
                            Vai al sito <ArrowUpRight size={16} />
                        </Button>
                    </div>
                    <div className="venture-visual bd-visual">
                        <img src="/assets/brand-diretto-logo.png" alt="Brand Diretto Logo" className="bd-visual-logo" />
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container">
                    <h3>Non sai quale strada scegliere?</h3>
                    <p className="mb-4">Prenota una call conoscitiva, capiamo insieme di cosa hai bisogno.</p>
                    <Button variant="primary" onClick={() => window.location.href = '/contatti'}>Parliamone</Button>
                </div>
            </section>
        </div>
    );
};

export default Ventures;
