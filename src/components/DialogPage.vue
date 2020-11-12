<template>
    <div :class="$style.container">
        <MediaBox background-color="#83d0f2" :user="user"/>
        <MessagesBox v-chat-scroll="{always: true, smooth: true}"  :user-id="user.id" />
        <InputBox :user-id="user.id"/>
    </div>
</template>

<script>
import InputBox from '@/components/InputBox';
import MessagesBox from '@/components/MessagesBox';
import MediaBox from '@/components/MediaBox';

export default {
    name: 'TheDialogsPage',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    components: {MediaBox, MessagesBox, InputBox},
};
</script>

<style lang="scss" module>
.container {
    width: 100%;
    background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/2d9dd173426833.5c08f5634ff45.png");
    background-size: 180px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(50vh - 3rem);

    &:not(:last-child) {
        border-right: 1px solid lighten(lightgrey, 10);
    }
}

@media only screen and (min-width: 50em) {
    .container {
        height: 100%;
    }
}
</style>