import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
  return (
    <form className="mt-8 grid gap-5" data-contact-form>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" required name="name" autoComplete="name" placeholder="Nombre" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" required name="phone" type="tel" autoComplete="tel" placeholder="Teléfono" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" placeholder="Email" />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          required
          name="message"
          rows={5}
          placeholder="Cuéntanos qué está pasando"
        />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-base-content/70">
        <Checkbox name="privacy" required />
        <span>
          Acepto la{' '}
          <a href="/privacidad" className="underline underline-offset-2 hover:text-primary">
            política de privacidad
          </a>
          .
        </span>
      </label>

      <Button type="submit" className="h-11 w-full">
        Enviar mensaje
      </Button>
      <p data-form-status className="hidden text-sm font-medium text-primary"></p>
    </form>
  );
}
