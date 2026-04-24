import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

function AboutAndContact() {
    return (
        <section className='bg-black w-full min-h-screen flex flex-col justify-between text-white mt-10 p-4 sm:p-6 md:p-8'>
            <AboutSection />
            <SkillsSection />
            <ContactSection />
        </section>
    );
}

export default AboutAndContact;