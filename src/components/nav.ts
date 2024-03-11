class Component {
  container: HTMLDivElement;

  constructor(innerHTML: string) {
    this.container = document.createElement('div');
    this.buildElement(innerHTML);
  }

  buildElement(innerHTML: string) {
    this.container.innerHTML = innerHTML
  }

  render() {
    document.querySelector<HTMLDivElement>('#app')?.append(this.container);
  }
}

export default Component;
