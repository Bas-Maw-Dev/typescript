interface State {
  think(): string;
}

class HappyState implements State {
  think() {
      return 'I am happy';
  }
}

class SadState implements State {
  think() {
      return 'I am sad';
  }
}

class ExcitedState implements State {
  think() {
      return ' I am excited';
  }
}

class Human {
  state: State;

  constructor() {
      this.state = new HappyState();
  }

  think() {
      return this.state.think();
  }

  changeState(state: any) {
      this.state = state;
  }
}

let human = new Human();
human.changeState(SadState) // could be any of the states and can change it accordingly
console.log(human.state)