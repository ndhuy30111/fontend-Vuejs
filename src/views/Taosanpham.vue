
<template>
  <div>
    <h3>tao san pham</h3>
    <span class="content__ten">ten </span> <input type="text" v-model="ten" />
    <br />
    {{ ten }}
    <br />
    <span class="content__ten">gia </span> <input type="number" v-model="gia" />
    <br />
    <span class="content__ten">mota </span>
    <textarea v-model="mota"> </textarea>
    <br />
    <span class="content__ten">hinh </span> <input type="text" v-model="hinh" />
    <br />
    <button @click="submit">xac thuc</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <div>
      xem danh sach san pham

      <div v-for="item in sanpham" v-bind:key="item">
        <a :href="'/xemsanpham/' + item.id">
          <span>
            {{ item.ten }}
          </span>
        </a>
        <button @click="xoaSanpham(item.id)">xoá</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ten: "",
      gia: "",
      mota: "",
      hinh: "",
      sanpham: null,
    };
  },
  methods: {
    submit() {
      const sanpham = {
        ten: this.ten,
        gia: this.gia,
        mota: this.mota,
        hinh: this.hinh,
      };
      console.log(sanpham);
    },
    xoaSanpham(id) {
      axios
        .delete("http://127.0.0.1:8000/api/sanpham/" + id)
        .then((response) => {
          alert(response.data.message);
          axios.get("http://127.0.0.1:8000/api/sanpham").then((response) => {
            this.sanpham = response.data;
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  created() {
    const getSanpham = async () => {
      await axios.get("http://127.0.0.1:8000/api/sanpham").then((response) => {
        this.sanpham = response.data;
      });
    };
    getSanpham();
  },
};
</script>

<style scoped>
.content__ten {
  font-weight: bold;
}
</style>
