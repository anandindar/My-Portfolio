import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Anand Kumar Gupta. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://linkedin.com/in/anandkumar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/anandkumar" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://twitter.com/anandkumar" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;