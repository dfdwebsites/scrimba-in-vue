<template>
  <main>
    <img
      className="logo-anim"
      src="@/assets/styles/img/logo.png"
      alt="logo of DRD"
    />
    <h1 className="hero-title">
      Welcome to,<br />
      Scrimba Showcase!
    </h1>
    <Matrix />
    <section className="home-content">
      <h2>Lets talk about web learning</h2>
      <p>
        There are many ways to use the internet in our days, you can learn
        skills that can help you from an ordinary daily problem that you may
        have at that time to qualify for a job at that area. There are many
        sources to learn code online but Scrimba's courses have a
        <strong>massive</strong> advandange over the others and this is their
        amazing platform
      </p>
      <div>
        <img
          src="@/assets/styles/img/scrimba-platform.png"
          alt="scrimba platform"
        />
        <p className="img-details">This is how scrimba platform is looking</p>
      </div>
      <p>
        Scrimba's platform allows the students to interact live with the code
        and watching live the changes that they apply. This gives the oportunity
        to play around and test untill you fully understand the project before
        you go on since people are learning in different speeds.
      </p>
      <h2>HTML5 && CSS3</h2>
      <p>
        These 2 make the main structure for all websites. HTML is the language
        that shows the data and CSS is the one that determines of their looks
        (color,size, etc..)
      </p>
      <router-link to="/css"
        ><img
          className="img-link"
          src="@/assets/styles/img/css-title.png"
          alt="code of css in the background and logo "
        />
      </router-link>
      <p>
        In the awsome <strong>Front-End Carrier Path</strong> course you learn
        everything you need to know so you can start working with HTML and CSS
        you can take a closer look what you can achive
        <router-link className="link-to-css" to="/css">here</router-link>.
      </p>
      <h2>JavaScript</h2>
      <p>
        JavaScript often abbreviated JS is bread and butter of websites that
        interact with the user. JS can can calculate, manipulate and validate
        data ,update and change both HTML and CSS
      </p>
      <router-link to="/js">
        <img
          className="img-link"
          src="@/assets/styles/img/js-title.png"
          alt="code of js in the background and logo "
      /></router-link>
      <p>
        <strong>Front-End Carrier Path</strong> will provide you with the basic
        skills you need so you can create impresive interactions with the user
        on your project and create a dynamic website overall
      </p>
      <p>
        You can check few of the skills
        <router-link className="link-to-css" to="/js">here</router-link>.
      </p>
      <h2>Games</h2>
      <p>
        This is where the fun begins and why I think
        <strong>Front-End Carrier Path</strong> of Scrimba has amazing results.
        We are creating little fun games using JS in order to learn and
        understand more complex fuctions and methods of the language and since
        we are doing it in this fun way keeps the learing fun and easy.
      </p>
      <div className="display-box">
        <div className="pad5">
          <h3 className="">Snake</h3>
          <img src="@/assets/styles/img/snake.png" alt="" />
        </div>
        <div className="pad5">
          <h3 className="">Pac-Man</h3>
          <img src="@/assets/styles/img/pac-man.png" alt="" />
        </div>
        <div className="pad5">
          <h3>Space</h3>
          <img src="@/assets/styles/img/space.png" alt="" />
        </div>
        <div className="pad5">
          <h3 className="">Super-Mario</h3>
          <img src="@/assets/styles/img/mario-img.png" alt="" />
        </div>
        <div className="pad5">
          <h3 className="">Cards</h3>
          <img src="@/assets/styles/img/cards.png" alt="" />
        </div>
        <div className="pad5">
          <h3>Quiz</h3>
          <img src="@/assets/styles/img/quiz.png" alt="" />
        </div>
      </div>
      <p>
        <router-link className="link-to-css" to="/games">Here</router-link> is
        some of the projects we did in the course and more
      </p>
    </section>
  </main>
</template>

<script>
/* eslint-disable */
import Matrix from "@/components/Matrix.vue";
export default {
  name: "HomeView",
  components: {
    Matrix,
  },
};
</script>
