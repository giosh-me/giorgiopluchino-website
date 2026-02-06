import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { Mail, Linkedin, MapPin, CheckCircle } from 'lucide-react';
import './Contatti.css';

const Contatti = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: 'consulenza',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Errore di connessione. Controlla la tua connessione e riprova.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="contatti-page section">
            <div className="container">
                <div className="contatti-grid">

                    {/* Sidebar */}
                    <div className="contatti-sidebar">
                        <h1 className="mb-8">Parliamo del<br />tuo futuro</h1>
                        <p className="mb-12 text-secondary">
                            Consulenza di marketing AI-driven, posizionamento strategico e crescita sostenibile.
                            Costruiamo insieme la tua prossima mossa vincente.
                        </p>

                        <h3 className="mb-6">Di cosa possiamo discutere</h3>
                        <div className="discussion-cards">
                            <Card className="discussion-card">
                                <div className="discussion-icon bg-blue-light text-primary">A</div>
                                <div>
                                    <h4>Marketing & Strategia AI</h4>
                                    <p className="text-sm text-secondary">Approcci data-driven per scalare il tuo business.</p>
                                </div>
                            </Card>
                            <Card className="discussion-card">
                                <div className="discussion-icon bg-blue-light text-primary">V</div>
                                <div>
                                    <h4>Venture Building (Musa)</h4>
                                    <p className="text-sm text-secondary">Innovazione e sviluppo di nuove imprese.</p>
                                </div>
                            </Card>
                            <Card className="discussion-card">
                                <div className="discussion-icon bg-blue-light text-primary">B</div>
                                <div>
                                    <h4>Brand Diretto</h4>
                                    <p className="text-sm text-secondary">Strategie di posizionamento diretto sul mercato.</p>
                                </div>
                            </Card>
                        </div>

                        <div className="contact-meta mt-12">
                            <div className="flex items-center gap-4 mb-4">
                                <Mail className="text-primary" />
                                <a href="mailto:ciao@giorgiopluchino.it">ciao@giorgiopluchino.it</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Linkedin className="text-primary" />
                                <a href="https://www.linkedin.com/in/giorgiopluchino/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contatti-form-wrapper">
                        <Card className="form-card" hoverEffect={false}>
                            {submitted ? (
                                <div className="success-message">
                                    <CheckCircle size={64} className="text-green mb-4" />
                                    <h3>Messaggio inviato!</h3>
                                    <p>Grazie per avermi contattato. Ti risponderò solitamente entro 24 ore.</p>
                                    <Button variant="secondary" onClick={() => setSubmitted(false)} className="mt-6">Nuovo messaggio</Button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="mb-2">Invia un messaggio</h2>
                                    <p className="text-secondary mb-8">Compila il form qui sotto.</p>

                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-group">
                                            <label htmlFor="name">Nome Completo</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                placeholder="Mario Rossi"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Indirizzo Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="mario@esempio.it"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="topic">Argomento</label>
                                            <select
                                                id="topic"
                                                name="topic"
                                                value={formData.topic}
                                                onChange={handleChange}
                                            >
                                                <option value="consulenza">Consulenza Generale</option>
                                                <option value="brand">Brand Positioning</option>
                                                <option value="ai">AI & Automazioni</option>
                                                <option value="performance">Performance Marketing</option>
                                                <option value="altro">Altro</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">Il tuo messaggio</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Raccontami del tuo progetto..."
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contatti;
