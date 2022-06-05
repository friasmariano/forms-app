<template>
  <div>
    <div class="jumbotron header">
      <h1 class="display-4" style="font-weight: 300; color: hsl(195, 80%, 42%)">
        Welcome to Vue 3 Forms
      </h1>
      <p class="lead" style="color: hsl(0, 0%, 44%)">This is a forms demo</p>
    </div>
    <!--Tabs section-->
    <nav style="margin-top: 35px; margin-left: 20px">
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link"
          :class="{ active: basicTab, show: basicTab }"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-home"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          @click="activeBasic"
        >
          Personal
        </button>
        <button
          class="nav-link"
          :class="{ active: modelTab, show: modelTab }"
          id="nav-address-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-address"
          type="button"
          role="tab"
          aria-controls="nav-address"
          aria-selected="false"
          @click="activatemodel"
        >
          Billing Address
        </button>
        <button
          class="nav-link"
          :class="{ active: creditCardTab, show: creditCardTab }"
          id="nav-billing-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-billing"
          type="button"
          role="tab"
          aria-controls="nav-billing"
          aria-selected="false"
          @click="activateCreditCard"
        >
          Credit card
        </button>
      </div>
    </nav>
    <!--Form section-->
    <form novalidate @submit.prevent="save" style="padding: 40px">
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade"
          :class="{ active: basicTab, show: basicTab }"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-basic-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <label for="name" class="col-form-label">Name</label>
              <input
                v-model="model.personal.name.$model"
                id="name"
                class="form-control"
                type="text"
                placeholder="Name"
              />
              <div class="text-danger" v-if="model.personal.name.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.personal.name.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <label for="lastName" class="col-sm-2 col-form-label"
                >Lastname</label
              >
              <input
                v-model="model.personal.lastName.$model"
                class="form-control"
                type="text"
                placeholder="Lastname"
              />
              <div class="text-danger" v-if="model.personal.lastName.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.personal.lastName.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 20px">
            <div class="col-md-6">
              <label for="birthdate">Birthdate</label>
              <input
                v-model="model.personal.birthDate.$model"
                id="birthdate"
                class="form-control"
                type="date"
              />
              <div class="text-danger" v-if="model.personal.birthDate.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.personal.birthDate.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <label for="phoneNumber">Phone</label>
              <input
                id="phoneNumber"
                v-model="model.personal.phone.$model"
                class="form-control"
                placeholder="001-000-0101"
                type="text"
              />
              <div class="text-danger" v-if="model.personal.phone.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.personal.phone.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          :class="{ active: modelTab, show: modelTab }"
          id="nav-address"
          role="tabpanel"
          aria-labelledby="nav-address-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <label for="">Address</label>
              <input
                class="form-control"
                type="text"
                v-model="model.billingInfo.address.$model"
              />
              <div
                class="text-danger"
                v-if="model.billingInfo.address.$invalid"
              >
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.billingInfo.address.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <label for="">Apartment</label>
              <input
                class="form-control"
                type="text"
                v-model="model.billingInfo.apartment.$model"
              />
              <div
                class="text-danger"
                v-if="model.billingInfo.apartment.$invalid"
              >
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.billingInfo.apartment.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 20px">
            <div class="col-md-4">
              <label for="">City</label>
              <input
                class="form-control"
                type="text"
                v-model="model.billingInfo.city.$model"
              />
              <div class="text-danger" v-if="model.billingInfo.city.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.billingInfo.city.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <label for="">State</label>
              <select
                id="stateSelect"
                v-model="model.billingInfo.state.$model"
                class="form-control"
              >
                <option
                  v-for="s in states"
                  :key="s.String"
                  :value="s.abbreviation"
                >
                  {{ s.abbreviation }}
                </option>
              </select>
              <div class="text-danger" v-if="model.billingInfo.state.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.billingInfo.state.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <label for="">ZipCode</label>
              <input
                class="form-control"
                type="text"
                v-model="model.billingInfo.zipcode.$model"
                placeholder="11111-22222"
              />
              <div
                class="text-danger"
                v-if="model.billingInfo.zipcode.$invalid"
              >
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.billingInfo.zipcode.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          :class="{ active: creditCardTab, show: creditCardTab }"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div class="row">
            <div class="col-md-6">
              <label for="cardNumber">Credit Card Number</label>
              <input
                id="cardNumber"
                v-model="model.creditCard.number.$model"
                class="form-control"
                type="text"
              />
              <div class="text-danger" v-if="model.creditCard.number.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.creditCard.number.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <label for="name">Name on Card</label>
              <input
                id="name"
                v-model="model.creditCard.name.$model"
                class="form-control"
                type="text"
              />
              <div class="text-danger" v-if="model.creditCard.name.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.creditCard.name.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 20px">
            <div class="col-md-4">
              <label for="expirationMonth">Expiration date</label>
              <input
                id="expirationMonth"
                v-model="model.creditCard.expirationDate.$model"
                class="form-control"
                type="month"
              />
              <div
                class="text-danger"
                v-if="model.creditCard.expirationDate.$invalid"
              >
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.creditCard.expirationDate.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <label for="cvv">CVV</label>
              <input
                id="cvv"
                v-model="model.creditCard.cvv.$model"
                class="form-control"
                type="text"
              />
              <div class="text-danger" v-if="model.creditCard.cvv.$invalid">
                <ul class="list-unstyled">
                  <li
                    v-for="error in model.creditCard.cvv.$errors"
                    :key="error.String"
                  >
                    {{ error.$message }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div style="margin-top: 22px; ">
          <div v-if="saveMessage" class="alert alert-success" role="alert">
            We are ready to save!
          </div>
        </div>
        <div class="col-md-6" style="margin-top: 15px">
          <input
            class="btn"
            type="submit"
            :disabled="model.$invalid"
            style="
              color: hsl(195, 0%, 98%);
              background-color: hsl(195, 80%, 42%);
            "
          />
        </div>
      </div>
    </form>
    <!---->
    <!-- <div>
      <pre>{{ model }}</pre>
    </div> -->
  </div>
</template>

<script>
import state from "@/state";
// import billing from "@/state/billing";
import states from "@/lookup/states";

export default {
  setup() {
    const model = state.toModel();

    return {
      model,
      states,
    };
  },
  data() {
    return {
      basicTab: true,
      modelTab: false,
      creditCardTab: false,
      years: [],
      saveMessage: false,
    };
  },
  mounted() {
    for (let y = 2022; y < 2027; y++) {
      const myObject = {
        Digit: y,
      };
      this.years.push(myObject);
    }
  },
  methods: {
    save() {
      if (this.model.$validate()) {
        this.saveMessage = true;
      }
    },
    activeBasic() {
      this.basicTab = true;
      this.modelTab = false;
      this.creditCardTab = false;
    },
    activatemodel() {
      this.modelTab = true;
      this.basicTab = false;
      this.creditCardTab = false;
    },
    activateCreditCard() {
      this.creditCardTab = true;
      this.modelTab = false;
      this.basicTab = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 35px;
  background-color: hsl(0, 0%, 92%);
  filter: drop-shadow(0px 3px 4px hsl(0, 0%, 80%));
}
</style>
