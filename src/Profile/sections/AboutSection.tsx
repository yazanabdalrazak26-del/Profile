
import { faLaptop, faPaintBrush, faPlug, faRocket, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useTranslation } from "react-i18next";
function AboutSection() {

  const {t} = useTranslation()


  const moreInfo = [
    {id:1 , title:t("about.items.item1.title") , icon:faLaptop , des:t("about.items.item1.description"), style: 'bg-linear-to-r from-blue-900/30 to-transparent rounded-lg p-4 border-l-4 border-blue-500 hover:bg-blue-900/50 transition'},
    {id:2 , title:t("about.items.item2.title") , icon:faPaintBrush , des: t("about.items.item2.description"), style: "bg-gradient-to-r from-purple-900/30 to-transparent rounded-lg p-4 border-l-4 border-purple-500 hover:bg-purple-900/50 transition"},
    {id:3 , title:t("about.items.item3.title") , icon: faPlug , des:t("about.items.item3.description"), style: "bg-gradient-to-r from-green-900/30 to-transparent rounded-lg p-4 border-l-4 border-green-500 hover:bg-green-900/50 transition" },
    {id:4 , title:t("about.items.item4.title") , icon: faRocket , des:t("about.items.item4.description"), style: "bg-gradient-to-r from-yellow-900/30 to-transparent rounded-lg p-4 border-l-4 border-yellow-500 hover:bg-yellow-900/50 transition" }
  ]


  return (
    <section className="mb-12 h-full w-screen p-3">
      <h2 className="flex items-center font-bold text-white mb-4 border-b border-dark-20 pb-3 sm:text-3xl lg:text-4xl">
        <FontAwesomeIcon icon={faUser} className="text-3xl text-blue-600 pr-1"/>{t("about.title")}
      </h2>

      <div className="w-full flex items-center justify-center text-center pb-20">
        <p className="leading-relaxed text-white  mt-10 w-full sm:w-3/4 lg:w-1/2 lg:text-xl sm:text-base">
          {t("about.description")}
        </p>
      </div>

      <div className="text-white mb-10 lg:mb-30 md:mb-20">
        <h2 className="font-bold text-white mb-4 border-b border-dark-20 pb-3 sm:text-3xl lg:text-4xl">{t("about.whatIDo")}</h2>

        <ul className="h-full grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 pl-4 mt-5 lg:m-10 md:m-10 ">

          {moreInfo?.map(item => (
            <li key={item.id} className={item.style}>
              <h4 className="text-lg lg:text-xl md:text-xl font-semibold"><FontAwesomeIcon className="pr-2" icon={item.icon}/>{item.title}</h4>
              <p className="pt-1">{item.des}</p>
            </li>
          ))}

        </ul>

      </div>

    </section>
  );
}

export default AboutSection;