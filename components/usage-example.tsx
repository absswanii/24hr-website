import { InfoButton } from "@/components/info-button"

export function ExampleComponent() {
  return (
    <div className="flex items-center gap-2">
      <h3>Preventive Maintenance</h3>
      <InfoButton
        term="Preventive Maintenance"
        description="Regular scheduled maintenance that helps prevent breakdowns and extends the life of your truck. This includes oil changes, inspections, and part replacements before they fail."
      />
    </div>
  )
}
