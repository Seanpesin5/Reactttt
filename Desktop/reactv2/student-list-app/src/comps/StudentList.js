import React, { useContext } from 'react';
import { StudentContext } from './StudentContext';

const StudentList = () => {
  const { students, removeStudent } = useContext(StudentContext);

  return (
    <div>
      
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.score}
            <button onClick={() => removeStudent(student.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;