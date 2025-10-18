<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import { Eye, EyeOff } from '@lucide/svelte';
	import { Button } from '@/components/ui/button';

	let { data }: { data: { form: SuperValidated<Infer<FormSchema>> } } = $props();

	const form = superForm(data.form, {
		validators: zod4Client(formSchema)
	});

	const { form: formData, enhance } = form;

	let showPassword = $state(false);
	let showRepeatPassword = $state(false);

	function toggleShowPassword() {
		showPassword = !showPassword;
	}

	function toggleShowRepeatPassword() {
		showRepeatPassword = !showRepeatPassword;
	}
</script>

<form method="POST" class="flex flex-col gap-4" use:enhance>
	<Form.Field {form} name="email">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>{m['signupForm.emailLabel']()}</Form.Label>
				<Input
					{...props}
					bind:value={$formData.email}
					placeholder={m['signupForm.emailPlaceholder']()}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="password">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>{m['signupForm.passwordLabel']()}</Form.Label>
				<InputGroup.Root>
					<InputGroup.Input
						placeholder={m['signupForm.passwordPlaceholder']()}
						{...props}
						bind:value={$formData.password}
						type={showPassword ? 'text' : 'password'}
					/>
					<InputGroup.Addon align="inline-end">
						<Button variant="icon" onclick={toggleShowPassword}>
							{#if showPassword}
								<Eye />
							{:else}
								<EyeOff />
							{/if}
						</Button>
					</InputGroup.Addon>
				</InputGroup.Root>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="repeatPassword">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>{m['signupForm.repeatPasswordLabel']()}</Form.Label>
				<InputGroup.Root>
					<InputGroup.Input
						placeholder={m['signupForm.repeatPasswordPlaceholder']()}
						{...props}
						bind:value={$formData.repeatPassword}
						type={showRepeatPassword ? 'text' : 'password'}
					/>
					<InputGroup.Addon align="inline-end">
						<Button variant="icon" onclick={toggleShowRepeatPassword}>
							{#if showRepeatPassword}
								<Eye />
							{:else}
								<EyeOff />
							{/if}
						</Button>
					</InputGroup.Addon>
				</InputGroup.Root>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<div>
		<span class="text-sm text-muted-foreground">{m['signupForm.haveAccountText']()}</span>
		<Button variant="link" href="/login" class="p-0">
			{m['signupForm.loginLinkText']()}
		</Button>
	</div>
	<Form.Button>{m['signupForm.signupButton']()}</Form.Button>
</form>
