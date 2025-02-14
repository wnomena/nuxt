<template>
  <section class=" section col-12">
        <div class="col-5 m-auto bg-warning rounded m-2 p-3">
            <h3 class="col-12 text-center">
                Are you sure you want to delete?
            </h3>
            <div class="col-12 d-flex justify-content-center gap-1">
                <div class="p-1 rounded bg-danger">Yes</div>
                <div class="p-1 rounded bg-success">No</div>
            </div>
        </div>
  </section>
</template>
<script lang="ts" setup>

</script>
    
<style>
    section.section {
        position: absolute;
        top: 0;
    }
    section.section .col-5 .col-12 div {
        width: 70px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
    }
</style>