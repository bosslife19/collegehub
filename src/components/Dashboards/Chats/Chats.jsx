import { useState } from 'react';
import Loader from '../../../alert/welcomLoading/loader'
import ChatPage from './ChatPage'

const Chats = () => {
      const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
    {isLoading ? (
       <Loader onComplete={() => setIsLoading(false)} />
     ) : (
    <div className='  '>
      <ChatPage/>
    </div>
     )}
     </>
  )
}

export default Chats
