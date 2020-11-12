<template>
    <div :class="$style.container" v-chat-scroll="{always: false, smooth: true}">
                <Message
                        v-for="message in chat"
                        :key="message.date + message.text"
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
    overflow-y: auto;
    height: 100%;

    &::-webkit-scrollbar{
        width: .5rem;
    }

    &::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
        background: lightgray;
        border-radius: 6px;
    }
}
</style>