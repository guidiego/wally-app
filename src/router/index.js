import Home from './Home'

export const createRoutes = (store) => ({
  path        : '/' ,
  indexRoute  : Home,
  childRoutes : []
})

export default createRoutes
