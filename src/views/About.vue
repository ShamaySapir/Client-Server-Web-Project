<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <v-card color="primary" dark>
          <v-card-title
            >WELCOME TO RECIPYJAMOT<v-icon right small
              >copyright</v-icon
            ></v-card-title
          >
          <v-card-text>
            In this site your are able to explore new flavores, cherish the food
            you know and love and create your own new kind of food experience.
            With the vast selection dishes and recipes from different cuisines
            from around the world ReciPyjamot is the place where you can make
            your own taste.
          </v-card-text>
        </v-card>
        <br />
        <v-card color="secondary" dark>
          <v-card-title
            >RECIPYJAMOT<v-icon left small>copyright</v-icon> Technical
            Information</v-card-title
          >
          <v-card-text>
            This is a Web Full-Stack Project made in the Internet Programming
            Environments Course in the Ben-Gurion University. The project is
            structured as a Server-Client Single Page Application (SPA) using
            Vue.js and Vuetify.js for the Frontend design and Tedious, Axios and
            Node.js for handeling the Backend. Data Base provided by Azure. full
            list below.
          </v-card-text>
        </v-card>
        <br />
        <v-card color="secondary" dark>
          <v-card-title>Full library list:</v-card-title>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Vue.js</v-list-item-title>
              <v-list-item-subtitle
                >user interface and frontend design</v-list-item-subtitle
              >
              <v-list-item-title>Vuetify.js</v-list-item-title>
              <v-list-item-subtitle
                >user interface and frontend design</v-list-item-subtitle
              >
              <v-list-item-title>Crypto-js</v-list-item-title>
              <v-list-item-subtitle>password encryption</v-list-item-subtitle>
              <v-list-item-title>Axios</v-list-item-title>
              <v-list-item-subtitle>API requests</v-list-item-subtitle>
              <v-list-item-title>Mssql</v-list-item-title>
              <v-list-item-subtitle>DB managment</v-list-item-subtitle>
              <v-list-item-title>Sequlize</v-list-item-title>
              <v-list-item-subtitle>DB managment</v-list-item-subtitle>
              <v-list-item-title>Client-sessions</v-list-item-title>
              <v-list-item-subtitle
                >session and cookies menegment</v-list-item-subtitle
              >
              <v-list-item-title>Node.js</v-list-item-title>
              <v-list-item-subtitle>backend debug</v-list-item-subtitle>
              <v-list-item-title>Nodemon</v-list-item-title>
              <v-list-item-subtitle>backend debug</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs9>
                <v-card color="green" dark>
                  <v-card-title>Creator</v-card-title>
                  <v-img
                    src="https://ewscripps.brightspotcdn.com/74/8a/b8272ed446d5b12323d2c14c5401/denver-7-picasso-6.jpg"
                  ></v-img>
                  <v-card-text
                    ><strong>Haim Reyes</strong> from Israel<br />
                    reyes@post.bgu.ac.il</v-card-text
                  >
                </v-card>
              </v-flex>
              <v-flex d-flex xs9>
                <v-card color="green" dark>
                  <v-card-title>Creator</v-card-title>
                  <v-img
                    src="https://www.impel.eu/wp-content/uploads/2019/08/mediterranean-sea.jpg"
                  ></v-img>
                  <v-card-text
                    ><strong>Sapir Shamay</strong> from Israel<br />
                    sapirnag@post.bgu.ac.il</v-card-text
                  >
                </v-card>
              </v-flex>
              <v-flex d-flex xs9>
                <v-card color="green" dark>
                  <v-card-title>Special Thanks:</v-card-title>
                  <v-list-item two-line>
                    <v-list-item-content>
                      <v-list-item-title>Spoonacular</v-list-item-title>
                      <v-list-item-subtitle
                        >for the amazing recipes</v-list-item-subtitle
                      >
                      <v-list-item-title>The course's Staff</v-list-item-title>
                      <v-list-item-subtitle
                        >for the amazing knowledge</v-list-item-subtitle
                      >
                      <v-list-item-title>Microsoft Azure</v-list-item-title>
                      <v-list-item-subtitle
                        >for the amazing DB</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs10 md5>
        <v-layout row wrap>
          <v-flex>
            <v-layout row wrap>
              <v-flex d-flex xs10>
                <v-card color="primary" dark>
                  <v-card-title>Previews Works:</v-card-title>
                  <v-img
                    width="500px"
                    src="https://image.freepik.com/free-vector/businessman-with-multitasking_23-2147505928.jpg"
                  />
                  <v-card-actions
                    ><v-btn
                      href="https://sise-web-development-environments.github.io/assignment1-HaimReyes/"
                      target="_blank"
                      >Haim website</v-btn
                    >
                    <v-btn
                      href="https://sise-web-development-environments.github.io/assignment1-ShamaySapir/"
                      target="_blank"
                      >Sapir website</v-btn
                    >
                    <v-btn
                      href="https://sise-web-development-environments.github.io/assignment2-hapyjamot/"
                      target="_blank"
                      >The Packman Game</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({}),
};
</script>
