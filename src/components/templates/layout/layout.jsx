import React from 'react';
import './layout.scss';

const Layout = props => {
    const { children }= props;
    return ( 
        <div className="t-layout">
            <div className="t-layout-header">

            </div>
            <div className="t-layout-aside">

            </div>
            <div className="t-layout-container">
                {children}
            </div> 
        </div>    
    );
}
 
export default Layout;