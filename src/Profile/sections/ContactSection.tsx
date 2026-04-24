import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ContantSection() {
  return (
    <section>
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-dark-20 pb-2">
            Get in Touch
        </h2>
        <div className="bg-dark-40 rounded-lg p-6 text-center w-full h-full flex justify-center items-center flex-col">
            <p className=" mb-4">
                I'm open to opportunities and collaboration.
            </p>
            <div className="flex justify-center gap-6">
                <a 
                    href="https://github.com/yazanabdalrazak26-del"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition text-2xl"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a 
                    href="https://www.linkedin.com/in/yazan-abd-alrazak-330199373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition text-2xl"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                    href="https://www.facebook.com/share/1BF6VkfGzv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition text-2xl"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
            </div>
        </div>
    </section>
  )
}

export default ContantSection