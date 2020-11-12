<template>
    <div :class="$style.container" :style="{backgroundColor}" @click="setUserId">
        <div :class="$style.avatarContainer" >
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
        backgroundColor: {
            type: String,
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
    cursor: pointer;

    .avatarContainer img {
        margin: .8rem;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
    }
}

@media only screen and (min-width: 40em) {
    .container {
        flex-direction: row;
    }

    .avatarContainer img {
        margin: 1rem;
    }
}
</style>