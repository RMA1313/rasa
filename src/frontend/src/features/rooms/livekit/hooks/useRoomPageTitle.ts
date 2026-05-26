import { useTitle } from 'hoofd'
import { useRoomData } from './useRoomData'
import { useMemo } from 'react'
import { branding } from '@/features/rasa/config/branding'

/**
 * Updates the browser tab title with the room name to help users easily find
 * the meeting tab among many open tabs. Works on both the join screen and
 * once connected.
 */
export const useRoomPageTitle = () => {
  const roomData = useRoomData()

  const pageTitle = useMemo(() => {
    if (!roomData) {
      return branding.defaultTitle
    }

    const roomLabel = roomData.name || roomData.slug || ''

    if (!roomLabel) return branding.defaultTitle

    return `${branding.defaultTitle} - ${roomLabel}  `
  }, [roomData])

  useTitle(pageTitle)
}
