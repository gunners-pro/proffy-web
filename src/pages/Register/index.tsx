import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import landingImg from '../../assets/images/landing.svg';

const Register: React.FC = () => {
  return (
    <div id="page-register">
      <div className="content-brand-register">
        <img className="logo" src={logoImg} alt="proffy" />
        <p>
          Sua plataforma de
          <br /> estudos online
        </p>
      </div>

      <div id="header">
        <Link to="/">
          <img src={backIcon} alt="Icon voltar" />
        </Link>
      </div>

      <div className="content-form-register">
        <div id="header-web">
          <Link to="/">
            <img src={backIcon} alt="Icon voltar" />
          </Link>
        </div>
        <div className="title-form-register">
          <h1>Cadastro</h1>
          <h4>
            Preencha os dados abaixo
            <br /> para começar
          </h4>
        </div>

        <form className="form-register">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Concluir cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
