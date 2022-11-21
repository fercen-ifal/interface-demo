<script lang="ts">
	const logoAsLink = window.location.pathname !== "/";
</script>

<header
	class="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-2 sm:px-4 py-4 sm:py-2 bg-primary-main">
	{#if logoAsLink}
		<a href="/"><img class="w-full max-w-xs" src="/logo-horizontal.webp" alt="Logo da FERCEN" /></a>
	{:else}
		<img class="w-full max-w-xs" src="/logo-horizontal.webp" alt="Logo da FERCEN" />
	{/if}
	<a
		class="h-fit border border-primary-dark rounded-sm px-2 py-1.5 cursor-pointer duration-200 hover:bg-slate-300/10 hover:brightness-95"
		href="/painel">
		Acesso Restrito
	</a>
</header>
