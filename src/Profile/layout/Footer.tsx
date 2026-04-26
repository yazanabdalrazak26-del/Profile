import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {


    const contact = [
        {id: 1 ,link:'https://github.com/yazanabdalrazak26-del' , icon: faGithub , style: 'text-white hover:text-gray-800 transition text-3xl '},
        {id: 2 ,link:'https://www.linkedin.com/in/yazan-abd-alrazak-330199373' , icon: faLinkedin , style: ' text-white hover:text-blue-600 transition text-3xl '},
        {id: 3 ,link:'https://www.facebook.com/share/1BF6VkfGzv/' , icon: faFacebook , style: 'text-white hover:text-blue-600 transition text-3xl '},
    ]



    return (
        <section className='mt-30'>
            <div className=" text-center text-white">
                <p className="mb-4 lg:text-md sm:text-base">
                    I'm open to opportunities and collaboration.
                </p>

                <div className="flex justify-center gap-4 sm:gap-6">

                    {contact?.map(item =>(
                        <a 
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={item.style}
                        >
                            <FontAwesomeIcon icon={item.icon} />
                        </a>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Footer;