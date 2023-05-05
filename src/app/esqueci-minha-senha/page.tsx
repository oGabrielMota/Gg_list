"use client";
import MensagemErro from "@/Components/MensagemErro";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { bloqueiaAcesso, validaEmail } from "../Utils/loginUtils";

export default function EsqueciMinhaSenha() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [emailAtivo, setEmailAtivo] = useState(false);

  function soliciarSenha(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log(email);
    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Esqueci Minha Senha</title>
      </Head>

      <div className="max-w-sm w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Icone do sistema "
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Solicite sua nova senha
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
          </div>

          <div>
            <div className="text-sm text-end">
              <Link
                href="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Fazer Login
              </Link>
            </div>
          </div>

          <div>
            <button
              disabled={bloqueiaAcesso(email)}
              onClick={(e: any) => soliciarSenha(e)}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                bloqueiaAcesso(email)
                  ? "bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                  : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              } `}
            >
              Solicitar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
