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
      <li key={data.name} className="list-item text-accent-foreground">
        <Link href={data.url}>
          {data.name.toLowerCase()} by {data.artist.name.toLowerCase()}
        </Link>
      </li>
    )
  }
  return (
    <AccordionItem value={type} className="text-white md:max-w-[500px]">
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent className="text-md">
        <ul className="text-md list-disc">{data.map(renderListItem)}</ul>
      </AccordionContent>
    </AccordionItem>
  )
}
