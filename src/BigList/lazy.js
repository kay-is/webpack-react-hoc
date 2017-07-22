import lazify from 'lazify'

console.info('<LazyList> loaded from server!')

export default lazify(() => import(/* webpackChunkName: "BigListLazy" */ './index'))
