<<<<<<< HEAD
import { nanoid } from "nanoid";
import { EventBus } from "./EventBus";

class Block {
=======
import { EventBus } from "./EventBus";
import { nanoid } from "nanoid";

class Block<P extends Record<string, any> = any> {
>>>>>>> origin/sprint_3
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
<<<<<<< HEAD
  };

  public _id = nanoid(6);

  protected props: any;

  private eventBus: () => EventBus;

  protected _element: HTMLElement | null = null;

  private _meta: { props: any };

  protected children: Record<string, Block> | Record<string, Block[]>;

  /** JSDoc
   *
   * @param {Object} propsWithChildren
   *
   * @returns {void}
   */
  constructor(propsWithChildren: any = {}) {
=======
  } as const;

  public id = nanoid(6);
  protected props: P;
  public children: Record<string, Block | Block[]>;
  private eventBus: () => EventBus;
  private _element: HTMLElement | null = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsWithChildren: P) {
>>>>>>> origin/sprint_3
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

<<<<<<< HEAD
    this._meta = {
      props,
    };

    this.children = children;

=======
    this.children = children;
>>>>>>> origin/sprint_3
    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

<<<<<<< HEAD
  private _getChildrenAndProps(childrenAndProps: any) {
    const props: Record<string, any> = {};
    const children: Record<string, Block> | Record<string, Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Array) {
        value.forEach((val) => {
          if (val instanceof Block) {
            children[key] = value;
          }
        });
      } else if (value instanceof Block) {
        children[key] = value;
=======
  _getChildrenAndProps(childrenAndProps: P): {
    props: P;
    children: Record<string, Block | Block[]>;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block | Block[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((v) => v instanceof Block)
      ) {
        children[key as string] = value;
      } else if (value instanceof Block) {
        children[key as string] = value;
>>>>>>> origin/sprint_3
      } else {
        props[key] = value;
      }
    });

<<<<<<< HEAD
    return { props, children };
  }

  private _registerEvents(eventBus: EventBus) {
=======
    return { props: props as P, children };
  }

  _addEvents() {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
>>>>>>> origin/sprint_3
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

<<<<<<< HEAD
  private _createResources() {}

  private _init() {
    this._createResources();

=======
  private _init() {
>>>>>>> origin/sprint_3
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

<<<<<<< HEAD
  init() {}

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
=======
  protected init() {}

  _componentDidMount() {
    this.componentDidMount();
>>>>>>> origin/sprint_3
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
<<<<<<< HEAD
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
=======

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((ch) => ch.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
>>>>>>> origin/sprint_3
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

<<<<<<< HEAD
  protected componentDidUpdate(oldProps?: any, newProps?: any) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: any) => {
=======
  protected componentDidUpdate(oldProps: P, newProps: P) {
    return true;
  }

  setProps = (nextProps: Partial<P>) => {
>>>>>>> origin/sprint_3
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
<<<<<<< HEAD
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
=======
>>>>>>> origin/sprint_3
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
<<<<<<< HEAD

    const newElement = fragment.firstElementChild as HTMLElement;

=======
    const newElement = fragment.firstElementChild as HTMLElement;
>>>>>>> origin/sprint_3
    if (this._element) {
      this._removeEvents();
      this._element.replaceWith(newElement);
    }
<<<<<<< HEAD

    this._element = newElement;

=======
    this._element = newElement;
>>>>>>> origin/sprint_3
    this._addEvents();
    this._addClass();
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        component.forEach((val) => {
          if (!contextAndStubs[name]) {
<<<<<<< HEAD
            contextAndStubs[name] = `<div data-id='${val._id}'></div>`;
          } else {
            contextAndStubs[
              name
            ] = `${contextAndStubs[name]}<div data-id='${val._id}'></div>`;
=======
            contextAndStubs[name] = `<div data-id='${val.id}'></div>`;
          } else {
            contextAndStubs[
              name
            ] = `${contextAndStubs[name]}<div data-id='${val.id}'></div>`;
>>>>>>> origin/sprint_3
          }
        });
        return;
      }
<<<<<<< HEAD

      contextAndStubs[name] = `<div data-id='${component._id}'></div>`;
=======
      contextAndStubs[name] = `<div data-id='${component.id}'></div>`;
>>>>>>> origin/sprint_3
    });

    const html = template(contextAndStubs);

    const temp = document.createElement("template");

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([, component]) => {
      let stub;
      if (Array.isArray(component)) {
        component.forEach((val) => {
<<<<<<< HEAD
          stub = temp.content.querySelector(`[data-id='${val._id}']`);
          if (!stub) {
            return;
          }

          stub.replaceWith(val.getContent()!);
        });
      } else {
        stub = temp.content.querySelector(`[data-id='${component._id}']`);
        if (!stub) {
          return;
        }

=======
          stub = temp.content.querySelector(`[data-id='${val.id}']`);
          if (!stub) {
            return;
          }
          stub.replaceWith(val.getContent()!);
        });
      } else {
        stub = temp.content.querySelector(`[data-id='${component.id}']`);
        if (!stub) {
          return;
        }
>>>>>>> origin/sprint_3
        stub.replaceWith(component.getContent()!);
      }
    });

    return temp.content;
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent() {
    return this.element;
  }

<<<<<<< HEAD
  private _makePropsProxy(props: any) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        const oldTarget = { ...target };
        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
=======
  _makePropsProxy(props: P) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        const oldTarget = { ...target };

        target[prop as keyof P] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
>>>>>>> origin/sprint_3
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }
<<<<<<< HEAD

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }

=======
>>>>>>> origin/sprint_3
  private _addEvents() {
    const { events = {} } = this.props as {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private _addClass() {
    const { classes = "" } = this.props as { classes: string };
    if (!classes) {
      return;
    }
<<<<<<< HEAD

=======
>>>>>>> origin/sprint_3
    const arr = classes.split(" ");
    arr.forEach((className) => {
      this._element!.classList.add(className);
    });
  }

  private _removeEvents() {
    const { events = {} } = this.props as {
      events: Record<string, () => void>;
    };

    Object.keys(events).forEach((eventName) => {
      this._element!.removeEventListener(eventName, events[eventName]);
    });
  }
}

export default Block;
