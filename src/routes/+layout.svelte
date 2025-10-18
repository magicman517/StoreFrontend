<script lang="ts">
	import '../app.css';

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from './app-sidebar.svelte';
	import favicon from '$lib/assets/favicon.svg';

	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '@/components/ui/sonner';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Toaster />

<Sidebar.Provider>
	<AppSidebar />
	<Sidebar.Inset>
		<main class="p-2">
			<header class="flex w-full flex-row items-center">
				<Sidebar.Trigger />
			</header>
			{@render children?.()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>
