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
            class="[ hilab-overlay-close ]"
        >
            <v-btn
                to="closeOverlay();"
                :color="buttonColor"
                class="[ hilab-overlay-close-button ]"
            >
                <v-icon class="[ hilab-overlay-close-icon ]">{{ closeIcon }}</v-icon>
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
            closeIcon:"mdi-close",
            buttonColor:"primary"
        }
    }
}

function closeOverlay() {
    //TODO: Hide underlying overlay component
}
</script>

<style lang="scss">
    .hilab-overlay-nav {
        .hilab-overlay-close {
            .hilab-overlay-close-button {
                height: calc(var(--spacer)*2);
                width: calc(var(--spacer)*2);

                .hilab-overlay-close-icon {
                    font-size: calc(var(--spacer) * 2);
                }
            }
        }
    }

</style>