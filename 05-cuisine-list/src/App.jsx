import { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Title from './Title';

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
