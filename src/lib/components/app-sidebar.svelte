<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { Anvil, Search } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { Button } from './ui/button';
	import { Separator } from './ui/separator';
	import { setLocale } from '$lib/paraglide/runtime';
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<Sidebar.MenuButton>
			{#snippet child({ props })}
                <a href="/" {...props}>
                    <Anvil />
                    <span class="text-lg">My App</span>
                </a>
            {/snippet}
		</Sidebar.MenuButton>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Menu class="px-2">
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>
					{#snippet child({ props })}
						<button {...props} onclick={() => console.log('Search clicked')}>
							<Search />
							<span>{m.search_button()}</span>
						</button>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton>About</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Content>
	<Sidebar.Footer>
		<div class="flex flex-row gap-0.5">
			<Button variant="ghost" onclick={() => setLocale('en')}>en</Button>
			<Separator orientation="vertical" class="bg-white" />
			<Button variant="ghost" onclick={() => setLocale('uk')}>uk</Button>
		</div>
		<Sidebar.MenuButton variant="outline">
			{#snippet child({ props })}
				<a href="/login" {...props}>
					{m.login_button()}
				</a>
			{/snippet}
		</Sidebar.MenuButton>
	</Sidebar.Footer>
</Sidebar.Root>
