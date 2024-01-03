import dynamic from 'next/dynamic'

export default function Bridge() {
	const CedeSend = dynamic(() => import('@cedelabs/widgets').then((mod) => mod.CedeSend), { ssr: false })

	return (
		<div>
			<CedeSend />
		</div>
	)
}
