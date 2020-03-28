// Main menu items

const menuItems = [
  {
    name: 'File',
    items: [
      {name: 'About This Computer', onClick: () => alert('click')},
      {sep: true},
      {name: 'Menu 1'}
    ]
  },
  {name: 'Edit'},
  {name: 'View'},
  {name: 'Window'},
  {name: 'Special'},
  {name: 'Help'},
];

export default menuItems;
