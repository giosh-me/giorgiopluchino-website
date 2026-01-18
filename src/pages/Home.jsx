import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { ArrowRight, BarChart, Server, Zap, Layers, Sparkles } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Non solo marketing.<br />
                            <span className="text-primary">Ingegneria della crescita.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Unisco AI, dati e posizionamento per trasformare strategie in risultati misurabili. Niente template, niente moda: solo sistemi che funzionano nel tuo contesto.
                        </p>
                        <div className="hero-actions">
                            <Button variant="primary" onClick={() => window.location.href = '/contatti'} icon>
                                Prenota una call conoscitiva
                            </Button>
                            <Button variant="secondary" onClick={() => window.location.href = '/metodo'}>
                                Vedi metodo e casi
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="metrics-section section-bg-alt">
                <div className="container">
                    <div className="metrics-grid">
                        <div className="metric-item">
                            <h3>12+ Anni</h3>
                            <p>Di esperienza</p>
                        </div>
                        <div className="metric-item">
                            <h3>Decine</h3>
                            <p>Di mercati testati</p>
                        </div>
                        <div className="metric-item">
                            <h3>AI-Driven</h3>
                            <p>Approccio scientifico</p>
                        </div>
                        <div className="metric-item">
                            <h3>100% Custom</h3>
                            <p>Soluzioni uniche</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Method Section */}
            <section className="section method-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Il mio metodo</h2>
                        <p>Un processo lineare per portare ordine nel caos.</p>
                    </div>
                    <div className="grid-4">
                        <Card className="method-card">
                            <div className="icon-wrapper"><Layers size={24} /></div>
                            <h4>1. Ascolto</h4>
                            <p>Niente presunzioni. Capisco il contesto e gli obiettivi.</p>
                        </Card>
                        <Card className="method-card">
                            <div className="icon-wrapper"><BarChart size={24} /></div>
                            <h4>2. Analisi</h4>
                            <p>Studio i dati, il mercato e i margini operativi.</p>
                        </Card>
                        <Card className="method-card">
                            <div className="icon-wrapper"><Zap size={24} /></div>
                            <h4>3. Chiarezza</h4>
                            <p>Definisco un piano d'azione privo di ambiguità.</p>
                        </Card>
                        <Card className="method-card">
                            <div className="icon-wrapper"><Server size={24} /></div>
                            <h4>4. Costruzione</h4>
                            <p>Implemento sistemi scalabili e durevoli.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section section-bg-alt">
                <div className="container">
                    <div className="section-header">
                        <h2>Di cosa mi occupo</h2>
                        <p>Specializzazione verticale, visione orizzontale.</p>
                    </div>
                    <div className="grid-3">
                        <Card>
                            <h4>AI Marketing & Automazione</h4>
                            <p>Utilizzo l'intelligenza artificiale per scalare operazioni e personalizzare l'esperienza utente senza aumentare i costi umani.</p>
                        </Card>
                        <Card>
                            <h4>Brand Positioning & Offerta</h4>
                            <p>Ridefinisco il tuo posizionamento per uscire dalla guerra dei prezzi e creare un sistema di offerta irresistibile.</p>
                        </Card>
                        <Card>
                            <h4>Performance & Funnel</h4>
                            <p>Gestione avanzata di Google e Meta Ads, tracciamento granulare e ottimizzazione del tasso di conversione.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Ventures Section */}
            <section className="section ventures-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Le mie Venture</h2>
                        <p>Non solo teoria. Applico ciò che insegno nei miei business.</p>
                    </div>
                    <div className="ventures-grid">
                        <Card className="venture-card large-card">
                            <div className="venture-content">
                                <div className="venture-tag">Creative Tech</div>
                                <div className="venture-logo-box">
                                    <img src="/assets/musa-logo.png" alt="Musa Logo" className="venture-logo-img" />
                                </div>
                                <p>La fucina creativa per creator, eventi ed experience indimenticabili. Uniamo talenti e brand.</p>
                                <Button variant="secondary" onClick={() => window.location.href = '/ventures'} icon>Scopri Musa</Button>
                            </div>
                        </Card>
                        <Card className="venture-card large-card">
                            <div className="venture-content">
                                <div className="venture-tag">Corporate & Strategy</div>
                                <h3>Brand Diretto</h3>
                                <p>Strategie avanzate di posizionamento e performance marketing per aziende che vogliono scalare.</p>
                                <Button variant="secondary" onClick={() => window.location.href = '/ventures'} icon>Scopri Brand Diretto</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Proof / Credibility Section */}
            <section className="section section-bg-alt proof-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Cosa aspettarsi</h2>
                    </div>
                    <div className="grid-3">
                        <div className="proof-item">
                            <h4>Cosa ottieni in 2 settimane</h4>
                            <p>Una diagnosi completa, una roadmap strategica e i primi asset pronti al lancio. Nessun documento inutile di 100 pagine.</p>
                        </div>
                        <div className="proof-item">
                            <h4>Come lavoro</h4>
                            <p>Sprint settimanali, report asincroni, call solo quando necessario. Rispetto il tuo tempo e focalizzo l'energia sull'output.</p>
                        </div>
                        <div className="proof-item">
                            <h4>Per chi è questo metodo</h4>
                            <p>Founder e PMI che hanno prodotto, mercato e budget, ma mancano di sistema. Non adatto a chi cerca "trucchi" magici.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built with AI Logic Section */}
            <section className="section ai-logic-section">
                <div className="container ai-logic-container">
                    <div className="ai-content">
                        <Sparkles size={32} className="text-primary mb-4" />
                        <h2>Questo sito è costruito interamente con AI.</h2>
                        <p>Dalla UI al copy, fino al codice. Non per "fare scena", ma per dimostrare che so trasformare strumenti AI in output reali: veloci, puliti, misurabili.</p>
                        <span>Vuoi lo stesso approccio sul tuo business?</span>
                        <div className="mt-4">
                            <Button variant="secondary" onClick={() => window.location.href = '/contatti'}>Prenota una call</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section cta-section bg-dark text-white">
                <div className="container text-center">
                    <h2 className="text-white">Pronto a mettere ordine e crescere?</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Una call conoscitiva di 20 minuti per capire contesto, priorità e la tua prossima mossa vincente.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Button variant="primary" onClick={() => window.location.href = '/contatti'}>Prenota call</Button>
                        <Button variant="secondary" className="btn-inverse" onClick={() => window.location.href = 'mailto:ciao@giorgiopluchino.it'}>Scrivimi</Button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
