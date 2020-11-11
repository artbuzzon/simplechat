<template>
    <div :class="$style.container">
        <div :class="$style.messageBox">
            <textarea placeholder="Отправьте сообщение..." v-model="message" :class="$style.messageInput"
                      rows="3"></textarea>
        </div>
        <div :class="$style.iconArrow" @click="sendMessage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#606770"/>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputBox',
    props: {
        userId: {
            type: [String, Number],
            required: true,
        },
    },
    data() {
        return {
            message: '',
        };
    },
    methods: {
        sendMessage() {
            this.$store.dispatch('sendMessage', {
                text: this.message,
                userId: this.userId,
            })
                    .then(() => {
                        this.message = '';
                    });
        },
    },
};
</script>

<style lang="scss" module>
.container {
    border-top: 1px solid rgba(lightgrey, .5);
    background-color: white;
    padding: 2rem;
    //position: absolute;
    //bottom: 0;
    //left: 0;
    //right: 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}

.messageBox {
    padding: 1rem;
    width: 100%;
}

.iconArrow {
    align-self: start;
    padding: 1rem;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        transform: translateY(-.3rem);

    }

    &:active {
        transform: translateY(0);
    }
}


.messageInput {
    resize: none;
    padding: 1rem;
    border-radius: 3px;
    width: 100%;
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    border: 1px solid rgba(lightgrey, .7);
}
</style>