import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    const storedStudents = localStorage.getItem('students');
    return storedStudents ? JSON.parse(storedStudents) : [];
  });

  useEffect(() => {
    console.log('Saving students to localStorage:', students);
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    console.log('Adding student:', student);
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  const removeStudent = (id) => {
    console.log('Removing student with id:', id);
    setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, removeStudent }}>
      {children}
    </StudentContext.Provider>
  );
};