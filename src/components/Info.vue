<template>
    <div class="item-info-wrapper">
      <div class="side-actions">
        <button @click="closeAll"><fa :icon="['fas', 'times']" /></button>
        <button @click="closeItem(id)" v-if="id > 0"><fa :icon="['fas', 'chevron-left']" /></button>
      </div>
      <component :is="component" :data="details.data" @openItem="openItem" />
    </div>
</template>

<script>
import Box from '@/components/Sidebar/Box'
import Item from '@/components/Sidebar/Item'
export default {
  name: 'sidebar',
  props: ['id', 'details'],
  methods: {
    openItem(item) {
      this.$emit('openItem', item) //Event bus
    },
    closeItem(key) {
      this.$emit('closeItem', key)
    },
    closeAll() {
      this.$emit('closeAll')
    }
  },
  computed: {
    component() {
      if(this.details.type == 'box') {
        return Box
      } else if(this.details.type == 'item') {
        return Item
      }

      return null
    }
  }
}
</script>