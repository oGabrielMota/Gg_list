interface MensagemErroProps {
  mensagem: string;
  personalizacao?: string;
}

export default function MensagemErro({
  mensagem,
  personalizacao,
}: MensagemErroProps) {
  return <h1 className={`text-red-600 ps-1 ${personalizacao} `}>{mensagem}</h1>;
}
