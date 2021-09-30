<template>
    <paginate
        :page-count="result.totalPages"
        :page-range="3"
        :click-handler="paginate"
        :prev-text="'&laquo;'"
        :next-text="'&raquo;'"
        :container-class="'pagination'"
        >
    </paginate>
</template>

<script>
import { API } from '@/services/api'
export default {
    props: ['query', 'result'],
    name: 'Pagination',
    methods: {
        paginate(e) {
            this.$parent.$refs.app.scrollTo({ top: 0, behavior: 'smooth' });
            API.get('/search/box/' + encodeURI(this.query) + "?page=" + (e - 1)).then((result) => {
                this.$emit('results', result.data)
            })
        }
    }
}
</script>

<style>

</style>