import hero from "./assets/hero.svg";
import logoInOrbit from "./assets/logo-in-orbit.svg";
import { Plus } from "lucide-react";

export function App() {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-8">
      <img src={logoInOrbit} alt="logo" />
      <img src={hero} alt="imagem principal" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>
      <button 
        className="flex items-center px-4 gap-2 py-2.5 rounded-lg bg-violet-500 text-violet-50 text-sm font-medium tracking-tight hover:bg-violet-600 transition-colors"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </main>
  );
}
