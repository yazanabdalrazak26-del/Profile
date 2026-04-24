
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import SkillsSection from './SkillsSection'

function AboutAndConatct() {
  return (
    <section className='bg-black w-screen h-screen flex flex-col justify-between text-white mt-10 p-5'>
        <AboutSection/>
        <SkillsSection/>
        <ContactSection/>
    </section>
  )
}

export default AboutAndConatct