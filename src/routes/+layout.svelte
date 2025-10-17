<script lang="ts">
	import '../app.css';

	import favicon from '$lib/assets/favicon.svg';

	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '@/components/ui/sonner';
	import Header from './header.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Toaster />

<Sidebar.Provider>
	<AppSidebar />
	<main class="flex w-full flex-col items-center justify-start p-2.5">
		<header class="flex flex-row w-full items-center">
			<Sidebar.Trigger />
			<Header />
		</header>
		{@render children?.()}
	</main>
</Sidebar.Provider>
