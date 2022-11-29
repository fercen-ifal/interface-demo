<script lang="ts">
	export let id: string;
	export let placeholder: string = id;
	export let type: string = "text";
	export let value: string = "";

	let showFloatingLabel = value.length > 0;
</script>

<div class="flex flex-col relative">
	<span
		class={`absolute bottom-7 pl-2 text-xs text-slate-400 transition-transform origin-bottom-left duration-200 ${
			showFloatingLabel ? "scale-100" : "scale-0"
		}`}>{placeholder}</span>
	<input
		{id}
		name={id}
		{type}
		{placeholder}
		{value}
		on:input={event => {
			value = event.currentTarget.value;
			showFloatingLabel = event.currentTarget.value.length > 0;
		}}
		class="px-2 py-1.5 bg-gray-50 rounded-sm outline-primary-main/10" />
</div>
