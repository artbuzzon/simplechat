<template>
    <div :class="$style.container">

        <form @submit.prevent="submit">
            <div>
                <input :class="$style.formItem" type="text" placeholder="Имя" v-model="name" required/>
            </div>
            <div>
                <input :class="$style.formItem" type="text" placeholder="Ссылка на аватар" v-model="avatarUrl"
                       required/>
            </div>
            <button :class="$style.submitBtn" type="submit">Вход</button>
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
        submit() {
            this.$store.dispatch('registerUser', {
                name: this.name,
                avatarUrl: this.avatarUrl,
                id: Math.floor(Math.random() * 10000),
            }).then(() => {
                this.$router.push('chat');
            });
        },
    },
};
</script>

<style lang="scss" module>
.container {
    width: 100%;
    padding: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    padding: 0 8px;
}


.submitBtn {
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 1.5rem;
    line-height: 38px;
    padding: 0 1rem;
    color: white;
    min-width: 10rem;
}

@media only screen and (min-width: 460px) {
    .container {
        width: 50%;
        box-shadow: 0 .5rem 1rem lightgray;
    }
}

@media only screen and (min-width: 1000px) {
    .container {
        width: 30%;
        box-shadow: 0 .5rem 1rem lightgray;
    }
}
</style>