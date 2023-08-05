const { useReducer, useEffect } = require("react")

const useLocalStorage = (key, reducer) => {
    const [ state, dispatch ] = useReducer(reducer);
    useEffect(() => {
        dispatch({
            type: 'set',
            tasks: JSON.parse(localStorage.getItem(key) || '[]')
        });
    },[]);
    useEffect(() => {
        if (state === undefined || state === null) {
          return;
        }
        localStorage.setItem(key, JSON.stringify(state));
      }, [ state ])
      return [ state, dispatch ];
};

export default useLocalStorage;