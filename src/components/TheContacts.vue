<template>
    <div :class="$style.container">
        <MediaBox v-for="user in users" :user="user" :key="user.name"/>
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
    display: block;
    border-right: 1px solid rgba(lightgrey, .4);
    width: 20%;
    height: 100%;
}

@media only screen and  (min-width: 1300px) {
    .container {
        display: none;
    }
}
</style>