import Navigation from "./nav/navigation";
import Logotipo from "../../components/isotype";

export default function Home() {
  return (
    <header className="header">
      <div className="isotipo">
        <Logotipo />
      </div>
      <div className="nav-titles">
        <Navigation />
        <h1 className="title">KAWSAYPAK RIMAY</h1>
        <h6 className="slogan"><i className="slogan-i">- Yachaykunata tinkuchispa, Ayllu llaqtakunata tikraspa -</i></h6>
      </div>
    </header>
  );
}
