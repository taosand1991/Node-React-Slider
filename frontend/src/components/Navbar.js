import React from 'react';

function Navbar(props) {
    return (
        <div>
            <header>
                <div className='logo'>
                <img src='https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg' alt=''/>
                </div>
                <ul className='left-nav'>
                    <li>Product</li>
                    <li>What's New</li>
                    <li>Our policy</li>
                </ul>
                <ul className='right-nav'>
                    <li>Messages</li>
                    <li>Contact</li>
                    <li>Features</li>
                </ul>
                <div className='legacy'>
                    <h5>Legacy Graphics</h5>
                </div>
            </header>
        </div>
    );
}

export default Navbar;