export class AppComponent {
  constructor(context) {
    this.context = context;
  }
  componentDidMount() {}
  render() {}
  renderDOM(root) {
    root.innerHTML = this.render(this.context);
    this.componentDidMount();
  }
}
