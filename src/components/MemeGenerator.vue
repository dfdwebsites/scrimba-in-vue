<template>
  <h3>How to create a meme Generator</h3>
  <div className="memes-form">
    <input
      type="text"
      placeholder="text up"
      name="topText"
      v-model="meme.topText"
    />
    <input
      type="text"
      placeholder="text down"
      name="bottomText"
      v-model="meme.bottomText"
    />
    <button @click="getImage" className="memes-btn">
      Get a new meme image 🖼
    </button>
  </div>
  <div className="memes-img-container">
    <img className="meme-img" :src="meme.randomImage" />
    <h2 className="meme-text top">{{ meme.topText }}</h2>
    <h2 className="meme-text bottom">{{ meme.bottomText }}</h2>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "MemeGenerator",
  data() {
    return {
      meme: {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
      },
      allMemes: [],
    };
  },
  mounted() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        this.allMemes = data.data.memes;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    getImage() {
      const randomNumer = Math.floor(Math.random() * this.allMemes.length + 1);
      const newUrl = this.allMemes[randomNumer].url;
      this.meme = { ...this.meme, randomImage: newUrl };
    },
  },
};
</script>
