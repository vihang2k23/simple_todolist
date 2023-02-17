<template>
  <h1>Edit Task</h1>
</template>
<script>

export default {
  data() {
    return {
      taskName: {},
      updatask: "",
      addpriority: "",
      id: this.$route.params.id,
      items: null,
      selectpro: ["high", "medium", "low"],
    };
  },
  
};
</script>
