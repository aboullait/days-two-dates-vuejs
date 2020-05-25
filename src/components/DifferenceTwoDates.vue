<template>
  <v-container class="grey lighten-5">
    <v-row no-getters>
      <v-col cols="12">
        <v-dialog
          ref="first_date_menu"
          v-model="first_date_menu"
          :return-value.sync="first_date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="first_date"
              label="First date"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="first_date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="first_date_menu = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.first_date_menu.save(first_date)"
            >
              Valider
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12">
        <v-dialog
          ref="second_date_menu"
          v-model="second_date_menu"
          :return-value.sync="second_date"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="second_date"
              label="Second date"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="second_date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="second_date_menu = false">
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.second_date_menu.save(second_date)"
            >
              Valider
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="12">{{ difference }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DifferenceTwoDates",
  data() {
    return {
      // TODO: Create two variables for each date, the first one for open or close datepicker menu and the second for the two way binding 
      first_date_menu: false,
      second_date_menu: false,
      first_date: "",
      second_date: "",
    };
  },
  // TODO: A computed variable to calculate difference between two dates
  computed: {
    difference() {
      if (this.first_date && this.second_date) {
        let first_date = new Date(this.first_date);
        let second_date = new Date(this.second_date);
        let result = Math.floor(
          (Date.UTC(
            second_date.getFullYear(),
            second_date.getMonth(),
            second_date.getDate()
          ) -
            Date.UTC(
              first_date.getFullYear(),
              first_date.getMonth(),
              first_date.getDate()
            )) /
            (1000 * 60 * 60 * 24)
        );
        if (result < 0) {
          result = -1 * result;
        }
        return "La différence entre les deux dates est " + result + "jours";
      } else
        return "Veuillez remplir les champs des deux dates pour calculer la différence...";
    },
  },
};
</script>
