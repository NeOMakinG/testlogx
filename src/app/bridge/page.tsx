import dynamic from 'next/dynamic'

export default function Page() {
	const CedeSend = dynamic(() => import('@cedelabs/widgets').then((mod) => mod.CedeSend), { ssr: false })

	return (
		<div>
			<CedeSend />
		</div>
	)
}
