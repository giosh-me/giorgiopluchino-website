import React from 'react';
import Seo from '../components/Seo';
import Card from '../components/Card';
import { Search, Map, Settings, Zap, Check } from 'lucide-react';
import './Metodo.css';

const Metodo = () => {
    return (
        <div className="metodo-page">
            <Seo
                title="Il Metodo - Ingegneria della Crescita"
                description="Scopri il framework di Giorgio Pluchino: Diagnosi, Posizionamento, Sistema, Iterazione. Un processo scientifico per scalare il tuo business."
                path="/metodo"
            />
            <section className="section bg-light">
                <div className="container text-center">
                    <h1 className="metodo-title">Un processo semplice<br />Chiarezza → Priorità → Sistema</h1>
                    <p className="metodo-subtitle">
                        Niente magia nera. Solo un framework collaudato per rimuovere i colli di bottiglia e sbloccare la crescita.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="steps-container">
                        {/* Step 1 */}
                        <div className="step-row">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Diagnosi</h3>
                                <div className="step-icon"><Search size={24} /></div>
                                <p>Non muovo un dito senza dati. Analizzo tracking, bilanci, margini e assetti attuali. Spesso il problema non è "più traffico", ma "meglio conversione".</p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-row reverse">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>Posizionamento</h3>
                                <div className="step-icon"><Map size={24} /></div>
                                <p>Ingegnerizzo la tua offerta per renderla incomparabile. Definiamo il "Blue Ocean" in cui il tuo brand può vincere senza sconti.</p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-row">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Sistema</h3>
                                <div className="step-icon"><Settings size={24} /></div>
                                <p>Costruisco l'ecosistema tecnico: CRM, automazioni, dashboard e campagne. Tutto connesso, tutto misurabile.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="step-row reverse">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <h3>Iterazione</h3>
                                <div className="step-icon"><Zap size={24} /></div>
                                <p>Lancio, misuro, correggo. L'approccio scientifico richiede test rapidi per scalare solo ciò che funziona davvero.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section section-bg-alt">
                <div className="container">
                    <h2 className="text-center mb-10">Output Concreti</h2>
                    <div className="outputs-grid">
                        <Card className="output-card">
                            <Check className="text-primary" />
                            <span>Mappa del Posizionamento</span>
                        </Card>
                        <Card className="output-card">
                            <Check className="text-primary" />
                            <span>Roadmap 90 giorni</span>
                        </Card>
                        <Card className="output-card">
                            <Check className="text-primary" />
                            <span>Piano Media + KPI</span>
                        </Card>
                        <Card className="output-card">
                            <Check className="text-primary" />
                            <span>Setup Tracking GA4/GTM</span>
                        </Card>
                        <Card className="output-card">
                            <Check className="text-primary" />
                            <span>Playbook Operativo Team</span>
                        </Card>
                        <Card className="output-card">
                            <Check className="text-primary" />
                            <span>Accesso Dashboard Direzionale</span>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Metodo;
