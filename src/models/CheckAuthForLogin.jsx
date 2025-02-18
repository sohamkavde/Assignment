import React, { useEffect, useState } from 'react'
import { listenToAuthChanges } from '../firebase';

function useCheckAuthForLogin() {
    const [user, setUser] = useState(null);
    
      useEffect(() => {
        const unsubscribe = listenToAuthChanges((user) => {
          setUser(user);
        });
    
        // Clean up subscription when component unmounts
        return () => unsubscribe();
      }, []);
  return {user};
  
}

export default useCheckAuthForLogin;