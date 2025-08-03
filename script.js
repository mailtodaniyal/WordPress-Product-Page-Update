        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Video Play Button
        const playButton = document.querySelector('.play-button');
        const video = document.querySelector('video');
        
        playButton.addEventListener('click', function() {
            video.play();
            this.style.display = 'none';
            video.controls = true;
        });
        
        // Add to Cart Buttons
        document.querySelectorAll('.add-to-cart .btn').forEach(button => {
            button.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'ADDED TO CART!';
                this.style.backgroundColor = '#4CAF50';
                
                // Create plus one animation
                const plusOne = document.createElement('span');
                plusOne.textContent = '+1';
                plusOne.style.position = 'absolute';
                plusOne.style.color = '#4CAF50';
                plusOne.style.fontWeight = 'bold';
                plusOne.style.fontSize = '1.2rem';
                plusOne.style.animation = 'fadeInUp 0.8s ease-out forwards';
                this.appendChild(plusOne);
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.backgroundColor = 'var(--accent)';
                    plusOne.remove();
                }, 2000);
            });
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animation on scroll
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.product-card, .section-title');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if(elementPosition < screenPosition) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Set initial state
        window.addEventListener('load', function() {
            document.querySelectorAll('.product-card, .section-title').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';
                el.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
            });
            
            animateOnScroll();
        });
        
        window.addEventListener('scroll', animateOnScroll);
