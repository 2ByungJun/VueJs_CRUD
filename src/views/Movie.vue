<template>
  <div class="movie container">
    <h1>영화검색</h1>
    <br>
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