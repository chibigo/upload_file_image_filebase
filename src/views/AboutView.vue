<template>
  <div class="about">
    <v-file-input
      v-model="files"
      color="deep-purple-accent-4"
      counter
      label="File input"
      multiple
      placeholder="Select your files"
      prepend-icon="mdi-paperclip"
      variant="outlined"
      :show-size="1000"
      ref="fileInput"
      @change="onImageUpLoad()"
    >
      <template v-slot:selection="{ fileNames }">
        <template v-for="(fileName, index) in fileNames" :key="fileName">
          <v-chip
            v-if="index < 2"
            color="deep-purple-accent-4"
            label
            size="small"
            class="me-2"
          >
            {{ fileName }}
          </v-chip>

          <span
            v-else-if="index === 2"
            class="text-overline text-grey-darken-3 mx-2"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </template>
    </v-file-input>
    <v-btn prepend-icon="mdi-vuetify" variant="outlined"> Button </v-btn>
  </div>
</template>
<script>
export default {
  data: () => ({
    files: [],
  }),
  methods: {
    onImageUpLoad() {
      console.log(this.files);
    },
  },
};
</script>
<style scoped>
.about {
  margin: auto;
  width: 50vw;
}
</style>
