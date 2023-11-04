import {
  useState, createContext, useContext, useMemo,
} from 'react';
import propTypes from 'prop-types';

const defaultStore = {
  clsoeHeaderHandler: null,
};

const AppContext = createContext();

export const CxtProvider = ({
  children,
}) => {
  const [store, setStore] = useState(defaultStore);

  const value = useMemo(() => ({
    store, setStore,
  }), [store]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

CxtProvider.propTypes = {
  children: propTypes.node.isRequired,

};

export const useAppContext = () => {
  const cxt = useContext(AppContext);

  return [cxt.store, cxt.setStore];
};
