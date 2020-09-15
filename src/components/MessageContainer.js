import React from 'react';

class MessageContainer extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="main-msg-container">
                <div id="bottom"></div>
                </div>
                <div className="footer">
                    <form id="message-form">
                    <div className="input-group mb-3">
                        <input type="text" id="messageInput" autoComplete="off" className="form-control" placeholder="Start typing ...."></input>
                        
                        <div className="input-group-append">
                        <button href="#bottom" className="input-group-text btn btn-dark" type="submit">Send <img alt="sendIcon" src="https://img.icons8.com/nolan/30/filled-sent.png"/></button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default MessageContainer