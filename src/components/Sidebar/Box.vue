<template>
  <div class="sidebar-component">
    <div class="side-header">
      <div class="item-details">
        <div class="item-icon"><img :src="`${imageUrl}/${data.Icon}`" /></div>
        <div class="item-name">{{ data.DisplayName }}</div>
      </div>
      <p class="description">{{ data.Description }}</p>
      <p class="description" v-if="!data.Description">No description for this item.</p>
    </div>
    <div class="item-container">
      <table cellpadding="5" cellspacing="0" class="table">
        <tbody>
          <tr>
            <td width="50%">
              <strong>Hash</strong>
            </td>
            <td>
              {{ data.hash }}
            </td>
          </tr>
          <tr>
            <td width="50%">
              <strong>Automatic Identify</strong>
            </td>
            <td>
              {{ data.automatic_identify > 0 ? 'True' : 'False' }}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Class Rate</strong>
            </td>
            <td>
              {{ (data.class_specialized_rate * 100).toFixed(2) }}%
            </td>
          </tr>
        </tbody>
      </table>
      <section v-for="(level, levelKey) in data.items[0]" :key="levelKey">
        <h2>Level {{ levelKey }}+</h2>
        <table cellpadding="5" cellspacing="0" class="table item-table">
          <thead>
            <tr>
              <th width="15%" v-tooltip="'Probability'"><fa :icon="['fas', 'dice']" /></th>
              <th width="10%" align="center"></th>
              <th width="70%" align="left">Item</th>
            </tr>
          </thead>
          <tbody>
            <tr class="link" v-for="(item, index) in level" :key="index" @click="openItem(item)">
              <td align="center">{{ (item.Probability * 100).toFixed(4) }}%</td>
              <td align="center">{{ item.StackedCount }}</td>
              <td class="item-column">
                <div class="item-icon">
                  <img :src="item.Icon ? `${imageUrl}/${item.Icon}` : getIconGroup(item.IconGroup)" />
                </div>
                <div class="item-name">
                  {{ item.DisplayName }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
import { Box, Item, imageUrl } from '@/services/api'
export default {
    props: ['data'],
    methods: {
      openItem(item) {
        if(item.is_box) {
          Box.get(item.Id).then((result) => {
              this.$emit('openItem', {
                open: false,
                type: 'box',
                data: result.data
              })
          })
        } else {
          Item.get(item.Id).then((result) => {
            this.$emit('openItem', {
              open: false,
              type: 'item',
              data: result.data
            })
          })
        }
      },
      getIconGroup(iconGroup) {
        return imageUrl + '/' + iconGroup.default[0]
      }
    },
    computed: {
      imageUrl() {
        return imageUrl
      }
    }
}
</script>

<style>

</style>