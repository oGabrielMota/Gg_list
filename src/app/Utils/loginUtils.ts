export function validaEmail(email: string) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email));
}

export function bloqueiaAcesso(email: string, senha?: string) {
  if (!email || !senha || !validaEmail(email) || senha?.length < 8) {
    return true;
  } else {
    return false;
  }
}
