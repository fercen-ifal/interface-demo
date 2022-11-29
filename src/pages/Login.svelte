<script lang="ts">
	import TextField from "../lib/input/TextField.svelte";
</script>

<svelte:head>
	<title>Faça login | FERCEN</title>
</svelte:head>

<main
	class="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-10 lg:px-20 pt-32 gap-32 bg-primary-main">
	<section class="h-full">
		<h1 class="font-semibold text-3xl sm:text-5xl sm:leading-normal mb-2">
			Acesse o sistema de <br /> administração:
		</h1>
		<h2 class="sm:text-xl sm:leading-normal">
			Utilize suas credenciais para acessar o sistema <br /> de administração da Ferramenta de Controle Energético.
		</h2>
	</section>
	<section
		class="flex flex-col gap-5 w-full max-w-xl h-full px-8 py-14 bg-white shadow-md rounded-tl-[30px] rounded-tr-[30px]">
		<h3 class="font-medium text-2xl">Faça login</h3>
		<form class="flex flex-col gap-3" on:submit|preventDefault={() => {}}>
			<div class="flex flex-col gap-4">
				<TextField id="username" placeholder="Usuário:" />
				<TextField id="password" type="password" placeholder="Senha:" />
			</div>
			<div class="flex justify-between w-full text-xs text-primary-dark">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="hover:underline">Esqueceu seu usuário?</a>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="hover:underline">Esqueceu sua senha?</a>
			</div>
			<button
				type="submit"
				class="bg-primary-dark text-white px-2 py-1.5 rounded-sm outline-primary-darker duration-200 hover:brightness-95 active:brightness-90">
				Entrar
			</button>
		</form>
		<div class="flex flex-col gap-4 mt-4">
			<span class="text-sm">
				Se você sincronizou sua conta com Google e/ou Microsoft, pode utilizar algum agora para fazer login de
				forma mais rápida.
			</span>
			<div class="flex flex-col sm:flex-row justify-between gap-3">
				<button
					class="w-full px-2 py-1.5 bg-alt-googleRed text-white rounded-sm duration-200 hover:brightness-95 active:brightness-90">
					Entre com Google
				</button>
				<button
					class="w-full px-2 py-1.5 bg-alt-microsoftBlue text-white rounded-sm duration-200 hover:brightness-95 active:brightness-90">
					Entre com Microsoft
				</button>
			</div>
		</div>
	</section>
</main>
