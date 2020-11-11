<template>
    <div :class="[$style.container, {[$style.incomingMessage]: isIncomingMessage}]">
        <div :class="$style.text">
            {{ message.text }}
        </div>
        <div :class="$style.date">
            {{ time }}
        </div>
    </div>
</template>

<script>
import {getDateFormatted} from '@/utils/date';

export default {
    props: {
        isIncomingMessage: {
            type: Boolean,
            required: true,
        },
        message: {
            type: Object,
            required: true,
        },
    },
    computed: {
        time() {
            return getDateFormatted(this.message.date)
        }
    },
    name: 'Message',
};
</script>

<style lang="scss" module>
.container {
    align-self: flex-end;
    padding: 2rem;
    margin: 1rem;
    border-radius: 3px;
    background-color: lighten(lightgray, 13);
}

.incomingMessage {
    background-color: rgb(48, 71, 236);
    color: white;
    align-self: flex-start;
}

.date {
    font-size: .8rem;
    padding: .5rem 0;
    color: lightgray;
}
</style>