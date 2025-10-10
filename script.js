// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Gestion du formulaire de contact
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des valeurs du formulaire
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validation simple
        if (!name || !email || !subject || !message) {
            showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }
        
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Veuillez entrer une adresse email valide.', 'error');
            return;
        }
        
        // IMPORTANT : Ici vous devrez configurer l'envoi réel du formulaire
        // Options possibles :
        // 1. Utiliser un service comme FormSpree, Formsubmit.co, ou Netlify Forms
        // 2. Créer un script PHP sur votre serveur
        // 3. Utiliser une API d'envoi d'email
        
        // Exemple avec FormSpree (remplacez YOUR_FORM_ID par votre ID FormSpree) :
        /*
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                showMessage('Votre message a été envoyé avec succès !', 'success');
                contactForm.reset();
            } else {
                showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
            }
        })
        .catch(error => {
            showMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
        });
        */
        
        // Pour le moment, on simule un envoi réussi
        showMessage('Votre message a été envoyé avec succès ! (Configuration nécessaire pour envoi réel)', 'success');
        contactForm.reset();
    });
}

// Fonction pour afficher les messages
function showMessage(text, type) {
    if (formMessage) {
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        
        // Faire défiler jusqu'au message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Masquer le message après 5 secondes
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Animation au scroll (optionnel)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments avec animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.composer-card, .cd-showcase, .biography, .works');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});