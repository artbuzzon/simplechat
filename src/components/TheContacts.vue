<template>
    <div :class="$style.container">
        <MediaBox background-color="white" v-for="user in users" :user="user" :key="user.name"/>
    </div>
</template>

<script>
import MediaBox from '@/components/MediaBox';
import {mapGetters} from 'vuex';

export default {
    name: 'TheContacts',
    components: {MediaBox},
    computed: {
        ...mapGetters(['users']),
    },
};
</script>

<style lang="scss" module>
.container {
    display: flex;
    min-width: 16%;
    border-right: 1px solid rgba(lightgrey, .4);
}

@media only screen and (min-width: 50em) {
    .container {
        flex-direction: column;
        border-bottom: 1px solid rgba(lightgrey, .4);
    }
}
</style>