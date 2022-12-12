<script lang="ts">
	import { Link } from "svelte-routing";

	import TextField from "../lib/input/TextField.svelte";
</script>

<svelte:head>
	<title>Crie sua conta | FERCEN</title>
</svelte:head>

<main
	class="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-10 lg:px-20 pt-32 gap-32 bg-primary-main">
	<section class="flex flex-col gap-20 h-full">
		<div>
			<h1 class="font-semibold text-3xl sm:text-5xl sm:leading-normal mb-2">
				Acesse o sistema de <br /> administração:
			</h1>
			<h2 class="sm:text-xl sm:leading-normal">
				Crie seu usuário para acessar o sistema de <br /> administração da Ferramenta de Controle
				<br /> Energético.
			</h2>
		</div>
	</section>
	<section
		class="flex flex-col gap-5 w-full max-w-xl h-full px-8 py-14 bg-white shadow-md rounded-tl-[30px] rounded-tr-[30px]">
		<h3 class="font-medium text-2xl">Faça login</h3>
		<form class="flex flex-col gap-3" on:submit|preventDefault={() => {}}>
			<div class="flex flex-col gap-4">
				<TextField id="username" placeholder="Usuário:" />
				<TextField id="email" type="email" placeholder="Email:" />
				<TextField id="password" type="password" placeholder="Senha:" />
				<TextField id="invite" placeholder="Seu convite:" />
			</div>
			<div class="flex justify-between w-full text-xs text-primary-dark">
				<Link to="/entrar" class="hover:underline">Já possui uma conta?</Link>
			</div>
			<button
				type="submit"
				class="bg-primary-dark text-white px-2 py-1.5 rounded-sm outline-primary-darker duration-200 hover:brightness-95 active:brightness-90">
				Cadastrar
			</button>
		</form>
		<div class="flex flex-col gap-4 mt-4">
			<span class="text-sm">
				No campo “Seu convite” insira o código que foi destinado ao seu usuário para seu registro ser permitido.
			</span>
		</div>
	</section>
</main>
