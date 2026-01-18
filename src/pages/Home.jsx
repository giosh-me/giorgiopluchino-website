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

        </div>
    );
};

export default Home;
