import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="pie">
      <article>
        <a href="https://www.instagram.com/elianagarciapasteleria/" target="_blank"> 
          <span>
            <InstagramIcon />
          </span>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=59894652429&text&type=phone_number&app_absent=0" target="_blank">
          <span>
            <WhatsAppIcon />
          </span>
        </a>
      </article>
    <span>CopyRight© Made by Evelyn Coronel</span> 

      <article>
        <a href="https://github.com/EveCoronel" target="_blank">
          <span>
            <GitHubIcon />
          </span>
        </a>
      </article>
    </div>
  );
}
