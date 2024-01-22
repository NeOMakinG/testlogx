import dynamic from 'next/dynamic'
import Link from 'next/link'

export default function Bridge() {
	const CedeSend = dynamic(() => import('@neomaking/widgets').then((mod) => mod.CedeSend), { ssr: false })

	return (
		<div>
      <Link href="/anotherpage">Another page</Link>
			<CedeSend />
		</div>
	)
}
