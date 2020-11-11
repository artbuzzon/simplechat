<template>
    <div>
        <div :class="$style.container">
            <TheContacts/>
            <TheDialogWindow/>
        </div>
    </div>

</template>

<script>
import TheContacts from '@/components/TheContacts';
import TheDialogWindow from '@/components/TheDialogsPage';

export default {
    name: 'TheChat',
    components: {TheDialogWindow, TheContacts},
};
</script>

<style lang="scss" module>
.container {
    overflow: hidden;
    z-index: 123123;
    display: flex;
    position: absolute;
    top: 4rem;
    left: 6rem;
    bottom: 4rem;
    right: 6rem;
    box-shadow: 0 1rem 2rem rgba(#000, .2);
}
</style>