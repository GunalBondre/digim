export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("token"));

  if (token && token.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
