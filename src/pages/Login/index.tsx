import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import landingImg from '../../assets/images/landing.svg';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <div className="content-brand">
        <img className="logo" src={logoImg} alt="proffy" />
        <p>Sua plataforma de estudos online</p>
      </div>
      <div className="content-form">
        <div className="title-form">
          <h4>Fazer login</h4>
          <Link to="/">Criar uma conta</Link>
        </div>
        <form className="form-login">
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <div className="form-footer">
            <div className="area-checkbox">
              <input type="checkbox" value="Lembra-me" id="lembrarme" />
              <label htmlFor="lembrarme">Lembrar-me</label>
            </div>
            <div>
              <Link to="/">Esqueci minha senha</Link>
            </div>
          </div>
          <button type="submit">Entrar</button>
        </form>

        <footer>
          <p>
            Não tem conta? <br />
            <Link to="/">cadastre-se</Link>
          </p>
          <p>
            É de graça <img src={purpleHeartIcon} alt="Purple heart icon" />
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
