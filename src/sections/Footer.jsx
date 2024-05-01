import { copyrightSign, love, tailwind } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer  logo" width={120} height={46} />
          </a>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div key={icon.alt} className="flex justify-center items-center w-8 h-8 bg-white rounded-full">
                <a href={icon.socialURL} target="_blank">
                  <img src={icon.src} alt={icon.alt} width={20} height={20} />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-noemal font-medium mb-6">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                    <a href={link.link} target="_blank">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer max-sm:mb-4">
          <img src={copyrightSign} alt="copy right sign" width={20} height={20} className="rounded-full m-0" />
          <span>Copyright. All rights reserved.</span>
        </div>
        <span className="text-white font-montserrat">Made with&nbsp;
          <img src={love} alt="love sign" width={20} height={20} className="m-0 inline-block" /> using&nbsp;
          <img src={tailwind} alt="tailwind sign" width={20} height={20} className="m-0 inline-block" />
        </span>
      </div>
    </footer>
  )
}

export default Footer