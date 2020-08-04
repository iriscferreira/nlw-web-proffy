import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/35146076?s=400&u=c2d413a4f95fce616482b02da6cdb7cdfd4a909c&v=4" alt="Iris Ferreira"/>
                <div>
                    <strong>Iris Ferreira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta em cloud computing.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;