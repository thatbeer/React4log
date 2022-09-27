
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
import './navigation.styles.css'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
              <CrwnLogo className="logo" />
               LOGO
            </Link>
            <div>
            </div>
            <div className="nav-link-container">
                <Link className="nav-link" to='/testbutton'>
                    Click
                </Link> 
                <Link className="nav-link" to='/signin'>
                    SignIn
                </Link>  
                <Link className="nav-link" to='/testtest'>
                test 01
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
};

export default Navigation;