<script lang="ts">
	import { Router, Route } from 'svelte-navigator';
	import Home from './pages/Home.svelte';
</script>

<Router primary={false}>
	<main>
		<Route path="/">
			<Home />
		</Route>
	</main>
</Router>
