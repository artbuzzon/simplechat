<template>
    <div :class="$style.container">
        <Message
                v-for="message in chat"
                :key="message.text + Math.random() * 1000"
                :is-incoming-message="message.userId !== userId"
                :message="message"/>
    </div>
</template>

<script>
import Message from '@/components/Message';

export default {
    name: 'MessagesBox',
    props: {
        userId: {
            type: [Number, String],
            required: true,
        },
    },
    components: {Message},
    computed: {
        chat() {
            return this.$store.getters.chat;
        },
    },
};
</script>

<style lang="scss" module>
.container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 70%;
}
</style>