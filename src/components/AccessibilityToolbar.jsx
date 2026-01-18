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
                <Accessibility size={28} strokeWidth={1.5} />
            </button>

            {isOpen && (
                <div className="a11y-panel">
                    <div className="a11y-control">
                        <div className="control-header">
                            <Type size={16} />
                            <span>Testo</span>
                        </div>
                        <div className="btn-group">
                            <button onClick={decreaseFont} aria-label="Diminuisci testo">-</button>
                            <button onClick={resetFont} aria-label="Resetta testo">100%</button>
                            <button onClick={increaseFont} aria-label="Aumenta testo">+</button>
                        </div>
                    </div>

                    <div className="a11y-control">
                        <div className="control-header">
                            {highContrast ? <Sun size={16} /> : <Moon size={16} />}
                            <span>Contrasto</span>
                        </div>
                        <button
                            className={`toggle-btn ${highContrast ? 'active' : ''}`}
                            onClick={() => setHighContrast(!highContrast)}
                            aria-label="Attiva Alto Contrasto"
                        >
                            {highContrast ? 'Standard' : 'Alto Contrasto'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityToolbar;
