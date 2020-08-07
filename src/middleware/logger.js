export const logger = (store)=>(next)=>(action)=>{
    console.group()
    console.log('current state : ', store.getState())
    const result = next(action)
    console.log('dispatched action : ', action.type)
    console.log('next state : ', store.getState())
    console.groupEnd()

    return next(result)
}