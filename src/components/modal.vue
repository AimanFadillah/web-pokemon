<script setup>
    defineProps(["target"])
</script>

<template>
    <div class="modal" :id="target || 'exampleModal'" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>