import { Sidebar } from "./Sidebar";

describe("components/Sidebar", () => {
  it("должен создавать DOM элемент", () => {
    const Sdbar = new Sidebar();
    document.body.innerHTML = Sdbar.render();
  });
});

describe("components/Sidebar", () => {
  it("ререндер после обновления свойств", () => {
    const Sdbar = new Sidebar({
      chats: [
        {
          id: 1,
          title: "Title",
          fname: "Who",
          text: "Long message very very very very very long long long long",
        },
      ],
    });
    const mock = jest.fn();
    Sdbar.render = mock;
    Sdbar.setProps({
      chats: [
        {
          id: 2,
          title: "Title2",
          fname: "Who",
          text: "Long message very very very very very long long long long",
        },
      ],
    });
    expect(mock).toBeCalled();
  });
});
