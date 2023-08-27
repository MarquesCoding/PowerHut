import React from "react";
import Logo from '../../public/logo-white.png';
import {useNavigate} from "react-router-dom";

const Footer: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
  <div className="static bottom-0">
    <div className="absolute top-0 flex h-auto w-full flex-row items-center justify-center opacity-100">
      <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent to-white/30"></div>
      <div className="h-[1px] w-1/2 bg-gradient-to-l from-transparent to-white/30"></div>
    </div>
    <div className="overflow-hidden bg-dark-300 text-white flex flex-col lg:flex-row gap-8 px-8 w-screen h-auto py-12">
      <div className="flex flex-col gap-1 w-full lg:w-1/4">
        <img className="w-8" src={Logo} alt="PowerHut Logo"/>
        <p className="text-white text-sm">
          PowerHut LLC &copy; {new Date().getFullYear()}
          {" "}
          <span>
        </span>
        </p>
        {/*@ts-ignore*/}
        <a className="hover:opacity-100 opacity-50 text-xs duration-300" href={`https://github.com/MarquesCoding/PowerHut/commit/${__COMMIT_HASH__}`}>
          {/*@ts-ignore*/}
          Version - {__COMMIT_HASH__}
        </a>
      </div>
      <div className="lg:w-1/4 w-full">
        <p className="pb-2 border-b-2 border-green-400/80">Services</p>
        <div className="flex flex-col gap-2 mt-2">
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://billing.powerhut.pro/index.php?rp=/store/minecraft-server-hosting'>Minecraft Hosting</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://billing.powerhut.pro/index.php?rp=/store/discord-bot-hosting'>Discord Bot Hosting</a>
        </div>
      </div>
      <div className="lg:w-1/4 w-full">
        <p className="pb-2 border-b-2 border-green-400/80">Support</p>
        <div className="flex flex-col gap-2 mt-2">
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://powerhut.pro/faq'>FAQ</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://discord.powerhut.pro'>Discord</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://docs.powerhut.pro'>Knowledgebase</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://monitor.powerhut.pro'>Server Status</a>
        </div>
      </div>
      <div className="lg:w-1/4 w-full">
        <p className="pb-2 border-b-2 border-green-400/80">Clients</p>
        <div className="flex flex-col gap-2 mt-2">
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://billing.powerhut.pro/register.php'>Register</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://billing.powerhut.pro/login.php'>Login</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://dash.powerhut.pro'>Game Panel</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://billing.powerhut.pro/contact.php'>Submit a ticket</a>
          <a className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" href='https://billing.powerhut.pro/contact.php'>Contact us</a>
        </div>
      </div>
      <div className="lg:w-1/4 w-full">
        <p className="pb-2 border-b-2 border-green-400/80">Legal</p>
        <div className="flex flex-col gap-2 mt-2">
          <p className="hover:opacity-50 hover:text-green-400 duration-300 w-fit cursor-pointer" onClick={() => navigate('/terms')}>Terms of Service</p>
          <p className="hover:opacity-50 hover:text-green-400 duration-300 w-fit cursor-pointer" onClick={() => navigate('/privacy')}>Privacy Policy</p>
          <p className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" >Fair Usage Policy</p>
          <p className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" >Minecraft EULA</p>
          <p className="hover:opacity-50 hover:text-green-400 duration-300 w-fit" >Abuse</p>
        </div>
      </div>
    </div>
  </div>

  )
}
export default Footer;
