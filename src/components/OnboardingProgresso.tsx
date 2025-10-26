import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function OnboardingProgresso() {
  const [etapa, setEtapa] = useState(2); // etapa atual
  const totalEtapas = 5;

  const progresso = (etapa / totalEtapas) * 100;

  return (
    <div className="w-full max-w-md mx-auto space-y-2 p-6 bg-card rounded-lg border border-border">
      <div className="flex justify-between text-sm font-medium text-foreground">
        <span>Progresso</span>
        <span>
          {etapa} / {totalEtapas}
        </span>
      </div>

      <Progress value={progresso} className="h-2" />

      <div className="flex justify-between mt-4 gap-3">
        <Button
          variant="outline"
          onClick={() => setEtapa(Math.max(1, etapa - 1))}
          disabled={etapa === 1}
        >
          Voltar
        </Button>
        <Button
          onClick={() => setEtapa(Math.min(totalEtapas, etapa + 1))}
          disabled={etapa === totalEtapas}
        >
          Avançar
        </Button>
      </div>
    </div>
  );
}
