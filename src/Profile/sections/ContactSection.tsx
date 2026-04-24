import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactSection() {
    return (
        <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 border-b border-dark-20 pb-2">
                Get in Touch
            </h2>
            <div className="bg-dark-40 rounded-lg p-6 text-center">
                <p className="mb-4 text-sm sm:text-base">
                    I'm open to opportunities and collaboration.
                </p>
                <div className="flex justify-center gap-4 sm:gap-6">
                    <a 
                        href="https://github.com/yazanabdalrazak26-del"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition text-xl sm:text-2xl"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/yazan-abd-alrazak-330199373"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition text-xl sm:text-2xl"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a 
                        href="https://www.facebook.com/share/1BF6VkfGzv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition text-xl sm:text-2xl"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;