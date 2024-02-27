'use client'
import { useBackgroundHandler, useLogin, useVaults, useSupportedExchanges, useAccounts, usePrices } from "@neomaking/react-sdk"

export const Login = () => {
  const {handleLogin, isLoggedIn} = useLogin()
	const {backgroundHandler} = useBackgroundHandler()
	const vaultsReturn = useVaults()
	const supportedExchangesReturn = useSupportedExchanges()
	const useAccountsReturn = useAccounts()
	const pricesReturn = usePrices()

	console.log(vaultsReturn)
	console.log(supportedExchangesReturn)
	console.log(useAccountsReturn)
	console.log(pricesReturn)

	return (
		<>
      {!isLoggedIn && <button onClick={() => handleLogin({onboard: true})}>Login</button>}
		</>
	)
}
