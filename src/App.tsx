import type { Component } from 'solid-js';

import Home from '@/views/Home'
import { Routes, Route } from '@solidjs/router';

const App: Component = () => {
  return (
    <div class="c-yellow">
      <div>Hello World</div>
      <Routes>
        <Route path="/home" component={Home} />
      </Routes>
    </div>
  );
};

export default App;
