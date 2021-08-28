import { useState } from 'react';

const Catigories = ({ items }) => {
  const [activeItems, setActiveItems] = useState(0);
  return (
    <div className="categories">
      <ul>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        {items.map((name, index) => <li className={activeItems === index ? 'active' : ''} onClick={() => setActiveItems(index)} key={`${name}_${index}`}>{name}</li>)}
      </ul>
    </div>
  );
};

export { Catigories };
