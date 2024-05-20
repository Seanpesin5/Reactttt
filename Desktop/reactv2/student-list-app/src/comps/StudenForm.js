import React, { useState, useContext } from 'react';
import { StudentContext } from './StudentContext';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');
  const { addStudent } = useContext(StudentContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score !== '' && score >= 0 && score <= 100) {
      const newStudent = {
        name,
        score: Number(score),
        id: Date.now(),
      };
      addStudent(newStudent);
      setName('');
      setScore('');
    } else {
      alert("Please enter a valid score between 0 and 100");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        min="0"
        max="100"
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;