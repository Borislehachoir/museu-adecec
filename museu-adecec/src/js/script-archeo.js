// Animation pour l'image hero (slide down)
useEffect(() => {
    const currentImage = heroImageRef.current;

    if (!currentImage) {
        return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            currentImage.classList.add('is-visible');
            observer.disconnect();
        }
    });

    observer.observe(currentImage);

    return () => {
        observer.disconnect();
    };
}, []);

// Animation pour l'image missions (zoom lié au scroll)
useEffect(() => {
    const currentImage = missionImageRef.current;

    if (!currentImage) {
        return undefined;
    }

    const handleScroll = () => {
        const rect = currentImage.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcul du pourcentage de visibilité (0 à 1)
        // Commence quand l'image entre en bas de l'écran, termine quand elle est au milieu
        const imageCenter = rect.top + rect.height / 2;
        const startZoom = windowHeight; // Commence à zoomer quand on la voit
        const endZoom = windowHeight / 2; // Fin du zoom au milieu de l'écran

        let progress = (startZoom - imageCenter) / (startZoom - endZoom);
        progress = Math.max(0, Math.min(1, progress)); // Clamp entre 0 et 1

        // Scale de 0.1 à 1
        const scale = 0.1 + progress * 0.9;
        currentImage.style.transform = `scale(${scale})`;
        currentImage.style.opacity = progress > 0 ? 1 : 0;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

// Animation pour l'image histoire (slide in left)
useEffect(() => {
    const currentImage = histoireImageRef.current;

    if (!currentImage) {
        return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            currentImage.classList.add('slide-in-left');
            observer.disconnect();
        }
    });

    observer.observe(currentImage);

    return () => {
        observer.disconnect();
    };
}, []);
