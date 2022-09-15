
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import './navigation.styles.css'

const Navigation = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
              <CrwnLogo className="logo" />
               LOGO
            </Link>
            <div className="nav-link-container">
                <Link className="nav-link" to='/testbutton'>
                    Click
                </Link> 
                <Link className="nav-link" to='/signin'>
                    SignIn
                </Link>  
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
};

export default Navigation;