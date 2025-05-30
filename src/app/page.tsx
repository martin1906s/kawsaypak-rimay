import Navigation from "./nav/navigation";
import Logotipo from "../../components/isotype";

export default function Home() {
  return (
    <header className="header">
      <div className="nav">
        <Navigation />
      </div>
      <div className="titles-isotipo">
        <div className="titles">
          <h1 className="title">KAWSAYPAK RIMAY</h1>
          <h6 className="slogan"><i className="slogan-i">- Yachaykunata karashpa llaktakunata mushukyachishpa -</i></h6>
        </div>
        <div className="logo">
          <Logotipo />
        </div>
      </div>
    </header>
  );
}
