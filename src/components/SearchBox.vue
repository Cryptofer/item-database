<template>
  <section id="search">
    <div class="search-input">
      <input type="text" placeholder="Search for any lunia box by its name..." v-model="query" />
    </div>
  </section>
</template>

<script>
import { API } from '@/services/api'
export default {
  data() {
    return {
      query: null
    }
  },
  watch: {
    query(value) {
      this.$emit('query', value)
      if(value) {
        API.get('/search/box/' + encodeURI(value)).then((result) => {
          this.$emit('results', {}) // Reset
          this.$emit('results', result.data)
        })
      } else {
        this.$emit('results', {})
      }
    }
  }
}
</script>

<style scoped>
#search {
  position: relative;
  display: flex;
  width: 100%;
}

#search .search-input {
  flex: 1;
}

#search .search-submit {
  padding-left: 1em;
}

.search-toggle {
  margin-right: 1em;
}

.search-toggle button {
  background: rgb(47, 69, 83);
  color: rgb(255, 255, 255);
  transition: background 300ms ease 0s, opacity 300ms ease 0s, transform 100ms ease 0s;
  font-weight: 600;
  padding: 0 30px;
  height: 50px;
  border: 0;
  outline: 0;
  cursor: pointer;
  touch-action: manipulation;
}

.search-toggle button:first-child {
  border-bottom-left-radius: 0.25em;
  border-top-left-radius: 0.25em;
}

.search-toggle button:last-child {
  border-bottom-right-radius: 0.25em;
  border-top-right-radius: 0.25em;
}

.search-input input[type="text"] {
  background: rgb(15, 33, 46);
  border: 1px solid rgb(47, 69, 83);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 2px 0px;
  color: rgb(255, 255, 255);
  outline: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding: 0 25px;
  border-radius: 0.25em;
  -moz-border-radius: 0.25em;
  -webkit-border-radius: 0.25em;
  box-sizing: border-box;
}

.search-input input[type="text"]:focus,
.search-input input[type="text"]:hover {
  border-color: rgb(85, 112, 134);
}

.search-submit button {
  background: rgb(0, 123, 255);
  color: rgb(255, 255, 255);
  transition: background 300ms ease 0s, opacity 300ms ease 0s, transform 100ms ease 0s;
  font-weight: 600;
  padding: 0 30px;
  height: 50px;
  border: 0;
  outline: 0;
  cursor: pointer;
  touch-action: manipulation;
  border-radius: 0.25em;
  -moz-border-radius: 0.25em;
  -webkit-border-radius: 0.25em;
}

.search-submit button:hover {
  background: rgb(0, 106, 219);
}

.search-toggle button.active {
  background: rgb(0, 123, 255);
  color: rgb(255, 255, 255);
}

::-webkit-input-placeholder {
color: rgba(255, 255, 255, 0.6);
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgba(255, 255, 255, 0.6);
}

::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
</style>