<template>
    <div :class="$style.container">
        <TheContacts/>
        <DialogPage v-for="user in users" :key="user.id" :user="user"/>
    </div>
</template>

<script>
import TheContacts from '@/components/TheContacts';
import DialogPage from '@/components/DialogPage';

export default {
    name: 'TheChat',
    computed: {
        users() {
            return this.$store.state.users;
        },
    },
    components: {DialogPage, TheContacts},
};
</script>

<style lang="scss" module>
.container {
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}


@media only screen and (min-width: 50em) {
    .container {
        box-shadow: 0 .5rem 1.5rem rgba(#000, .2);
        flex-direction: row;
    }
}

@media only screen and (min-width: 70em) {
    .container {
        width: 80%;
        height: 80%;
    }
}

</style>