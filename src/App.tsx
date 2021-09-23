import React from 'react';
import { TaskCard } from './components/taskCard';
import { Snackbar } from './components/global/snackbar';

const App: React.FC = () => {
  return (
    <>
      <TaskCard />
      <Snackbar />
    </>
  );
};

export default App;
