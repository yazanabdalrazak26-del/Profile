
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const toggleLanguage = () => {
        const newLang = currentLanguage === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.lang = newLang;
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 cursor-pointer bg-dark-40 hover:bg-gray-500 text-white px-3 py-2 rounded-lg transition fixed bottom-3 left-2"
        >
            <FontAwesomeIcon icon={faGlobe} />
            <span>{currentLanguage === 'en' ? 'عربي' : 'English'}</span>
        </button>
    );
}

export default LanguageSwitcher;