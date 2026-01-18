import React, { useState, useEffect } from 'react';
import { Type, Moon, Sun, Monitor, Accessibility } from 'lucide-react';
import './AccessibilityToolbar.css';

const AccessibilityToolbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSize, setFontSize] = useState(100); // Percentage
    const [highContrast, setHighContrast] = useState(false);

    useEffect(() => {
        // Apply font size
        document.documentElement.style.fontSize = `${fontSize}%`;

        // Apply High Contrast
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [fontSize, highContrast]);

    const increaseFont = () => setFontSize(prev => Math.min(prev + 10, 150));
    const decreaseFont = () => setFontSize(prev => Math.max(prev - 10, 90));
    const resetFont = () => setFontSize(100);

    return (
        <div className={`a11y-toolbar ${isOpen ? 'open' : ''}`}>
            <button
                className="a11y-toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Opzioni Accessibilità"
            >
                <span className="sr-only">Accessibilità</span>
                <div className="a11y-icon">
                    <Accessibility size={24} />
                </div>
            </button>

            {isOpen && (
                <div className="a11y-panel">
                    <h4>Opzioni Accessibilità</h4>

                    <div className="a11y-control">
                        <span>Dimensione Testo</span>
                        <div className="btn-group">
                            <button onClick={decreaseFont} aria-label="Diminuisci testo">A-</button>
                            <button onClick={resetFont} aria-label="Resetta testo">Reset</button>
                            <button onClick={increaseFont} aria-label="Aumenta testo">A+</button>
                        </div>
                    </div>

                    <div className="a11y-control">
                        <span>Contrasto</span>
                        <button
                            className={`toggle-btn ${highContrast ? 'active' : ''}`}
                            onClick={() => setHighContrast(!highContrast)}
                            aria-label="Attiva Alto Contrasto"
                        >
                            {highContrast ? 'Disattiva Alto Contrasto' : 'Attiva Alto Contrasto'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityToolbar;
