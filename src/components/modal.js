import React from 'react';

class Model extends React.Component {
    showContainer() {
        const container = document.getElementById('main-container');
        container.style.opacity = '1';
        const model = document.getElementById('myModel');
        model.classList.add('d-none');
        model.classList.remove('d-block');
    }
    render() {
        return (
            <div>
                <div className="modal fade show d-block" id="myModel" tabIndex="-1" role="dialog" data-backdrop="static" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"><img alt="WebChat Logo" src="https://img.icons8.com/nolan/40/chat.png"/> WebChat</h5>
                        </div>
                        <div className="modal-body">
                            <form id="roomForm">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" autoComplete="off" id="emailTextBox" className="form-control"></input>
                                </div>

                                <div className="form-group">
                                    <label>RoomID</label>
                                    <input type="text" autoComplete="off" id="roomIdTextBox" className="form-control" ></input>
                                </div>

                                <div className="btn-group" role="group">
                                    <button className="input-group-text btn btn-dark" onClick={this.showContainer} type="submit">Join Room</button>
                                </div>
                            </form>
                            
                        </div>
                    
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Model;