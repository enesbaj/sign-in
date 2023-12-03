import Sidebar from '../components/Sidebar';
import { useUserContext } from '../context/User';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const { isLoggedIn } = useUserContext();

  return (
    <main className="flex h-full">
      {isLoggedIn && <Sidebar />}

      {isLoggedIn ? <div className="px-4 py-6">{children}</div> : children}
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
