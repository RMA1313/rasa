import type { CSSProperties } from 'react'
import {
  RiBroadcastLine,
  RiChat3Line,
  RiGroupLine,
  RiCodeSSlashLine,
  RiArchive2Line,
  RiVideoOnLine,
} from '@remixicon/react'

type Props = {
  title: string
  items: readonly { label: string; caption: string; icon: 'meeting' | 'broadcast' | 'chat' | 'archive' | 'users' | 'api' }[]
}

const icons = {
  meeting: RiVideoOnLine,
  broadcast: RiBroadcastLine,
  chat: RiChat3Line,
  archive: RiArchive2Line,
  users: RiGroupLine,
  api: RiCodeSSlashLine,
}

export const FeatureOrbit = ({ title, items }: Props) => (
  <div className="rasa-orbit">
    <div className="rasa-orbit-core">
      <span />
      <strong>رسا</strong>
      <p>پلتفرم</p>
    </div>
    <div className="rasa-orbit-copy">
      <h2>{title}</h2>
      <p>مرکز سیستم به‌صورت یک هسته‌ی زنده طراحی شده تا هر ابزار در مدار خودش، اما با یک pulse مشترک دیده شود.</p>
    </div>
    <div className="rasa-orbit-nodes" aria-label={title}>
      {items.map((item, index) => (
        <div className="rasa-orbit-node" key={item.label} style={{ '--angle': `${index * 60}deg` } as CSSProperties}>
          {(() => {
            const Icon = icons[item.icon]
            return <Icon size={18} aria-hidden="true" />
          })()}
          <strong>{item.label}</strong>
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  </div>
)
