import React from 'react';
import { useNavigate } from 'react-router-dom';
import Seo from '../components/Seo';
import Button from '../components/Button';
import Card from '../components/Card';
import { CheckCircle, XCircle, Zap, Shield, Eye } from 'lucide-react';
import './ChiSono.css';

const ChiSono = () => {
    const navigate = useNavigate();

    return (
        <div className="chi-sono-page">
            <Seo
                title="Chi Sono - La mia storia"
                description="Innovation Manager, Strategist e Imprenditore. Dal 2012 nel marketing, oggi unisco AI e strategia per creare valore reale. Scopri i miei valori e il mio approccio."
                path="/chi-sono"
            />
            {/* Hero */}
            <section className="section about-hero-section">
                <div className="container about-grid">
                    <div className="about-image-wrapper">
                        <img src="/assets/giorgio-photo.jpg" alt="Giorgio Pluchino - AI Innovation Manager & Strategist" className="about-image" />
                    </div>
                    <div className="about-text-content">
                        <h1 className="chi-sono-title">Strategia prima.<br />AI come leva.</h1>
                        <div className="chi-sono-content">
                            <p>
                                Lavoro nel marketing dal 2012. Ho visto nascere e morire decine di "trend del momento".
                                Mi sono reso conto che l'unica cosa che resta è la <strong>strategia</strong>.
                            </p>
                            <p>
                                Oggi utilizzo l'AI non per sostituire il pensiero umano, ma per amplificarlo.
                                La mia ossessione è l'approccio ecosistemico: non guardo mai il singolo canale (Facebook, Google, Email)
                                isolato dal resto. Guardo i margini, l'offerta, i processi interni ed esterni.
                            </p>
                            <p>
                                L'AI mi permette di essere veloce, preciso e scalabile. Ma è la strategia che guida la macchina.
                                Senza direzione, la velocità è solo un modo più rapido per schiantarsi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 Pillars */}
            <section className="section section-bg-alt">
                <div className="container">
                    <h2 className="text-center mb-60">I 3 Pilastri</h2>
                    <div className="grid-3">
                        <Card>
                            <div className="pillar-icon"><Shield size={32} /></div>
                            <h3>Onestà Radicale</h3>
                            <p>Se non conviene, te lo dico. Non vendo servizi di cui non hai bisogno. La fiducia vale più di una fattura.</p>
                        </Card>
                        <Card>
                            <div className="pillar-icon"><Zap size={32} /></div>
                            <h3>Adattività AI-Driven</h3>
                            <p>Il mercato cambia ogni settimana. Uso l'AI per testare rapidamente, iterare e adattare i modelli senza rigidità.</p>
                        </Card>
                        <Card>
                            <div className="pillar-icon"><Eye size={32} /></div>
                            <h3>Visione Integrata</h3>
                            <p>Non ottimizzo le ads se l'offerta non converte. Lavoro sull'intero ecosistema per massimizzare il profitto netto, non le vanity metrics.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What I Don't Do */}
            <section className="section">
                <div className="container">
                    <div className="dont-do-box">
                        <h2>Cosa NON faccio</h2>
                        <ul className="dont-do-list">
                            <li><XCircle className="text-red" /> Fuffa motivazionale</li>
                            <li><XCircle className="text-red" /> Gestione social "creativa" senza ROI</li>
                            <li><XCircle className="text-red" /> Template copiati e incollati</li>
                            <li><XCircle className="text-red" /> Promesse di guadagno facile</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section text-center">
                <div className="container">
                    <h2>Vuoi lavorare con questo approccio?</h2>
                    <div className="mt-4">
                        <Button onClick={() => navigate('/contatti')}>Parliamone</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChiSono;
