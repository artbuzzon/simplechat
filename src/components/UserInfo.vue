<template>
    <div :class="$style.container">
        <MediaBox/>
    </div>
</template>

<script>
import MediaBox from '@/components/MediaBox';

export default {
    name: 'UserInfo',
    components: {MediaBox},
};
</script>

<style lang="scss" module>
.container {
    position: absolute;
    background-color: red;
}
</style>