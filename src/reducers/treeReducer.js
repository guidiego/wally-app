import { List, Map } from 'immutable'

const open = (state, { indexToOpen }) => {
  if (indexToClose == state.get('opened')) return state;

  let nextState = state.withMutations(function (ctx) {
    ctx.items[ctx.opened].hide = true;
    ctx.items[indexToOpen].hide = false;

    ctx.opened = indexToOpen;
    return ctx;
  })

  return nextState
}

const initialState = new Map({
  opened: 0,
  items: new List()
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
