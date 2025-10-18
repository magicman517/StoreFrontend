<script lang="ts">
	import * as InputGroup from '$lib/components/ui/input-group';

	import { SearchIcon } from '@lucide/svelte';
</script>

<InputGroup.Root class="w-96">
	<InputGroup.Input placeholder="INPUT GROUP SPECIAL FOR CROCONDINE" />
	<InputGroup.Addon>
		<SearchIcon />
	</InputGroup.Addon>
	<InputGroup.Addon align="inline-end">
		<InputGroup.Button>Search</InputGroup.Button>
	</InputGroup.Addon>
</InputGroup.Root>
