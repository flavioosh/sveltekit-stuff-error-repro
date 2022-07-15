<script>
	import { page } from "$app/stores";
	import { store } from "$stores/store";
</script>

{JSON.stringify($page.stuff)}
<br />
{JSON.stringify($store)}

<slot />
