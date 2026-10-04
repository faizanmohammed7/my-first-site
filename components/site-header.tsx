const links = [
  { href: '#about', label: 'About' },
  { href: '#interests', label: 'Interests' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          faizan<span className="text-muted-foreground">.mohammed</span>
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 text-sm text-muted-foreground sm:gap-6">
            {links.map((link) => (
              <li key={link.href} className={link.href === '#certifications' ? 'hidden sm:block' : undefined}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
