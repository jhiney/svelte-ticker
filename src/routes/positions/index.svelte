<script>
	import Header from "../../components/Header.svelte";
	import PositionTable from "../../components/positionTable.svelte";
</script>

<div class="overflow-hidden p-4 bg-neutral-900 w-screen h-screen">
	<Header />
	<div class="grid grid-cols-5 gap-4">
		<PositionTable />
	</div>
</div>
