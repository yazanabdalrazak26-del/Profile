import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslation } from "react-i18next"


function ContactSection() {

    const {t} = useTranslation()

    return (
        <section className="h-screen bg-black w-screen p-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-dark-20 pb-2">
                <FontAwesomeIcon icon={faEnvelope} className="pr-3 text-blue-500"/>{t('contact.title')}
            </h2>
            
            <div className="bg-dark-40 rounded-lg p-6 mr-4 mt-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-red-400 text-lg" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">{t('contact.email')}</p>
                        <a href="mailto:yazanabdalrazak26@gmail.com" className="text-white hover:text-blue-400">
                            yazanabdalrazak26@gmail.com
                        </a>
                    </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="text-green-400 text-lg" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">{t('contact.phone')}</p>
                        <a href="tel:+1234567890" className="text-white hover:text-blue-400">
                            +963 932437469
                        </a>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                        <FontAwesomeIcon icon={faLocationDot} className="text-red-400 text-lg" />
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">{t('contact.location')}</p>
                        <p className="text-white">{t('contact.country')}</p>
                    </div>
                </div>
                
                
                <div className="flex justify-center gap-6 pt-4 border-t border-gray-700">
                    <a 
                        href="https://github.com/yazanabdalrazak26-del"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/yazan-abd-alrazak-330199373"
                        target="_blank"
                        className="text-gray-400 hover:text-[#0077B5] transition text-2xl"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a 
                        href="https://www.facebook.com/share/1BF6VkfGzv/"
                        target="_blank"
                        className="text-gray-400 hover:text-[#1877F2] transition text-2xl"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
                
                
                <div className="text-center mt-6">
                    <a 
                        href="/Yazan_Abd_Alrazak.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
                    >
                        <FontAwesomeIcon icon={faDownload} />
                        {t('contact.cv')}
                    </a>
                </div>
            </div>
        </section>
    );
}
  


export default ContactSection