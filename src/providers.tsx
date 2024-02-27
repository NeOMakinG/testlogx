"use client";
import { PropsWithChildren } from 'react';
import {CedeProviders} from '@neomaking/react-sdk';

export const Providers = ({children}: PropsWithChildren) => {
	return (
		<CedeProviders>
			{children}
    </CedeProviders>
	)
}
