
export const myThunk = state=>next => action=>
{
    if(typeof action   == 'function')
    {
        action(state);
    }else
    {
        next(); 
    }
}