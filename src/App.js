import React from 'react'
import ClassCounter from './componets/ClassCounter'
import HookCounter from './componets/HookCounter'
import HookCounter2 from './componets/HookCounter2'

function App() {
  return (
    <div>
      Key User
      <ClassCounter />
      <HookCounter />
      <hr />
      <HookCounter2/>
    </div>
  );
}

export default App;
