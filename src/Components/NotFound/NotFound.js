import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    const goBackHome = () => {
        history.push("/");
    }
    return (
        <div>
            <img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" height="500px" className="mt-2 mx-auto d-flex align-items-center" alt="" />
            <Button onClick={goBackHome} variant="warning" className="mx-auto d-flex align-items-center mt-4">Go Back to Home</Button>
        </div>
    );
};

export default NotFound;