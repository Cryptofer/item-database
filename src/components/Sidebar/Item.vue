<template>
  <div class="sidebar-component">
    <div class="side-header">
      <div class="item-details">
        <div class="item-icon"><img :src="data.Icon ? `${imageUrl}/${data.Icon}` : getIconGroup(data.IconGroup)" /></div>
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
              {{ data.Hash }}
            </td>
          </tr>
          <tr>
            <td width="50%">
              <strong>Price</strong>
            </td>
            <td>
              {{ data.Price }}
            </td>
          </tr>
          <tr>
            <td width="50%">
              <strong>Maximum Stack</strong>
            </td>
            <td>
              {{ data.MaxCnt }}
            </td>
          </tr>
          <tr>
            <td width="50%">
              <strong>Market Category</strong>
            </td>
            <td>
              {{ data.MarketCategory }}
            </td>
          </tr>
          <tr>
            <td width="50%">
              <strong>Item Type</strong>
            </td>
            <td>
              {{ data.ItemType }}
            </td>
          </tr>
          <tr v-for="(attribute, index) in Object.entries(data.Attributes)" :key="index">
            <td width="50%">
              <strong>{{ attribute[0] }}</strong>
            </td>
            <td>{{ attribute[1] > 0 ? "True" : "False" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { imageUrl } from '@/services/api'
export default {
    props: ['data'],
    created() {
        console.log(this.data)
    },
    methods: {
      getIconGroup(iconGroup) {
        if(!iconGroup) {
            return imageUrl + '/Display/Textures/ItemIcon/Etc/Default.png'
        }

        return imageUrl + '/' + iconGroup[0].default[0]
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