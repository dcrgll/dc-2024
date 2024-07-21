import { type Album, type Track } from '@/types/now-playing'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

import Link from './link'

export default function NowPlayingItem({
  data,
  label,
  type
}: {
  data: Album[] | Track[]
  label: string
  type: 'albumOverall' | 'albumWeekly' | 'trackOverall' | 'trackWeekly'
}) {
  const renderListItem = (data: Album | Track) => {
    return (
      <li key={data.name} className="flex items-center text-accent-foreground">
        <span className="-mt-1 mr-2 text-3xl text-white">•</span>
        <Link href={data.url}>
          {data.name.toLowerCase()} <span className="text-white">by</span>{' '}
          {data.artist.name.toLowerCase()}
        </Link>
      </li>
    )
  }
  return (
    <AccordionItem value={type} className="text-white md:max-w-[500px]">
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>
        <ul className="text-md">{data.map(renderListItem)}</ul>
      </AccordionContent>
    </AccordionItem>
  )
}
