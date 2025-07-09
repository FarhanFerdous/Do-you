

// Create sparkles and animate bubbles on page load
document.addEventListener('DOMContentLoaded', function() {
    createSparkles(15);
    animateBubbles();
});

// Click yes button
function clickYesButton() {
    // Create heart explosion
    createHeartExplosion(50);
    
    // Create a love message
    createLoveMessage();
    
    // Add more sparkles
    createSparkles(30);
}

// Move button on hover
function hoverNoButton() {
    // Random position within the window
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    document.getElementById('no-button').style.left = x + 'px';
    document.getElementById('no-button').style.top = y + 'px';
    
    // Create a few sparkles when button moves
    createSparkles(3);
}

// Create heart explosion effect
function createHeartExplosion(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.className = 'heart-explosion';
            
            // Random position around the yes button
            const yesButton = document.getElementById('yes-button');
            const rect = yesButton.getBoundingClientRect();
            
            heart.style.left = (rect.left + rect.width/2 + (Math.random() * 300 - 150)) + 'px';
            heart.style.top = (rect.top + rect.height/2 + (Math.random() * 300 - 150)) + 'px';
            
            // Random size for more variety
            const size = 20 + Math.random() * 30;
            heart.style.fontSize = size + 'px';
            
            // Random animation duration and delay
            heart.style.animationDuration = (1 + Math.random()) + 's';
            heart.style.animationDelay = (Math.random() * 0.5) + 's';
            
            // Random color variations - kawaii pastel colors
            const colors = ['#ff99cc', '#ffcccc', '#cc99ff', '#99ccff', '#ccffcc'];
            heart.style.color = colors[Math.floor(Math.random() * colors.length)];
            
            document.body.appendChild(heart);
            
            // Remove heart from DOM after animation completes
            setTimeout(() => {
                heart.remove();
            }, 2500);
        }, i * 40); // Stagger the creation of hearts
    }
}

// Create sparkles
function createSparkles(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            // Random position on the screen
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            
            // Random size
            const size = 3 + Math.random() * 8;
            sparkle.style.width = size + 'px';
            sparkle.style.height = size + 'px';
            
            // Random animation duration
            sparkle.style.animationDuration = (1 + Math.random() * 2) + 's';
            
            // Random pastel colors
            const colors = [
                'rgba(255, 204, 255, 0.9)', // Pastel pink
                'rgba(204, 204, 255, 0.9)', // Pastel purple
                'rgba(204, 255, 255, 0.9)', // Pastel cyan
                'rgba(255, 255, 204, 0.9)', // Pastel yellow
                'rgba(255, 204, 204, 0.9)'  // Pastel salmon
            ];
            sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.boxShadow = `0 0 10px 2px ${sparkle.style.backgroundColor}`;
            
            document.body.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }, i * 100);
    }
}

// Animate bubbles
function animateBubbles() {
    const bubbles = document.querySelectorAll('.bubble');
    
    bubbles.forEach(bubble => {
        // Set random starting positions
        const startDelay = Math.random() * 15;
        bubble.style.animationDelay = startDelay + 's';
        
        // Set random animation duration
        const duration = 10 + Math.random() * 20;
        bubble.style.animationDuration = duration + 's';
    });
    
    // Create new bubbles periodically
    setInterval(() => {
        createNewBubble();
    }, 3000);
}

// Create a new bubble
function createNewBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Random size
    const size = 15 + Math.random() * 30;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    
    // Random horizontal position
    bubble.style.left = (Math.random() * 90) + '%';
    
    // Random animation duration
    const duration = 10 + Math.random() * 20;
    bubble.style.animationDuration = duration + 's';
    
    document.body.appendChild(bubble);
    
    // Remove bubble after animation completes
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Create love message
function createLoveMessage() {
    // Clear any existing messages first
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = '';
    
    const messages = [
        'I love you too! ❤',
        'You made my day! ❤',
        'Forever yours! ❤',
        'My heart is yours! ❤',
        'You are amazing! ❤'
    ];
    
    const message = document.createElement('div');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.className = 'kawaii-message';
    
    // Add to container instead of directly to body
    messageContainer.appendChild(message);
    
    // Fade in with a slight delay
    setTimeout(() => {
        message.classList.add('show');
    }, 100);
    
    // Remove after a few seconds
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            messageContainer.innerHTML = '';
        }, 500);
    }, 3000);
}