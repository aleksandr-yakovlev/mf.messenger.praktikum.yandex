import { HTTP } from "./request";
import { BASE_URL } from "../../consts";

describe("utils/request", () => {
  it("должен получать ответ от сервера", () => {
    return new HTTP().get(`${BASE_URL}/auth/user`, {}).then((res) => {
      expect(res.status).not.toBeNull();
    });
  });
});
