import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type Props = {
  className?: string;
  idPrefix?: string;
  compact?: boolean;
  tone?: 'light' | 'dark';
  appearance?: 'default' | 'hero';
};

export default function ContactForm({
  className,
  idPrefix = '',
  compact = false,
  tone = 'light',
  appearance = 'default',
}: Props) {
  const nameId = `${idPrefix}name`;
  const phoneId = `${idPrefix}phone`;
  const emailId = `${idPrefix}email`;
  const messageId = `${idPrefix}message`;
  const dark = tone === 'dark';
  const hero = appearance === 'hero';
  const fieldClass = dark
    ? 'border-white/25 bg-white/10 text-white placeholder:text-white/40 focus-visible:border-white'
    : undefined;
  const labelClass = dark ? 'text-white/80' : undefined;

  return (
    <form className={cn('grid gap-5', hero && 'gap-4', className)} data-contact-form>
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-2">
        <Label htmlFor={nameId} className={labelClass}>
          Nombre
        </Label>
        <Input id={nameId} required name="name" autoComplete="name" placeholder="Nombre" className={fieldClass} />
      </div>

      <div className={cn('grid gap-5', (compact || hero) && 'sm:grid-cols-2 sm:gap-3.5', hero && 'gap-4')}>
        <div className="grid gap-2">
          <Label htmlFor={emailId} className={labelClass}>
            Correo
          </Label>
          <Input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Correo"
            className={fieldClass}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor={phoneId} className={labelClass}>
            Teléfono
          </Label>
          <Input
            id={phoneId}
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Teléfono"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor={messageId} className={labelClass}>
          Mensaje
        </Label>
        <Textarea
          id={messageId}
          required
          name="message"
          rows={hero ? 5 : compact ? 3 : 5}
          placeholder="Cuéntanos qué está pasando"
          className={cn(hero && 'min-h-32', compact && !hero && 'min-h-16', fieldClass)}
        />
      </div>

      <label
        className={cn(
          'flex items-start gap-2.5 text-sm',
          dark ? 'text-white/65' : 'text-muted-foreground',
        )}
      >
        <Checkbox name="privacy" required className={dark ? 'accent-white' : 'accent-[#093c5f]'} />
        <span>
          Acepto la{' '}
          <a
            href="/privacidad"
            className={cn(
              'underline underline-offset-2',
              dark ? 'text-white hover:text-white' : 'hover:text-[#093c5f]',
            )}
          >
            política de privacidad
          </a>
          .
        </span>
      </label>

      <Button
        type="submit"
        variant={dark ? 'outline' : 'default'}
        size="lg"
        className={cn(
          'w-full',
          !dark && 'bg-[#093c5f] text-white hover:bg-[#072f4a]',
          dark && 'rounded-full border-white/40 hover:bg-white/90',
        )}
      >
        {hero ? 'Pedir inspección' : 'Enviar mensaje'}
      </Button>
      <p data-form-status className={cn('hidden text-sm font-medium', dark ? 'text-white' : 'text-[#093c5f]')}></p>
    </form>
  );
}
