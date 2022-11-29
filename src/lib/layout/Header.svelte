<script lang="ts">
	import { auth, type IAuthStoreSchema } from "../stores/auth";

	const isNotOnHome = window.location.pathname !== "/";
	const isOnLoginPage = window.location.pathname === "/entrar";
	const isOnDashboard = window.location.pathname.includes("/painel");

	let authData: IAuthStoreSchema = { isAuthenticated: false };

	auth.subscribe(value => {
		authData = value;
	});
</script>

<header
	class="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-2 sm:px-4 py-4 sm:py-2 bg-primary-main">
	{#if isNotOnHome}
		<a href="/"><img class="w-full max-w-xs" src="/logo-horizontal.webp" alt="Logo da FERCEN" /></a>
	{:else}
		<img class="w-full max-w-xs" src="/logo-horizontal.webp" alt="Logo da FERCEN" />
	{/if}

	{#if isOnDashboard && authData.isAuthenticated}
		<span>Logado como: <strong>{authData.user.name}</strong></span>
	{:else}
		<a
			class="h-fit border border-primary-dark rounded-sm px-2 py-1.5 cursor-pointer duration-200 hover:bg-slate-300/10 hover:brightness-95"
			href={!authData.isAuthenticated && isOnLoginPage
				? "/"
				: !authData.isAuthenticated && !isOnLoginPage
				? "/entrar"
				: "/painel"}>
			{!authData.isAuthenticated && isOnLoginPage
				? "Voltar ao início"
				: !authData.isAuthenticated && !isOnLoginPage
				? "Acesso restrito"
				: "Ir ao painel"}
		</a>
	{/if}
</header>
