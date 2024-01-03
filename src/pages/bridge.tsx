import dynamic from 'next/dynamic'

export const Bridge = () => {
	const CedeSend = dynamic(() => import('@cedelabs/widgets').then((mod) => mod.CedeSend), { ssr: false })

	return (
		<div>
			{CedeSend && <CedeSend />}
		</div>
	)
}

export default Bridge
