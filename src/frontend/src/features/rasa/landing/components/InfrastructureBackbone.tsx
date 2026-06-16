type Metric = { value: string; label: string }

type Props = {
  title: string
  subtitle: string
  metrics: readonly Metric[]
}

export const InfrastructureBackbone = ({ title, subtitle, metrics }: Props) => (
  <div className="rasa-backbone">
    <div className="rasa-backbone-glow" aria-hidden="true" />
    <div className="rasa-backbone-copy">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    <div className="rasa-backbone-metrics">
      {metrics.map((metric) => (
        <div key={metric.label} className="rasa-metric">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  </div>
)
