import { createContext, useState } from 'react';

const AlertContext = createContext({
  alert: null,
  showAlert: (alertData) => {},
  hideAlert: () => {},
});

export const AlertContextProvider = (props) => {
  const [activeAlert, setActiveAlert] = useState();

  const showAlertHandler = (alertData) => {
    setActiveAlert(alertData);
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setActiveAlert(null);
    }, 5000);
    return () => clearTimeout(timer);
  };

  const hideAlertHandler = () => {
    setActiveAlert(null);
  };

  const context = {
    alert: activeAlert,
    showAlert: showAlertHandler,
    hideAlert: hideAlertHandler,
  };

  return (
    <AlertContext.Provider value={context}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
