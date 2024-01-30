import { useState } from 'react';
import data from './data';
import Menu from './Menu';
import Title from './Title';
import Categories from './Categories';

// const tempCategories = data.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
