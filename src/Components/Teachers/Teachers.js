import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {

    // fetching data from teachers 
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./Teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, []);
    return (
        <div>
            <h3 className="text-center m-3">Our Honourable Teachers</h3>
            {/* loop to show teachers  */}
            <Row xs={1} md={3} className="g-4 mx-5">
                {
                    teachers.map(teacher => <Teacher key={teacher.id} teacher={teacher}></Teacher>)
                }
            </Row>
        </div>
    );
};

export default Teachers;