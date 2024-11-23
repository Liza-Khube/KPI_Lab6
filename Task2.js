// Task 2

const compose = (...funcs) => {
    const handlers = [];
    const composed = (x) => {
      let reslt = x;
      try {
        for (let i = funcs.length - 1; i >= 0; i--) {
          reslt = funcs[i](reslt);
        };
        return reslt;
      } catch (error) {
        for (const handler of handlers) {
          handler(error);
        }
        return handlers;
      };
    };
  
    composed.on = (name, handler) => {
      if (name === "error") handlers.push(handler);
    };
    return composed;
  };