"use client";
import MensagemErro from "@/Components/MensagemErro";
import IUsuarioLogin, { IUsuarioLoginVazio } from "@/Interface/IUsuarioLogin";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { bloqueiaAcesso, validaEmail } from "./Utils/loginUtils";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [emailAtivo, setEmailAtivo] = useState(false);
  const [senhaAtiva, setSenhaAtiva] = useState(false);

  const login: IUsuarioLogin = IUsuarioLoginVazio;

  function logarSistema(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    login.email = email;
    login.senha = senha;
    console.log(login);

    limpaDados();
  }

  function limpaDados() {
    setEmail("");
    setSenha("");
    setEmailAtivo(false);
    setSenhaAtiva(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Login</title>
      </Head>

      <div className="max-w-sm w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Icone do sistema "
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Faça login com sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Digite seu email"
                onBlur={() => setEmailAtivo(true)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Digite sua senha"
                onBlur={() => setSenhaAtiva(true)}
              />
            </div>

            {!email && emailAtivo && (
              <MensagemErro
                mensagem="Email é obrigatorio"
                personalizacao="pt-2 pb-2"
              />
            )}

            {email && !validaEmail(email) && (
              <MensagemErro
                mensagem="Email inválido"
                personalizacao="pt-2 pb-2"
              />
            )}

            {!senha && senhaAtiva && (
              <MensagemErro
                mensagem="Senha é obrigatoria"
                personalizacao="pt-1 pb-3"
              />
            )}

            {senha && senha.length < 8 && (
              <MensagemErro
                mensagem="Senha deve ter no minimo 8 caracteres"
                personalizacao="pt-1 pb-3"
              />
            )}
          </div>

          <div>
            <div className="text-sm text-end">
              <Link
                href="/esqueci-minha-senha"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Esqueci minha senha?
              </Link>
            </div>
          </div>

          <div>
            <button
              disabled={bloqueiaAcesso(email, senha)}
              onClick={(e: any) => logarSistema(e)}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                bloqueiaAcesso(email, senha)
                  ? "bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              } `}
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
