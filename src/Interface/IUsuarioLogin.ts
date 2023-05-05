export default interface IUsuarioLogin {
  email: string;
  senha: string;
}

export const IUsuarioLoginVazio: IUsuarioLogin = {
  email: "",
  senha: "",
};
