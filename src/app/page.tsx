import Navigation from "./nav/navigation";
import Logotipo from "../../components/isotype";
import Image from "next/image";
import { socialLinks, Social } from "../../data/socialLinks";

export default function Home() {
  return (
    <header className="header">
      <div className="nav">
        <Navigation />
      </div>
      <div className="titles-isotipo">
        <div className="titles">
          <div className="text-information">
            <h1 className="title">KAWSAYPAK RIMAY</h1>
            <h6 className="slogan"><i className="slogan-i">- Yachaykunata karashpa llaktakunata mushukyachishpa -</i></h6>
            <p>Kawsaypak Rimay, 'Voces para la Vida', nace como un puente entre el saber ancestral y la sostenibilidad moderna, donde juegos interactivos y recursos didácticos enseñan a las comunidades rurales de Imantag (Ecuador) a cuidar la Pacha Mama, gestionar residuos, aprovechar la energía solar y revalorizar sus raíces quechuas, todo en un espacio digital inclusivo que llega a niños, jóvenes y adultos por igual.</p>
          </div>
          <div className="social-img">
            {socialLinks.map((social: Social) => (
              <Image
                key={social.id}
                src={social.url}
                alt={`logo ${social.name}`}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
        <div className="logo">
          <Logotipo />
        </div>
      </div>
    </header>
  );
}
