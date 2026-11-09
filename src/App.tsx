import { useState } from "react";
export default function App() {
  const [count, setCount] = useState(0);
  return <main className="page"><section className="card"><span className="eyebrow">INTEGRAÇÃO DE TESTE</span><h1>ChatGPT + GitHub + Lovable 🚀</h1><p>Se você está vendo esta tela, o projeto React está funcionando!</p><div className="counter"><span>Cliques registrados</span><strong>{count}</strong></div><button onClick={() => setCount(c => c + 1)}>Testar botão +1</button><button className="secondary" onClick={() => setCount(0)}>Zerar contador</button><small>Projeto demonstrativo criado para validar o fluxo de desenvolvimento.</small></section></main>;
}
