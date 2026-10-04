export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {'\u00A9'} {new Date().getFullYear()} Faizan Mohammed
        </p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  )
}
