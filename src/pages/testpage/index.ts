import Block from "../../utils/Block";
import template from "./testpage.pug";
import { withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";

import store, { StoreEvents } from "../../utils/Store";

export class TestPageBase extends Block {
  constructor() {
    const state = store.getState();

    super(state.user || {});
  }
  init() {
    store.on(StoreEvents.Updated, () => this.setProps.user || {});
  }
  render() {
    return this.compile(template, this.props);
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const TestPage = withUser(TestPageBase);
