import { Routes , Route } from 'react-router-dom'


import SignInForm from './component/sign-in-form/sign-in-form.component';
import Home from './route/navigation/home/home.component';
import Navigation from './route/navigation/navigation.route';
import TestButton from './component/TestButton/testbutton.component';
import LoginCom from './component/login/login.component';
import LoginForm from './component/login/loginform.component';
import SignIn from './route/signIn/signIn.component';


const Shop = () => {
  return <h1>I am the Nav linkbar</h1>;
};


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='signin' element={<SignIn/>}/>
          <Route path="testbutton" element={<TestButton/>}/>
          <Route path="testtest" element={<LoginCom/>}/>
          <Route path="testsignin" element={<SignIn/>}/>
        </Route>
      </Routes>
  );
}

export default App;
