import './CriterSmartphone.css';

import vect_botones from '../../assets/vectores/CEL_BOTONES.svg'
import vect_home from '../../assets/vectores/CEL_HOME.svg'

function CriterSmartphone() {
    return (
        <div id="smartphone-border">
            <div id="smartphone-container">
                <div id="smartphone-header">
                    Seguidores: <span className="followers">950</span>
                    <img src={vect_botones} className="header_icons" />
                    <img src={vect_home} className="header_home" />
                </div>
                <div id="smartphone-content">
                    {/*<div id="portada">
                        <p className="portada_big">Identifica la emoción</p>
                        <p className="portada_small">¡Lo logramos!<p>1200</p>Seguidores</p>
                    </div>*/}
                    <div id="escenario">
                        <div id="contact_card">
                            <div id="contact_icon">PB</div>
                            <div id="contact_info">
                                <h2>Paola Buenaventura</h2>
                                15 de Abril a las 13:03
                            </div>
                        </div>
                        <div id="escenario_message">
                            <h1>¡Hola Luisa y Yeiner!</h1>
                            <p>Vivo con mis abuelos en la finca y desde que empezó todo esto del COVID-19 ellos no me dejan salir muy seguido. Siento que no quieren que me vea con mis amigos.</p>
                        </div>
                        <div id="escenario_expresion">
                            <div className="expression_option">
                                <div className="option_button">A</div>
                                <div className="option_label">Sentimiento.</div>
                            </div>
                            <div className="expression_option">
                                <div className="option_button">B</div>
                                <div className="option_label">Pensamiento u opinión.</div>
                            </div>
                            <div className="expression_option">
                                <div className="option_button">C</div>
                                <div className="option_label">Descripción de lo que cree ser.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CriterSmartphone;
