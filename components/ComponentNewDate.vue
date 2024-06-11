<template>
    <div
        class="[ hilab-new-date ]"
    >
        <ComponentOverlayNavigation
            :title=title
        />
        
    </div>
</template>

<script>
import ComponentOverlayNavigation from './ComponentOverlayNavigation.vue';

export default {
    name: 'NewDate',
    props: {
        year: Number,
        month: Number,
        day: Number
    },
    data () {
        return {
            title: '新しい予定',
            subtitle: '',
        }
    }
} 
</script>

<style lang="scss">

</style>