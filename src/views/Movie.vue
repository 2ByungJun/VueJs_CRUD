<template>
  <div class="movie container">
    <SearchBar />
    <MovieList />
  </div>
</template>

<script>
import SearchBar from '../components/movie/SearchBar.vue'
import MovieList from '../components/movie/MovieList.vue'

export default {
  components: {
    SearchBar,
    MovieList
  },
}
</script>

<style>

</style>