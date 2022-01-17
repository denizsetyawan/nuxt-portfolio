<template>
  <div class="error-404 text-center mt-15">
    <h1>500</h1>
    <h2>Internal Server Error</h2>
  </div>
</template>
<script>
  export default {
    name: 'error-500',
    props: {
      error: {
        type: Object,
        default: () => {},
      }
    }
  }

</script>
