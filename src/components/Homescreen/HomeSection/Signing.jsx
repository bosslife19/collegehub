import  { useState } from 'react';
import Login from '../../Auth/Login&Signup/Login';
import SignUp from '../../Auth/Login&Signup/SignUp';
 
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
