<template>
  <div class="movie container">
    <h1>영화검색</h1>
    <br>
    <SearchBar />
    <MovieList />
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar.vue'
import MovieList from '../components/MovieList.vue'

export default {
  components: {
    SearchBar,
    MovieList
  },
}
</script>

<style>

</style>