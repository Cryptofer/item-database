<template>
  <section id="results">
      <div class="result" v-for="(item, index) in items" :key="index" @click="openContents(item.Id)">
          <div class="item-icon">
            <img :src="`${imageUrl}/${item.Icon}`" />
          </div>
          <div class="item-details">
            <h2>{{ item.DisplayName }}</h2>
            <p>{{ item.Description }}</p>
          </div>
      </div>
  </section>
</template>

<script>
import { imageUrl } from '@/services/api'
export default {
  props: ['data'],
  methods: {
    openContents(id) {
      this.$emit('openModal', id)
    }
  },
  computed: {
    imageUrl() {
      return imageUrl
    },
    items() {
      if(this.data && this.data.docs) {
        return this.data.docs
      }

      return []
    }
  }
}
</script>

<style scoped>
#results {
  margin-top: 1em;
  margin-bottom: 2em;
}

.badge {
  background-color: rgb(15, 33, 46);
  color: #fff;
  display: inline-block;
  padding: 3px 8px;
  text-align: center;
  border-radius: 25em;
  font-size: 12px;
  font-weight: 400;
}

.result {
  display: flex;
  align-items: center;
  background: rgb(47, 69, 83);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 2px 0px;
  transition: background 300ms ease 0s, opacity 300ms ease 0s, transform 100ms ease 0s;
  padding: 1em 1em;
  margin-bottom: 1em;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  cursor: pointer;
}

.result:hover {
  background: rgb(66, 90, 108);
}

.result .item-icon {
  padding-right: 1em;
}

.result .item-details {
  flex: 90%;
}
.result .item-details h2,
.result .item-details p {
  margin: 0;
}

.result .item-details h2{ 
  font-size: 1.1rem;
}

.result .item-details p {
  color:rgb(177, 186, 211)
}
</style>