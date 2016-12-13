import { List, Map } from 'immutable'

const open = (state, { indexToOpen }) => {
  if (indexToOpen == state.get('opened')) return state;

  return state.set('opened', indexToOpen)
}

const initialState = new Map({
  opened: 0,
  items: new List([
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
      hide: true,
      list: [
        {feature: "Babel", description: "Podendo converter a mais nova especificação do JS para antiga"},
        {feature: "Redux", description: "Ecossistema baseado em Redux"},
        {feature: "React", description: "Utilizando React para criação de WebComponents"},
        {feature: "React-Router", description: "Rotas controladas pelo React-Router"}
      ]
    },
    {
      title: "DevOps Features",
      hide: true,
      list: [
        {feature: "Docker", description: "Dockefile para subir a aplicação"},
        {feature: "Configuration Template", description: "Arquivo de configuração baseado em variaveis de ambiente para maior segurança"},
        {feature: "DO/AWS Upload", description: "Script de deploy pelo docker-machine para DO e AWS"},
        {feature: "S3 Integration", description: "Deploy de estaticos para o S3"}
      ]
    }
  ])
})

export const treeReducer = (state = initialState , action) => {
  switch(action.type) {
    case 'OPEN':
      return open(state, action)
    default:
      return state
  }
}

export default treeReducer
