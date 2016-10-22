import React from 'react';

import FeatureContainer from 'containers/feature/List'

import _ from './WelcomeView.sass';

const SESSION_MOCK = [
  {
    title: "CSS Feature",
    list: [
      { feature: "SASS LOADER", description: "Carrega tanto arquivos SASS quanto SCSS" },
      { feature: "CSS", description: "Carrega arquivos normais de CSS" },
      { feature: "CSS MODULE", description: "Cria hashs unicos para eflitar conflito entre as mesmas"},
      { feature: "POSTCSS", description: "Adiciona prefixos para outros navegadores" }
    ]
  },
  {
    title: "JS Features",
    list: [
      {feature: "Babel", description: "Podendo converter a mais nova especificação do JS para antiga"},
      {feature: "Redux", description: "Ecossistema baseado em Redux"},
      {feature: "React", description: "Utilizando React para criação de WebComponents"},
      {feature: "React-Router", description: "Rotas controladas pelo React-Router"}
    ]
  },
  {
    title: "DevOps Features",
    list: [
      {feature: "Docker", description: "Dockefile para subir a aplicação"},
      {feature: "Configuration Template", description: "Arquivo de configuração baseado em variaveis de ambiente para maior segurança"},
      {feature: "DO/AWS Upload", description: "Script de deploy pelo docker-machine para DO e AWS"},
      {feature: "S3 Integration", description: "Deploy de estaticos para o S3"}
    ]
  }
]

export const WelcomeView = () => (
  <div>
    <div className={_.header}>
      <img src="http://i.imgur.com/iqyCvDP.png" className={_.logo}/>
    </div>
    <section>
      <FeatureContainer sessions={SESSION_MOCK} />
    </section>
  </div>
);

export default WelcomeView;
