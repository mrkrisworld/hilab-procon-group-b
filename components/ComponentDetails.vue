<template>
    <div
        class="[ hilab-new-date ]"
    >
        <ComponentOverlayNavigation
            :title="title"
            :subtitle="subtitle"
        />
        
    </div>
</template>

<script>
import ComponentOverlayNavigation from './ComponentOverlayNavigation.vue';

export default {
    name: 'Details',
    props: {
        title: String,
        description: String,
        startTimeString: Date,
        endTime: Date
    },
    data () {
        return {
            title: '詳細',
            subtitle: '詳細',
        }
    }
} 
</script>

<style lang="scss">

</style>