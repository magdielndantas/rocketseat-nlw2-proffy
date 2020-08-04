import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://api.adorable.io/avatars/285/magdielndantas.png" alt="Magdiel Adorable Avatar"/>
            <div>
            <strong>Magdiel Dantas</strong>
            <span>Lorem Ipsum</span>
            </div>
        </header>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mauris eu dui commodo suscipit ut vel purus. Nunc varius condimentum erat id tempor.
            <br/><br/>
            Proin porta lacus vitae fermentum rutrum. In tellus lorem, varius in sollicitudin cursus, dapibus fermentum tellus. Donec vel sem nulla.
        </p>

        <footer>
            <p>
            Preço/Hora
            <strong>R$ 84,00</strong>
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