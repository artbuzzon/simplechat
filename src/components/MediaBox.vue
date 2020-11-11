<template>
    <div :class="$style.container" @click="setUserId">
        <div :class="$style.avatarContainer">
            <img @error="useDefaultAvatar" :src="user.avatarUrl">
        </div>
        <div :class="$style.user">
            <div :class="$style.userName">{{ user.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            defaultAvatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png',
        };
    },
    name: 'MediaBox',
    methods: {
        setUserId() {
            this.$store.commit('SET_SELECTED_USER_ID', this.user.id);
        },
        useDefaultAvatar() {
            this.user.avatarUrl = this.defaultAvatar;
        },
    },
};
</script>

<style lang="scss" module>
.container {
    border-bottom: 1px solid rgba(lightgrey, .5);
    display: flex;
    align-items: center;
    background-color: white;
    cursor: pointer;

    .avatarContainer img {
        margin: 1rem;
        width: 3rem;
        height: 3rem;
    }
}
</style>