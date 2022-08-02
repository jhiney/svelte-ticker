<script>
  export let symbol;
  export let current_price;
  export let lastday_price;
</script>




<div class="card card-compact w-96 bg-white shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{symbol}</h2>
    <p>The current price is ${current_price} and closed yesterday at ${lastday_price}</p>
  </div>
</div>