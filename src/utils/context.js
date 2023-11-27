import {
  useState, createContext, useContext, useMemo,
} from 'react';
import propTypes from 'prop-types';

/**
 * default store, 默认store
 */
const defaultStore = {
  clsoeHeaderHandler: null,
};

/**
 * create context object
 */
const AppContext = createContext();

/**
 * encapsulate
 */
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
/**
 * aceess the data
 */
export const useAppContext = () => {
  const cxt = useContext(AppContext);

  return [cxt.store, cxt.setStore];
};
