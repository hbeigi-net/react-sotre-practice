
export const myThunk = state=>next => action=>
{
    if(typeof action   == 'function')
    {
        (
            async ()=>
            {
                action(state); 
            }
        )()
        action(state);
    }else
    {
        next(); 
    }
}