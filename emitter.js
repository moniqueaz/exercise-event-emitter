module.exports = {
  create() {
    return {
      events: {},
      on: (event, myFunction) => {
        events[event] = [];
        events[event].push(myFunction);
      },
      off: () => {},
      emit: () => {},
      once: () => {},
      race: () => {}
    };
  }
};

class EventEmitter {
  constructor() {
    return {
      events: {}
    };
  }

  on() {}
}
