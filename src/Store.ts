import { observable, action } from 'mobx';

export default class Store {
  @observable things = [
    { name: 'thing 1', value: 1 },
    { name: 'thing 2', value: 2 },
    { name: 'cat', value: 0 },
    { name: 'hat', value: 4 },
    { name: 'fish', value: 2 },
    { name: 'Sally', value: 1 },
  ];

  @observable count = 0;

  @action.bound increment() {
    this.count += 1;
  }

}
