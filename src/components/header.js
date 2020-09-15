import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg">
            <span><img src="https://img.icons8.com/nolan/40/chat.png" alt="WebChat Icon"/> <a className="navbar-brand" href="">WebChat</a></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <img alt="menuIcon" src="https://img.icons8.com/nolan/40/menu.png"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" id="logout" href="#"><img src="https://img.icons8.com/nolan/30/logout-rounded-up.png" alt="Logout Icon"/> Leave</a>
                </li>
                </ul>
            </div>
            </nav>
        );
    }
}

export default Header
