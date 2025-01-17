import  { useState } from 'react';
import Login from '../../Login&Signup/Login';
import SignUp from '../../Login&Signup/SignUp';
 
const Signing = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <SignUp toggleForm={toggleForm} />
      )}
    </div>
  );
}

 
export default Signing;
