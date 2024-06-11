<template>
  <div>
    <TheLogo :headerText=headerText />
    <!-- <div>
      <h2>The beginning is near!</h2>
      <p>The new bulletin feature shall be added to <strong>index.vue</strong></p>
      <p>And do not forget: DO NOT USE H1 headers - start with H2!, use the Logo component for title!</p>
    </div> -->
    <h2>ゆっくり書き込んでいってね</h2>
    <!--<h2>投稿一覧</h2>-->
    <div v-for="post in posts" :key="post.name">
      <hr>
      <span>名前：{{post.name}}</span><br>
      <!-- 2024/06/07(金)08:02:13みたいな表示-->
      <p>{{post.date+post.day+' '+post.time}}</p>
      <p>{{post.comment}}</p>
    </div>
    <br><br>

    <!-- <div>名前：<input type="text" v-model="name"></div> -->
    <v-text-field label="名前" v-model="name" />
    <!-- 内容
    <div><textarea v-model="comment"></textarea></div> -->
    <v-textarea label="コメント" v-model="comment" />
    <br>
    <v-btn @click="submitPosts">投稿する</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: [],
      headerText: 'Bulletin'
    };
  },
  head () {
    return {
      title: 'Bulletin Board'
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    submitPosts() {
      var days = ["日","月","火","水","木","金","土"]
      var now = new Date();
      var date = (now.getFullYear()).toString() +'/'+ ('0'+(now.getMonth()+1)).slice(-2) +'/'+ ('0'+now.getDate()).slice(-2);
      var day = '('+days[now.getDay()]+')';
      var time = ('0'+now.getHours()).slice(-2)+':'+('0'+now.getMinutes()).slice(-2)+':'+('0'+now.getSeconds()).slice(-2);
      var ts = this.$fireModule.firestore.Timestamp.fromDate(new Date());

      this.$fire.firestore.collection('posts').add({
        name: this.name,
        comment: this.comment,
        date: date,
        day: day,
        time: time,
        timestamp: ts,
      })
        .then(() => {
        // this.posts = [];
        // this.getPosts();
          this.posts.push({ "comment": this.comment, "name": this.name, "timestamp": ts, "day": day, "time": time, "date": date })
          this.name = ''
          this.comment = ''
        })
    },
    getPosts() {
      this.$fire.firestore.collection('posts').orderBy('timestamp', 'asc').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.posts.push(doc.data());
          // this.posts = doc.data();
        })
      });
    }
  }
}
</script>

<style lang="scss">
/* 必要に応じてスタイルを追加 */
</style>
