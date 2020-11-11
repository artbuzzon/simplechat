<template>
    <div :class="$style.container">
        <div
                v-for="user in users"
                :key="user.id"
                :class="$style.chatContainer">
            <MediaBox :user="user"/>
            <MessagesBox :user-id="user.id"/>
            <InputBox :user-id="user.id"/>
        </div>
    </div>
</template>

<script>
import InputBox from '@/components/InputBox';
import MessagesBox from '@/components/MessagesBox';
import MediaBox from '@/components/MediaBox';

export default {
    name: 'TheDialogWindow',
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    components: {MediaBox, MessagesBox, InputBox,},
};
</script>

<style lang="scss" module>
.container {
    width: 100%;
    //height: 100%;
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/2d9dd173426833.5c08f5634ff45.png");
    background-size: 180px;
    position: relative;
    display: flex;
}

.chatContainer {
    flex: auto;
    position: relative;

    &:not(:last-child) {
        border-right: 3px solid lighten(lightgrey, 7);
    }
}
</style>