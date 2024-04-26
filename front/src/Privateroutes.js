import { Navigate, Outlet } from 'react-router-dom'
function Privateroutes(Auth) {
    const Authn=Auth.Auth
    const local=window.localStorage.getItem('user')
    let auth = {'token':false}
   if(local!=='null'){
    console.log('gdfg',local)
           auth = {'token':true}
    }else{
          auth = {'token':false}
    }
    return ( 
        auth.token ? <Outlet/> : <Navigate to='/'/>
     );
}

export default Privateroutes;