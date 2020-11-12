<template>
    <div :class="$style.container">
        <form @submit.prevent="submit">
            <div>
                <input :class="$style.formItem"
                       type="text"
                       placeholder="Имя"
                       v-model="name"
                       required/>
            </div>
            <div>
                <input :class="$style.formItem"
                       type="text"
                       placeholder="Ссылка на аватар"
                       v-model="avatarUrl"
                       required/>
            </div>
            <button :class="$style.submitBtn"
                    type="submit">
                Вход
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'TheLogin',
    data() {
        return {
            name: '',
            avatarUrl: '',
        };
    },
    methods: {
        generateUserId() {
            return Math.floor(Math.random() * 10000).toString();
        },
        submit() {
            this.$store.dispatch('registerUser', {
                name: this.name,
                avatarUrl: this.avatarUrl,
                id: this.generateUserId,
            }).then(() => {
                this.$router.push('chat');
            });
        },
    },
};
</script>

<style lang="scss" module>
.container {
    padding: 6rem 4rem;
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
}

.formItem {
    margin-bottom: 2rem;
    background: #FFFFFF;
    border: 1px solid #dddfe2;
    border-radius: 3px;
    color: #1d2129;
    width: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    min-height: 32px;
    padding: 0 1rem;
}


.submitBtn {
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 1.4rem;
    line-height: 32px;
    color: white;
    min-width: 8rem;
}

@media only screen and (min-width: 30rem) {
    .container {
        width: 70%;
        box-shadow: 0 .5rem 1rem lightgray;
    }
}

@media only screen and (min-width: 60rem) {
    .container {
        width: 25%;
        box-shadow: 0 .5rem 1rem lightgray;
    }
}
</style>