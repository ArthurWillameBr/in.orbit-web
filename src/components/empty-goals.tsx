import hero from "../assets/hero.svg";
import logoInOrbit from "../assets/logo-in-orbit.svg";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import {DialogTrigger } from "./ui/diolog";

export function EmptyGoals() {
  return (
    <main className="flex flex-col h-screen justify-center items-center gap-8">
      <img src={logoInOrbit} alt="logo" />
      <img src={hero} alt="imagem principal" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus size={24} />
          Cadastrar Meta
        </Button>
      </DialogTrigger>
    </main>
  );
}
