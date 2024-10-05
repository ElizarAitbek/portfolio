import { ModeToggle } from '@/components/mode-toggler/mode-toggler';

export default function Header() {
  return (
    <header className="py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <p className="text-center text-3xl">Elizar Aitbek</p>
        <ModeToggle />
      </div>
    </header>
  );
}
