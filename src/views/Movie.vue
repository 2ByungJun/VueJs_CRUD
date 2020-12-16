<template>
  <div class="movie container">
    <h1>Movie</h1>
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