<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
}

html {
    font-family: 'Roboto', sans-serif;
    color: #26292c;
    font-size: 62.5%;
}

body {
    font-size: 1.3rem;
}

#app {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lighten(#f8f9fa, 10);
}

</style>
