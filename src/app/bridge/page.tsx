import dynamic from 'next/dynamic'

export const Page = () => {
	const CedeSend = dynamic(() => import('@cedelabs/widgets').then((mod) => mod.CedeSend), { ssr: false })

	return (
		<div>
			<CedeSend />
		</div>
	)
}

export default Page
