'use client'

import { sendGAEvent } from '@next/third-parties/google'

export default function ContactLink() {
  return (
    <a
      href="mailto:dan+contactform@cargill.dev"
      onClick={() => sendGAEvent('contact', 'click')}
      target="_blank"
      rel="noreferrer noopener"
      className="text-red-500"
    >
      <span>contact</span>
    </a>
  )
}
