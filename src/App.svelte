<script lang="ts">
	import { Router, Route } from "svelte-routing";

	import Header from "./lib/layout/Header.svelte";
	import Home from "./pages/Home.svelte";
</script>

<Router>
	<Header />
	<Route path="/" component={Home} />
</Router>
