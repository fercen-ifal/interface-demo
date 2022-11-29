import { writable } from "svelte/store";

export interface IAuthStoreSchema {
	isAuthenticated: boolean;
	user?: {
		name?: string;
		email?: string;
	};
}

export const auth = writable<IAuthStoreSchema>({ isAuthenticated: false });
