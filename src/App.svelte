<script lang="ts">
	import { Router, Route } from "svelte-routing";

	import Header from "./lib/layout/Header.svelte";
	import Home from "./pages/Home.svelte";
	import Login from "./pages/Login.svelte";
</script>

<Router>
	<Header />

	<div class="static sm:relative sm:flex-grow sm:h-full">
		<div class="static sm:absolute inset-0">
			<Route path="/" component={Home} />
			<Route path="/entrar" component={Login} />
		</div>
	</div>
</Router>
