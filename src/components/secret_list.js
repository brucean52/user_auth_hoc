import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => (
    <div>
        <h2 className="align-center">Secret Listeners</h2>
        <ol>
            <li>Jason</li>
            <li>Helen</li>
            <li>Billy Bob</li>
        </ol>
    </div>
);

export default auth(SecretList);