const debounce = (fn, delay) => {
    let timerId;
    return function (...arg) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        fn(...arg);
      }, delay);
    };
  };
  
  export { debounce };