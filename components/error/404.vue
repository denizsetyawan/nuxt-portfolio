<template>
  <div class="error-404 text-center mt-15">
    <h1>404</h1>
    <h2>This page doesn’t exist</h2>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>
<script>
  export default {
    name: 'error-404',
    props: {
      error: {
        type: Object,
        default: () => {},
      }
    }
  }

</script>
