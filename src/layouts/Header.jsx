import React from 'react';
import styles from './Header.module.css';
import Cardheader from './Cardheader';


function Header() {
    return (
        <div className='head-container'>
        <div className="container">
            <div className="row">
               <div className="col-md-8">
                    <div className={styles.header}>
                <img className={styles.headerLogo} src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="Bootstarp_logo" />
                 <h4>Start Bootsrap</h4>
                 <ul className={styles.lists}>
                    <li>Themes&nbsp;&gt;</li>
                    <li>Templates&nbsp;&gt;</li>
                    <li>Bundles&nbsp;&gt;</li>
                    <li>Forms</li>
                    <li>Resources&nbsp;&gt;</li>
                </ul>
            </div>
            </div>
            <div className="col-md-4">
                <div className={styles.blog}>
            <h5 >Blog</h5>
            <button className={styles.btnlogIn}>Log In</button>
            </div>
            </div>
            </div>
        <Cardheader />
        
        </div>
        </div>
    );
}

export default Header;