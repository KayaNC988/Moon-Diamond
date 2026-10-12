import { useState } from 'react'
import { AuthContext } from './authContextDefinition'

const getSavedSession = () => {
  try {
    const savedSession = sessionStorage.getItem('moonDiamondSession')

    if (!savedSession) return null

    const session = JSON.parse(savedSession)
    const payload = JSON.parse(atob(session.token.split('.')[1]))

    if (!session.user || !payload.exp || payload.exp * 1000 <= Date.now()) {
      sessionStorage.removeItem('moonDiamondSession')
      return null
    }

    return session
  } catch {
    sessionStorage.removeItem('moonDiamondSession')
    return null
  }
}

export function AuthProvider({ children }) {
 const [session, setSession] = useState(getSavedSession)

 const user = session?.user || null
 const token = session?.token || null

  const signIn = (userData, jwtToken) => {
    const newSession = { user: userData, token: jwtToken }
    
    sessionStorage.setItem('moonDiamondSession', JSON.stringify(newSession))
    setSession(newSession)
  }

    const signOut = () => {
    sessionStorage.removeItem('moonDiamondSession')
    setSession(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(user && token),
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

