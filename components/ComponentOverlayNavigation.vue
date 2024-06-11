<template>
    <div
        class="[ hilab-overlay-nav ]"
    >
        <div
            class="[ hilab-overlay-title ]"
        >
            <span
                class="[ hilab-overlay-title-text ]"
            >
                {{ title }}
            </span>
        </div>
        <div
            class="[ hilab-overlay-subtitle ]"
        >
            <span
                class="[ hilab-overlay-subtitle-text ]"
            >
                {{ subtitle }}
            </span>
        </div>
        <div
            class="[ hilab-overlay-button-close ]"
        >
            <v-btn
                to="closeOverlay();"
            >

            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OverlayNavigation',
    props: {
        title: String,
        subtitle: String
    },
    data () {
        return {

        }
    }
}

function closeOverlay() {
    //TODO: Hide underlying overlay component
}
</script>

<style lang="scss">

</style>