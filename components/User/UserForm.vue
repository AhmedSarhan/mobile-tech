<template>
  <form @submit.prevent="userSubmitHandler">
    <div class="row my-2">
      <div class="col-md-6">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model.trim="$v.form.firstName.$model"
          />
          <div
            class="error"
            v-if="form.firstName.length && !$v.form.firstName.required"
          >
            First Name is required
          </div>
          <div class="error" v-if="!$v.form.firstName.minLength">
            First Name must have at least
            {{ $v.form.firstName.$params.minLength.min }} letters.
          </div>
          <div class="error" v-if="!$v.form.firstName.maxLength">
            First Name must have at most
            {{ $v.form.firstName.$params.maxLength.max }} letters.
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model.trim="$v.form.lastName.$model"
          />
          <div
            class="error"
            v-if="form.lastName.length && !$v.form.lastName.required"
          >
            Last Name is required
          </div>
          <div class="error" v-if="!$v.form.lastName.minLength">
            Last Name must have at least
            {{ $v.form.lastName.$params.minLength.min }} letters.
          </div>
          <div class="error" v-if="!$v.form.lastName.maxLength">
            Last Name must have at most
            {{ $v.form.lastName.$params.maxLength.max }} letters.
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-6">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            v-model.trim="$v.form.email.$model"
          />
          <div
            class="error"
            v-if="form.email.length && !$v.form.email.required"
          >
            Email is required
          </div>
          <div class="error" v-if="!$v.form.email.email">
            Please Enter A Valid Email
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input
            type="text"
            class="form-control"
            placeholder="Phone Number"
            v-model.trim="$v.form.phone.$model"
          />
          <div
            class="error"
            v-if="form.phone.length && !$v.form.phone.required"
          >
            Phone Number is required
          </div>
          <div class="error" v-if="!$v.form.phone.integer">
            Phone Number must be Numbers Only.
          </div>
          <div
            class="error"
            v-if="$v.form.phone.integer && !$v.form.phone.minLength"
          >
            Phone Number must have at least
            {{ $v.form.phone.$params.minLength.min }} Numbers.
          </div>
          <div
            class="error"
            v-if="$v.form.phone.integer && !$v.form.phone.maxLength"
          >
            Phone Number must have at most
            {{ $v.form.phone.$params.maxLength.max }} Numbers.
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-md-6">
        <div class="form-group">
          <label for="city">City</label>
          <input
            type="text"
            class="form-control"
            placeholder="City"
            v-model.trim="$v.form.city.$model"
          />
          <div class="error" v-if="form.city.length && !$v.form.city.required">
            City is required
          </div>
          <div class="error" v-if="!$v.form.city.minLength">
            City must have at least
            {{ $v.form.city.$params.minLength.min }} letters.
          </div>
          <div class="error" v-if="!$v.form.city.maxLength">
            City must have at most
            {{ $v.form.city.$params.maxLength.max }} letters.
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-group">
          <label for="street">Street</label>
          <input
            type="text"
            class="form-control"
            placeholder="Street"
            v-model.trim="$v.form.street.$model"
          />
          <div
            class="error"
            v-if="form.street.length && !$v.form.street.required"
          >
            Street is required
          </div>
          <div class="error" v-if="!$v.form.street.minLength">
            Street must have at least
            {{ $v.form.street.$params.minLength.min }} letters.
          </div>
          <div class="error" v-if="!$v.form.street.maxLength">
            Street must have at most
            {{ $v.form.street.$params.maxLength.max }} letters.
          </div>
        </div>
      </div>
    </div>
    <button
      class="btn btn-success"
      :disabled="$v.form.$invalid"
      v-if="checkout"
    >
      Confirm Order
    </button>
    <button class="btn btn-custom-primary" v-else @click="updateUser">
      Update Profile
    </button>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { mapActions, mapState } from "vuex";
import {
  required,
  maxLength,
  minLength,
  email,
  integer,
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  props: ["checkout"],
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      lastName: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },

      email: {
        required,
        email,
      },
      phone: {
        required,
        integer,
        minLength: minLength(8),
        maxLength: maxLength(15),
      },
      city: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      street: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
    },
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        street: "",
      },
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    userSubmitHandler() {
      if (!this.$v.form.$invalid) {
        // console.log(this.form);
        this.setUser(this.form);

        this.$emit("confirmOrder", this.form);
        setTimeout(() => {
          this.form = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            city: "",
            street: "",
          };
        }, 500);
      }
    },
    updateUser() {
      if (!this.$v.form.$invalid) {
        // console.log(this.form);
        this.setUser(this.form);
        this.$emit("editProfile", true);
      }
    },
  },
  computed: {
    ...mapState(["userData"]),
  },
  mounted() {
    if (this.userData.firstName) {
      this.form = { ...this.userData };
    }
  },
};
</script>

<style lang="scss" scoped>
.error {
  color: #c92e1e;
  font-size: 16px;
  padding-top: 5px;
  padding-right: 3px;
  font-weight: 500;
}
.btn {
  width: 80%;
  display: block;
  margin: 10px auto;
}
</style>