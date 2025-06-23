import { navDuolingo } from "../../../../../data/navigationDuolingo"
import Image from "next/image"
export default function NavigationDuolingo() {
    return (
        <nav>
            <div className="contentLvl">
                {navDuolingo.map((item) => (
                    <div key={item.lvl}>
                        <a href={item.navLvl} className="atribContentLvl" >
                            <div className="LvlNum">
                                <h4>Lvl. {item.lvl}</h4>
                            </div>
                            <hr />
                            <div className="LvlImg">
                                <Image src={item.imgURL} alt="imagen del nivel" width={1000} height={100} />
                            </div>
                            <hr />
                            <div className="lvlTitle-des">
                                <h3>{item.titleLvl}</h3>
                                <p>{item.descripcionLvl}</p>
                            </div>
                            <hr />
                            <div className="LvlButton">
                                <button>IR A LVL. {item.lvl}</button>
                            </div>
                        </a>
                        <hr />
                    </div>
                ))}
            </div>
        </nav>
    )
}