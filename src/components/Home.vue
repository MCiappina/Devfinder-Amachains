<template>
  <div>
    <div class="header">
      <h1>Devfinder</h1>
      <p>Find relevant developers from Github</p>
    </div>
    <div class="main">
        <SearchBars />
        <CardList />
    </div>
  </div>
</template>

<script>
import CardList from "./CardList";
import SearchBars from "./SearchBars";

export default {
  name: "Home",
  data() {
    return {
      cards: [
        {
          id: 1,
          name: "Cerjo",
          image:
            "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/80220559_3012185225565745_623953486667847018_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeFTjR9ucD2QWvW7IvYgrTJo4k2ufwVBgm_iTa5_BUGCb4phwjvPSRxnOvoYXKryKn_zJrrBIDajqxp1irTLKgyl&_nc_ohc=ay-pAbpbSAcAX9EHyq2&_nc_ht=scontent.fcgh10-1.fna&oh=b4e5027a514a258bb52dbf91322bd586&oe=5F650495",
          location: "São Paulo",
          bio:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          followers: 20,
          repositories: 132,
        },
        {
          id: 2,
          name: "Dani",
          image:
            "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/74187205_2508932102531625_5177379068676407296_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeHHmljN9P9PuUXqLx1sPibDFMufeXauiyYUy595dq6LJoWCk95nIJe_3-TFTAnj0_p8YenXJSvMx92eilfD56bb&_nc_ohc=cIOzxphFZy0AX_mG1yB&_nc_ht=scontent.fcgh10-1.fna&oh=aa6736487076c31e8ea3a11f66407aa5&oe=5F638B43",
          location: "São Paulo",
          bio:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          followers: 20,
          repositories: 132,
        },
        {
          id: 3,
          name: "Vito",
          image:
            "https://scontent.fcgh10-1.fna.fbcdn.net/v/t1.0-9/10438133_868932609783612_4167244438673499663_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeFXU20e7ULEnW4qP_92cLNsZp7LNTEfT39mnss1MR9Pf1ozc1K2YH7g8VyXcJCe3VH4fPl_gvf0oKoJyWZb1T5V&_nc_ohc=2x39_dhph7oAX9bjC7B&_nc_ht=scontent.fcgh10-1.fna&oh=eea1856b882a8703f521b9bcabd80d88&oe=5F63B865",
          location: "Londres",
          bio:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          followers: 20,
          repositories: 132,
        },
      ],
      language: "",
      location: "",
    };
  },
  components: {
      SearchBars, CardList
  }
};
</script>

<style scoped>
div {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>