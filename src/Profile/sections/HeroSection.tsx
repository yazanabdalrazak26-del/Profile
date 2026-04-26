import { useTranslation } from "react-i18next";

function HeroSection() {

  const {t} = useTranslation()

  return (
    <section className='flex flex-col p-5 text-white relative min-h-[40vh] justify-center'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-7 px-4'>
        {t('hero.title')}
      </h1>
      <p className='text-center text-gray-400 mt-7 px-4 text-sm sm:text-base'>
        {t('hero.subtitle')}
      </p>
    </section>
  );
}

export default HeroSection;