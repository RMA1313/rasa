import type { CSSProperties } from 'react'
import {
  RiBroadcastLine,
  RiTeamLine,
  RiUserLine,
  RiDatabase2Line,
  RiShieldKeyholeLine,
} from '@remixicon/react'

type Props = {
  title: string
  items: readonly { label: string; caption: string; icon: 'person' | 'team' | 'broadcast' | 'org' | 'infra' }[]
}

const icons = {
  person: RiUserLine,
  team: RiTeamLine,
  broadcast: RiBroadcastLine,
  org: RiShieldKeyholeLine,
  infra: RiDatabase2Line,
}

export const ScalePath = ({ title, items }: Props) => (
  <div className="rasa-scale">
    <h2>{title}</h2>
    <p className="rasa-scale-lead">از استفاده‌ی شخصی تا استقرار سازمانی، تجربه با همان زبان بصری آرام و مطمئن ادامه پیدا می‌کند.</p>
    <div className="rasa-scale-path" role="list" aria-label={title}>
      <svg className="rasa-scale-wave" viewBox="0 0 1200 280" aria-hidden="true">
        <path
          d="M30 145C170 72 260 60 380 96c105 31 151 98 258 99 118 1 165-73 283-73 93 0 173 37 246 96"
          fill="none"
          stroke="url(#rasaScaleWave)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="rasaScaleWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5be7ff" stopOpacity="0" />
            <stop offset="30%" stopColor="#5be7ff" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#6b5cff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      {items.map((item, index) => (
        <div
          className="rasa-scale-node"
          role="listitem"
          key={item.label}
          style={{ '--delay': `${index * 0.14}s` } as CSSProperties}
        >
          {(() => {
            const Icon = icons[item.icon]
            return <Icon size={20} aria-hidden="true" />
          })()}
          <strong>{item.label}</strong>
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  </div>
)
