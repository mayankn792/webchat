import React from 'react';

class Group extends React.Component {
    // rotate() {
    //     const icon = document.getElementById('toggle')
    //     icon.style.transform = 'rotate(359deg)';
    //     icon.style.transition = '300ms linear all';
    //     icon.style.transform = 'rotate(359deg)';
    // }
    render() {
        return (
            <div className="group">
                <div className="header text-center">
                    Group Members 
                    <img data-toggle="collapse" href="#membersId" alt="toggle" role="button" aria-expanded="false" aria-controls="#membersId" id="toggle" src="https://img.icons8.com/nolan/30/rotate-right--v1.png"/>  
                </div>
                <div className="collapse show" id="membersId">
                    
                </div>
                
            </div>
        );
    }
}

export default Group