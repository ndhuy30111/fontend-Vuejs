<template>
  <div>
    <span>{{ sanpham.ten }}</span
    ><br />
    <span>{{ sanpham.tien }}</span>
    <hr />
    <form @submit.prevent="onSubmit">
      ten <input type="text" v-model="sanphamnew.ten" /> <br />
      tien <input type="number" v-model="sanphamnew.tien" />
      <input type="submit" value="submit">
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: "",
     
      sanpham: {
        ten: "",
        tien: "",
      },
       sanphamnew: {
        ten: "",
        tien: "",
      },
    };
  },
  created() {
    const getSanpham = async () => {
      await axios
        .get("http://127.0.0.1:8000/api/sanpham/" + 1)
        .then((response) => {
          this.sanpham = response.data;
          this.sanphamnew = this.sanpham;
        });
    };
    getSanpham();
  },
  methods:{
      onSubmit(){
          axios
        .put("http://127.0.0.1:8000/api/sanpham/" + 1,this.sanphamnew)
        .then((response) => {
        console.log(response)
          alert(response.data.message)
        }).catch((error)=>{
            console.log(error.response);
        });
      }
  }
};
</script>

<style>
</style>