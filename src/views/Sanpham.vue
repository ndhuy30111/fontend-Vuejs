<template>
  <div>
    <table>
      <tr>
        <th>Ten</th>
        <th>gia</th>
        <th>mo ta</th>
      </tr>
      <tr v-for="(item, key) in danhsach" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.shortintroduction }}</td>
      </tr>
    </table>
    <hr />
    <div>
      <form @submit.prevent="onSubmit">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">title</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="sanpham.title"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">price</label>
          <input
            type="number"
            class="form-control"
            id="inputPassword4"
            v-model="sanpham.price"
            min="10000"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">discount</label>
          <input
            type="number"
            class="form-control"
            id="inputAddress"
            v-model="sanpham.discount"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">mô tả ngắn</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            v-model="sanpham.shortintroduction"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Mô tả</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            v-model="sanpham.introduce"
          />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      danhsach: null,
      sanpham: {
        title: "",
        price: 10000,
        discount: 0,
        shortintroduction: "",
        introduce: "",
      },
    };
  },
  created() {
    const getDanhSach = async () => {
      await axios
        .get("http://localhost/shop7760/public/api/product")
        .then((response) => {
          console.log(response);
          this.danhsach = response.data;
        })
        .catch((response) => {
          alert(response.message);
        });
    };
    getDanhSach();
  },
  methods: {
    onSubmit() {
      if (this.sanpham.title == "" || this.sanpham.title == null) {
        alert("bạn chưa nhập tên sản phẩm");
      } else if (this.sanpham.price < 10000) {
        alert("Bạn vưa lòng nhập nhiều hơn 10000");
      } else {
        axios
          .post("http://localhost/shop7760/public/api/product", this.sanpham)
          .then(() => {
            alert("thanh cong");
            axios
            .get("http://localhost/shop7760/public/api/product")
            .then((response) => {

              this.danhsach = response.data;
            })
            .catch((response) => {
              alert(response.message);
            });
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
  },
  beforeUpdate() {},
};
</script>

<style>
</style>