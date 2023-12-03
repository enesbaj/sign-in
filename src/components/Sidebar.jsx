import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    name: 'Home',
    label: 'Anagrafica',
    path: '/',
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="border-r border-r-stone-800 h-full w-48">
      <ul className="flex flex-col list-none">
        {links.map((link, index) => {
          const isActive = pathname === link.path;

          const classes = `py-6 px-4 ${isActive ? 'bg-cyan-900' : ''}`

          return (
            <li
              key={`${link.name}-${index}`}
              className={classes}
            >
              <Link to={link.path} className="flex flex-col text-sm">
                <span>{link.name}</span>
                <span>{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
