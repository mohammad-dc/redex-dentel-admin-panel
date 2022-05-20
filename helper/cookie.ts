import Cookies from "universal-cookie";

export const saveCookie = (key: string, value: string, days: number = 30) => {
  try {
    const cookie = new Cookies();
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    cookie.set(key, value, {
      sameSite: "strict",
      path: "/",
      expires: date,
      domain: "localhost",
      httpOnly: false,
      secure: true,
    });
  } catch (error) {
    throw error;
  }
};
