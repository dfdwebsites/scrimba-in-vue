<template>
  <div className="section-hero js-page">
    <h2 className="page-title">JavaScript</h2>
  </div>
  <section className="js-content">
    <h2>The amazing World of JS</h2>
    <p>
      Limit is the sky and your imagination of what you can do with this
      programming language.In Front-End Carrieer Path we took a deep dive in JS
      and learn the basic functions and methods.
    </p>
    <div className="counter-container">
      <h3>We learn how to create a single counter app</h3>
      <div className="counter">
        {{ fizfaz }}
        <button @click="adIncrease" className="counter-btn plus">+</button>
        <button @click="adDecrease" className="counter-btn minus">-</button>
      </div>
      <p>
        that displays fiz if the division with number 3 is perfect division or
        fuzz for the division with number 5 learning this way that you can
        manipulate the DOM however you like.
      </p>
    </div>
    <div className="carousel-container">
      <h3>How to make a carrousel of images</h3>
      <div className="carousel-img-container">
        <!-- <img src="@/assets/styles/img/2.jpg" alt="image of a movie" /> -->
        <img
          :src="require(`@/assets/styles/img/${imagesArray[activeImage]}`)"
          alt="image of a movie"
        />
        <button @click="swipeLeft" className="carousel-btn left">
          {{ "<" }}
        </button>
        <button @click="swipeRight" className="carousel-btn right">
          {{ ">" }}
        </button>
      </div>
    </div>
    <MemeGenerator />
    <div className="form-container">
      <br />
      <h3>How to get data from APIs</h3>
      <p className="api-description">Seach for a Tv Series below</p>
      <form className="seriesSearchForm" @submit.prevent="getShows">
        <input
          v-model="show"
          name="show"
          id="text"
          type="text"
          placeholder="Search for a Show"
        />
        <button type="submit">search</button>
      </form>
      <div v-if="shows" id="series-body">
        <Shows v-for="(show, i) in shows" :key="i" :show="show" />
        <p v-if="showSearchError">{{ showSearchError }}</p>
      </div>
    </div>

    <div className="react">
      <h2>React</h2>
      <p>
        Then we jump to the limitless world of js libraries with one of them is
        fantastic ReactJS API
      </p>
      <p>
        A complete course learning you the basics to create a React App but also
        advance classes that help you build full multy page Website/
        applications. I dont think I need to show any examples of React since
        this hole website is created by it
      </p>
    </div>
  </section>
</template>
<script>
/* eslint-disable */
import MemeGenerator from "@/components/MemeGenerator.vue";
import Shows from "@/components/Shows.vue";

export default {
  components: {
    MemeGenerator,
    Shows,
  },
  data() {
    return {
      advanceNumber: 0,
      advanceTotal: 0,
      imagesArray: ["1.jpg", "2.jpg", "3.jpg"],
      activeImage: 0,
      show: "",
      shows: null,
      showSearchError: "",
    };
  },
  methods: {
    adIncrease() {
      this.advanceTotal++;
    },
    adDecrease() {
      this.advanceTotal--;
    },
    swipeLeft() {
      this.activeImage--;
      if (this.activeImage < 0) {
        this.activeImage = this.imagesArray.length - 1;
      }
    },
    swipeRight() {
      this.activeImage++;
      if (this.activeImage > this.imagesArray.length - 1) {
        this.activeImage = 0;
      }
    },
    async getShows() {
      try {
        let result = await fetch(
          `https://api.tvmaze.com/search/shows?q=${this.show}`
        );
        let data = await result.json();
        let shows = data.map((show) => show.show);
        this.shows = shows;
        this.show = "";
        if (!this.shows.length) {
          this.showSearchError =
            "Something went wrong with the search, try diferent name";
        } else {
          this.showSearchError = "";
        }
      } catch (err) {
        console.log(err);
        this.showSearchError =
          "Something went wrong with the search, try diferent name";
      }
    },
  },
  computed: {
    fizfaz() {
      if (
        this.advanceTotal !== 0 &&
        this.advanceTotal % 3 === 0 &&
        this.advanceTotal % 5 === 0
      ) {
        this.advanceNumber = "fizz&fuzz";
      } else if (this.advanceTotal !== 0 && this.advanceTotal % 3 === 0) {
        this.advanceNumber = "fizz";
      } else if (this.advanceTotal !== 0 && this.advanceTotal % 5 === 0) {
        this.advanceNumber = "fuzz";
      } else this.advanceNumber = this.advanceTotal;
      return this.advanceNumber;
    },
  },
};
</script>
