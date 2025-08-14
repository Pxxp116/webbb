
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";

type Props = { plan: string; triggerClassName?: string; children?: React.ReactNode; };

export default function PlanCheckoutDialog({ plan, triggerClassName, children }: Props) {
  const formId = useId();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={triggerClassName ?? "btn-primary w-full"}>{children ?? "Empezar con este plan"}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg rounded-2xl p-0 overflow-hidden">
        <div className="bg-gradient-subtle p-6 border-b border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl">Comencemos con {plan}</DialogTitle>
            <DialogDescription>Déjanos tus datos y te llevamos directamente al pago. Recibirás confirmación por email.</DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-6">
          <form id={formId} action="https://formsubmit.co/p.equix25@gmail.com" method="POST" className="space-y-4">
            <input type="hidden" name="_next" value="https://fluxoservices.gumroad.com/l/thahm" />
            <input type="hidden" name="_subject" value={`Nueva solicitud de plan: ${plan}`} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="plan" value={plan} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label htmlFor="nombre">Nombre (propietari@)</Label><Input id="nombre" name="nombre" required placeholder="Miguel García" /></div>
              <div><Label htmlFor="email">Email (propietari@)</Label><Input id="email" type="email" name="email" required placeholder="jake@email.com" /></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label htmlFor="telefono">Número de teléfono</Label><Input id="telefono" name="telefono" required placeholder="+34 600 000 000" /></div>
              <div><Label htmlFor="empresa">Nombre negocio</Label><Input id="empresa" name="empresa" required placeholder="Restaurante Dos Delicias" /></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div><Label htmlFor="redes">Redes sociales (opcional)</Label><Input id="redes" name="redes" placeholder="@turestaurante" /></div>
              <div><Label htmlFor="web">Sitio web (opcional)</Label><Input id="web" name="web" placeholder="https://" /></div>
            </div>

            <div><Label htmlFor="notas">Notas o requisitos</Label><Textarea id="notas" name="notas" placeholder="Cuéntanos detalles útiles (horarios, reservas, idiomas, etc.)" /></div>

            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <input id="tos" name="tos" type="checkbox" required className="mt-1" />
              <label htmlFor="tos">Acepto que Fluxo procese estos datos para activar el servicio y contactar conmigo.</label>
            </div>

            <button type="submit" className="btn-primary w-full rounded-full">Enviar y proceder al pago</button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
