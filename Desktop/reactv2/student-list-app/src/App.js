import React from 'react';
import { StudentProvider } from './comps/StudentContext';
import StudentForm from './comps/StudenForm';
import StudentList from './comps/StudentList';
const App = () => {
  return (
    <StudentProvider>
      <div>
        <h1>Student List</h1>
        <StudentForm />
        <StudentList />
      </div>
    </StudentProvider>
  );
};

export default App;