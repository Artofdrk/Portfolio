 // Smooth Scroll to Top
        document.querySelector('.scroll-top').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Setup generalized modal logic for multiple pop-ups
        function setupModal(openBtnId, modalId, closeBtnId) {
            const openBtn = document.getElementById(openBtnId);
            const modal = document.getElementById(modalId);
            const closeBtn = document.getElementById(closeBtnId);

            openBtn.addEventListener('click', () => {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; 
            });

            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.remove('active');
                document.body.style.overflow = 'auto'; 
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }

        // Initialize Modals
        setupModal('open-contact-modal', 'contact-modal', 'close-modal');
        setupModal('open-creator-modal', 'creator-modal', 'close-creator-modal');

        // Picture Album Slider Logic
        const track = document.getElementById('album-track');
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        let currentSlide = 0;
        const totalSlides = track.children.length;

        function updateSlide() {
            track.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide();
        });

        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide();
        });