import { themeScript } from "@/lib/theme-script"

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: themeScript(),
      }}
    />
  )
}
