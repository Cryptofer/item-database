<template>
  <div id="app" ref="app">
    <div class="app-wrapper" :class="{ 'minified': items.length > 0 }">
      <div class="result-wrapper">
        <div class="content">
          <SearchBox @query="query = $event" @results="updateResults" /> <!-- Directly bind emitted data -->
          <Results :data="result" @openModal="openItem" />
          <Pagination :result="result" :query="query" @results="updateResults" v-if="result.docs" />
        </div>
      </div>
    </div>
    <Info v-for="(details, key) in items" 
      :key="key" 
      :details="details"
      :id="key"
      :class="{ 'open': details.open }" 
      @openItem="pushItem"
      @closeItem="closeItem"
      @closeAll="closeItems"
    />
  </div>
</template>

<script>
import { SearchBox, Results, Info, Pagination } from './components'
export default {
  name: 'App',
  data() {
    return {
      items: [],
      result: {},
      searchType: 'box',
      query: null,
      minify: true,
    }
  },
  methods: {
    openItem(id) {
      if(this.items.length > 0 ) {
        this.items = this.items.map(function(x) { x.open = false; return x });
        setTimeout(() => {
          this.items = []
        }, 100)
      }
      
      setTimeout(() => {
        let item = this.result.docs.find(doc => doc.Id == id)
        this.items.push({
          open: false,
          type: this.searchType,
          data: item
        })
      }, (this.items.length > 0 ? 100 : 0))

      setTimeout(() => {
        this.items[this.items.length - 1].open = true
      }, (this.items.length > 0 ? 200 : 100))
    },
    pushItem(item) {
      this.items.push(item)

      setTimeout(() => {
        this.items[this.items.length - 1].open = true
      }, 100)
    },
    closeItems() {
      this.items = this.items.map(function(x) { x.open = false; return x });

      setTimeout(() => {
        this.items = []
      }, 100) //Remove from array only after the animation
    },
    closeItem(index) {
      this.items[index].open = false

      setTimeout(() => {
        this.items.splice(index)
      }, 100) //Remove from array only after the animation
    },
    updateResults(results) {
      this.result = results
    },
    getIconGroup(iconGroup) {
      return this.imageUrl + '/' + iconGroup.default[0]
    }
  },
  components: {
    SearchBox,
    Pagination,
    Results,
    Info
  }
}
</script>

<style>
@import url('./assets/css/main.css');
@import url('./assets/css/responsive.css');
</style>
