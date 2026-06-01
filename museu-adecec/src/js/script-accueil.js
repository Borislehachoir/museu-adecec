const bigPicRef = useRef(null);
const hewwoTextRef = useRef(null);
const hewwoPictureRef = useRef(null);

const images = [
    { id: 1, url: image1, alt: 'Façade du musée ADECEC' },
    { id: 2, url: image2, alt: 'Vue intérieure du musée' },
    { id: 3, url: image3, alt: 'Visuel ADECEC' },
    { id: 4, url: image4, alt: 'Extérieur du musée' },
];
const cards = [
    {
        title: 'Découvrir les étages',
        text: 'Une première entrée pour parcourir les espaces du musée, notamment par le biais d\'une visite virtuelle.',
        to: '/les-salles',
    },
    {
        title: 'Découvrir la partie archéologique',
        text: 'Explorer les collections et contenus liés à l’archéologie ( il y a aussi une section sur les cailloux).',
        to: '/archeologie',
    },
    {
        title: 'Préparez votre visite !',
        text: 'Horaires, accès et informations utiles avant de venir.',
        to: '/infos-pratiques',
    },
    {
        title: 'Découvrir le lieu',
        text: 'En apprendre plus sur le musée, son histoire et ses missions.',
        to: '/a-propos',
    },
];

// Animation pour big-pic au scroll
useEffect(() => {
    const bigPic = bigPicRef.current;
    const hewwoText = hewwoTextRef.current;
    const hewwoPicture = hewwoPictureRef.current;

    if (!bigPic || !hewwoText || !hewwoPicture) {
        return undefined;
    }

    // Appliquer les styles initiaux
    hewwoPicture.style.minHeight = '100vh';
    hewwoText.classList.add('hewwo-text-animated');

    const handleScroll = () => {
        const rect = bigPic.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcul du pourcentage de visibilité
        // Commence quand big-pic sort de l'écran (top < 0)
        // Progress va de 0 (au chargement) à 1 (quand big-pic est complètement en haut)
        const distanceFromTop = rect.top;

        // Si l'élément est en bas ou au milieu de l'écran, progress = 0
        // Si l'élément est complètement en haut, progress = 1
        let scrollProgress = 0;
        if (distanceFromTop < 0) {
            // L'élément a scrollé vers le haut
            scrollProgress = Math.abs(distanceFromTop) / (bigPic.offsetHeight - windowHeight / 2);
        }

        const clampedProgress = Math.min(1, Math.max(0, scrollProgress));

        // Réduction progressive de la hauteur de 100vh à 70vh
        const minHeight = 100 - clampedProgress * 30; // 100vh -> 70vh
        hewwoPicture.style.minHeight = `${minHeight}vh`;

        // Réduction progressive de l'animation flottante
        if (clampedProgress < 1) {
            const animationDuration = 15 - clampedProgress * 5;
            hewwoText.style.animation = `floating ${animationDuration}s ease-in-out infinite`;
        } else {
            hewwoText.classList.remove('hewwo-text-animated');
        }

        // Augmentation progressive de la taille du texte de 5-6px
        const fontSizeIncrease = 5 * (1 - clampedProgress);
        hewwoText.style.fontSize = `clamp(2rem, calc(5vw + ${fontSizeIncrease}px), calc(4rem + ${fontSizeIncrease}px))`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);