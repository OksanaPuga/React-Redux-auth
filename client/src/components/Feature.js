import React from 'react';
import requireAuth from './requireAuth';

class Feature extends React.Component {
    render() {
        return (
            <div>
                <br />
                <br />
                Hello! I'm a secret feature!
            </div>
        );
    }
}

export default requireAuth(Feature);