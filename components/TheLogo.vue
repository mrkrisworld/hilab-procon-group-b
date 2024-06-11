<template>
    <div class="[ hilab-logo-container ]">
        <img
            class="[ hilab-logo-img ]"
            src="~/assets/branding/HILab-logo.png" 
            alt="Logo of Human Interface Laboratory"
        >
        <h1 class="[ hilab-logo-header ] [ typography-editorial ]">
            {{ headerText }}
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        headerText:String
    }
} 
</script>

<style>
    .hilab-logo-container {
        padding-bottom: calc(var(--spacer)*2);
        
        .hilab-logo-header {
            
        }

        .hilab-logo-img {
            height: calc(var(--spacer) * 2.5);
            width: auto;
        }
    }
</style>