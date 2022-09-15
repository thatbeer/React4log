import { Routes , Route , Outlet} from 'react-router-dom'


import SignInForm from './component/sign-in-form/sign-in-form.component';
import Home from './route/navigation/home/home.component';
import Navigation from './route/navigation/navigation.route';
import TestButton from './component/TestButton/testbutton.component';

const Shop = () => {
  return <h1>I am the Nav linkbar</h1>;
};


const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Navigation/>} >
          <Route index element={<Home />}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='signin' element={<SignInForm/>}/>
          <Route path="testbutton" element={<TestButton/>}/>
        </Route>
      </Routes>
  );
}

export default App;
