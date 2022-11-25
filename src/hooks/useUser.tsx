import { useLocalStorage } from 'usehooks-ts'
import UserType from '../types/UserType'


function useUser(){

  const [token, setToken] = useLocalStorage<UserType | null>('user-data', {
    id: '',
    name: '', 
    email: '',
  })

  const handleDeleteToken = () => {
    setToken(null);
    localStorage.removeItem('user-data')
  }
  return {
    token,
    handleDeleteToken
  }
}

export default useUser